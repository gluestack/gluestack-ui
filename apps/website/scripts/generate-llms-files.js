const fs = require('fs');
const path = require('path');
const glob = require('glob');

const DOCS_DIR = path.join(__dirname, '../app/ui/docs');
const OUTPUT_DIR = path.join(__dirname, '../public');
const LLMS_TXT_PATH = path.join(OUTPUT_DIR, 'llms.txt');
const LLMS_FULL_TXT_PATH = path.join(OUTPUT_DIR, 'llms-full.txt');

// ---------------------------------------------------------------------------
// 1. MDX → Clean Markdown
// ---------------------------------------------------------------------------

/**
 * Strip the <AdvancedComponentLLMGenerator ...> opening tag (including its
 * mdxContent prop with nested template literals) and </AdvancedComponentLLMGenerator>
 * closing tag. The body content after the opening tag IS the actual documentation.
 *
 * We can't use a simple regex for the opening tag because the mdxContent prop
 * contains nested template literals (backticks inside backticks), so we find
 * the opening tag start and then walk forward to find its closing `>`.
 */
function stripAdvancedComponentLLMGenerator(raw) {
  const tagStart = raw.indexOf('<AdvancedComponentLLMGenerator');
  if (tagStart === -1) return raw;

  // Walk forward from the tag start to find the closing '>' of the opening tag.
  // We need to handle nested braces {} because the mdxContent prop uses {`...`}.
  let depth = 0;
  let pos = tagStart + '<AdvancedComponentLLMGenerator'.length;

  while (pos < raw.length) {
    const ch = raw[pos];
    if (ch === '{') {
      depth++;
    } else if (ch === '}') {
      depth--;
    } else if (ch === '>' && depth === 0) {
      // Found the closing '>' of the opening tag
      break;
    }
    pos++;
  }

  if (pos >= raw.length) return raw;

  // Strip: from tagStart to pos+1 (inclusive of the '>')
  let content = raw.substring(0, tagStart) + raw.substring(pos + 1);

  // Strip the closing tag
  content = content.replace(/<\/AdvancedComponentLLMGenerator>/g, '');

  return content;
}

/**
 * Main MDX → clean markdown converter.
 * Handles all the common MDX patterns used in gluestack-ui docs:
 * - import statements → removed
 * - <CodePreviewer code={...} /> → fenced code blocks
 * - <CodeBlock code="..." language="..." /> → fenced code blocks
 * - <Table>/<TableRow>/<TableCell> → markdown tables
 * - <InlineCode>...</InlineCode> → `code`
 * - <Tabs>/<TabItem> → content extracted per tab
 * - Visual-only components → stripped
 */
function cleanMDX(raw) {
  let content = raw;

  // --- Strip AdvancedComponentLLMGenerator wrapper ---
  // This component wraps the documentation for LLM generation at runtime.
  // The body content after the opening tag IS the documentation — we just
  // need to strip the tag itself (its mdxContent prop has nested template
  // literals that can't be parsed by regex).
  content = stripAdvancedComponentLLMGenerator(content);

  // --- Remove all import lines ---
  content = content.replace(/^import\s+[\s\S]*?from\s+['"][^'"]*['"];?\s*$/gm, '');

  // --- Process <CodePreviewer code={`...`} ... /> → fenced code block ---
  content = replaceCodePreviewer(content);

  // --- Process <CodeBlock code="..." language="..." /> → fenced code block ---
  content = replaceCodeBlock(content);

  // --- Protect fenced code blocks from subsequent transformations ---
  const codeBlocks = [];
  content = content.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match);
    return `%%CODE_BLOCK_${codeBlocks.length - 1}%%`;
  });

  // --- Process <InlineCode>...</InlineCode> → `code` ---
  content = content.replace(/<InlineCode>([\s\S]*?)<\/InlineCode>/g, '`$1`');

  // --- Process <Table>...</Table> → markdown table ---
  content = replaceTables(content);

  // --- Process <Tabs>/<TabItem> → extract content per tab ---
  content = replaceTabs(content);

  // --- Strip remaining known visual/interactive components ---
  content = stripVisualComponents(content);

  // --- Strip remaining self-closing JSX components ---
  content = content.replace(/<[A-Z][a-zA-Z]*\s*[^>]*\/>/g, '');

  // --- Strip remaining paired JSX components but keep their text children ---
  content = content.replace(/<([A-Z][a-zA-Z]*)[^>]*>([\s\S]*?)<\/\1>/g, '$2');

  // --- Restore code blocks ---
  content = content.replace(/%%CODE_BLOCK_(\d+)%%/g, (match, idx) => {
    return codeBlocks[parseInt(idx)];
  });

  // --- Strip <br /> and <br> ---
  content = content.replace(/<br\s*\/?>/gi, '');

  // --- Strip empty <> ... </> fragments ---
  content = content.replace(/<>\s*<\/>/g, '');

  // --- Resolve template literals with process.env ---
  content = content.replace(
    /\$\{process\.env\.NEXT_PUBLIC_GLUESTACK_COMMAND\s*\|\|\s*'([^']*)'\}/g,
    '$1'
  );

  // --- Clean up excessive blank lines ---
  content = content.replace(/\n{3,}/g, '\n\n');

  // --- Remove trailing whitespace on each line ---
  content = content
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n');

  return content.trim();
}

/**
 * Replace <CodePreviewer code={`...`} ... /> with fenced code blocks.
 *
 * The code prop uses template literals that may contain JSX with curly braces,
 * self-closing tags, and other syntax that makes regex parsing unreliable.
 * Strategy: find the tag, find the code prop, then search for the known props
 * (argTypes, reactLive, importMap) that always follow the code prop to locate
 * where the code template literal ends.
 */
function replaceCodePreviewer(content) {
  let result = content;
  let searchStart = 0;

  while (true) {
    const tagStart = result.indexOf('<CodePreviewer', searchStart);
    if (tagStart === -1) break;

    // Find the code prop
    const codePropIdx = result.indexOf('code={`', tagStart);
    if (codePropIdx === -1 || codePropIdx > tagStart + 200) {
      // No backtick-delimited code prop found near the tag start
      searchStart = tagStart + 1;
      continue;
    }

    const codeContentStart = codePropIdx + 'code={`'.length;

    // Find the end of the entire <CodePreviewer ... /> tag
    // We search for '/>' but must skip any '/>' inside the code template literal.
    // The trick: the code prop is always followed by argTypes= or reactLive= or importMap=.
    // Find the first occurrence of these after the code prop start.
    const afterCodeStart = result.substring(codeContentStart);
    const nextPropMatch = afterCodeStart.match(/[`\}]\s*\n\s*(?:argTypes|reactLive|importMap)\s*=/);

    if (!nextPropMatch) {
      // Can't find the end of the code prop — skip this tag
      searchStart = tagStart + 1;
      continue;
    }

    // The code content ends just before the closing backtick
    const codeContentEnd = nextPropMatch.index;

    // Find the self-closing /> of the entire tag
    // After the nextProp, search for />
    const afterCodeProp = codeContentStart + nextPropMatch.index + nextPropMatch[0].length;
    const tagEndIdx = result.indexOf('/>', afterCodeProp);
    if (tagEndIdx === -1) {
      searchStart = tagStart + 1;
      continue;
    }

    const code = result.substring(codeContentStart, codeContentStart + codeContentEnd);
    const replacement = '\n```jsx\n' + code.trim() + '\n```\n';
    const tagEnd = tagEndIdx + 2; // past '/>'
    result = result.substring(0, tagStart) + replacement + result.substring(tagEnd);
    searchStart = tagStart + replacement.length;
  }

  return result;
}

/**
 * Replace <CodeBlock code="..." language="..." /> with fenced code blocks.
 */
function replaceCodeBlock(content) {
  // <CodeBlock code={`...`} language="bash" />
  const codeBlockBacktickRegex = /<CodeBlock\s+code=\{`([\s\S]*?)`\}\s+language="([^"]*)"\s*\/>/g;
  content = content.replace(codeBlockBacktickRegex, (match, code, lang) => {
    return '\n```' + lang + '\n' + code.trim() + '\n```\n';
  });

  // <CodeBlock code="..." language="bash" />
  const codeBlockQuoteRegex = /<CodeBlock\s+code="([^"]*)"\s+language="([^"]*)"\s*\/>/g;
  content = content.replace(codeBlockQuoteRegex, (match, code, lang) => {
    return '\n```' + lang + '\n' + code.trim() + '\n```\n';
  });

  // <CodeBlock code={`...`} /> (no language)
  const codeBlockNoLangRegex = /<CodeBlock\s+code=\{`([\s\S]*?)`\}\s*\/>/g;
  content = content.replace(codeBlockNoLangRegex, (match, code) => {
    return '\n```\n' + code.trim() + '\n```\n';
  });

  // <CodeBlock code="..." /> (no language)
  const codeBlockNoLangQuoteRegex = /<CodeBlock\s+code="([^"]*)"\s*\/>/g;
  content = content.replace(codeBlockNoLangQuoteRegex, (match, code) => {
    return '\n```\n' + code.trim() + '\n```\n';
  });

  return content;
}

/**
 * Convert <Table>...</Table> with TableRow/TableCell to markdown tables.
 */
function replaceTables(content) {
  // Find each <Table>...</Table> block
  const tableRegex = /<Table>([\s\S]*?)<\/Table>/g;

  content = content.replace(tableRegex, (match, inner) => {
    const rows = [];

    // Extract header rows
    const headerRegex = /<TableHeader>([\s\S]*?)<\/TableHeader>/g;
    let headerMatch;
    while ((headerMatch = headerRegex.exec(inner)) !== null) {
      const rowRegex = /<TableRow>([\s\S]*?)<\/TableRow>/g;
      let rowMatch;
      while ((rowMatch = rowRegex.exec(headerMatch[1])) !== null) {
        const cells = extractCells(rowMatch[1], 'TableHeaderCell');
        if (cells.length > 0) rows.push(cells);
      }
    }

    // Extract body rows
    const bodyRegex = /<TableBody>([\s\S]*?)<\/TableBody>/g;
    let bodyMatch;
    while ((bodyMatch = bodyRegex.exec(inner)) !== null) {
      const rowRegex = /<TableRow>([\s\S]*?)<\/TableRow>/g;
      let rowMatch;
      while ((rowMatch = rowRegex.exec(bodyMatch[1])) !== null) {
        const cells = extractCells(rowMatch[1], 'TableCell');
        if (cells.length > 0) rows.push(cells);
      }
    }

    if (rows.length === 0) return '';

    // Build markdown table
    const colCount = rows[0].length;
    let md = '\n';

    // Header row
    md += '| ' + rows[0].join(' | ') + ' |\n';

    // Separator
    md += '| ' + rows[0].map(() => '---').join(' | ') + ' |\n';

    // Data rows
    for (let i = 1; i < rows.length; i++) {
      // Pad row to match header column count
      while (rows[i].length < colCount) rows[i].push('');
      md += '| ' + rows[i].join(' | ') + ' |\n';
    }

    return md;
  });

  return content;
}

/**
 * Extract cell text from a table row, handling both TableCell and TableHeaderCell.
 */
function extractCells(rowContent, cellTag) {
  const cells = [];
  const cellRegex = new RegExp(`<${cellTag}>([\\s\\S]*?)<\\/${cellTag}>`, 'g');
  let cellMatch;
  while ((cellMatch = cellRegex.exec(rowContent)) !== null) {
    let cellText = cellMatch[1].trim();
    // Convert <InlineCode>text</InlineCode> within cells to `text`
    cellText = cellText.replace(/<InlineCode>([\s\S]*?)<\/InlineCode>/g, '`$1`');
    // Clean up whitespace
    cellText = cellText.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    cells.push(cellText);
  }
  return cells;
}

/**
 * Replace <Tabs>/<TabItem> blocks — extract content per tab with a heading.
 */
function replaceTabs(content) {
  // Process each <Tabs>...</Tabs> block
  const tabsRegex = /<Tabs>([\s\S]*?)<\/Tabs>/g;

  content = content.replace(tabsRegex, (match, inner) => {
    let result = '';
    const tabItemRegex = /<TabItem\s+label="([^"]*)">([\s\S]*?)<\/TabItem>/g;
    let tabMatch;
    while ((tabMatch = tabItemRegex.exec(inner)) !== null) {
      const label = tabMatch[1];
      const tabContent = tabMatch[2].trim();
      result += `\n**${label}:**\n\n${tabContent}\n\n`;
    }
    return result;
  });

  return content;
}

/**
 * Strip visual-only / interactive components that don't contribute to LLM understanding.
 */
function stripVisualComponents(content) {
  const stripPaired = [
    'AnatomyImage',
    'Responsiveness',
    'ManualInstallationNote',
    'GithubLink',
    'StarterKitLink',
    'KitchenSinkLink',
  ];

  for (const tag of stripPaired) {
    // Paired component: <Tag>...</Tag> → removed entirely
    const pairRegex = new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`, 'g');
    content = content.replace(pairRegex, '');
    // Self-closing: <Tag ... />
    const selfClosingRegex = new RegExp(`<${tag}[^>]*/>`, 'g');
    content = content.replace(selfClosingRegex, '');
  }

  // Strip <ManualInstallationNote ... /> (self-closing variant)
  content = content.replace(/<ManualInstallationNote[^>]*>/g, '');

  // Strip <iframe>...</iframe> and <iframe ... /> (embedded content, not useful for LLMs)
  content = content.replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/g, '');
  content = content.replace(/<iframe\s[^>]*?\/>/gs, '');

  return content;
}

// ---------------------------------------------------------------------------
// 2. Page metadata extraction
// ---------------------------------------------------------------------------

/**
 * Extract the page title from the first H1 heading in the content.
 * Strips markdown links and formatting from the title.
 * Falls back to deriving from the file path.
 */
function extractTitle(content, relativePath) {
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) {
    let title = h1Match[1].trim();
    // Strip markdown links: [text](url) → text
    title = title.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    // Strip bold markers
    title = title.replace(/\*\*/g, '');
    return title.trim();
  }
  // Fallback: derive from the directory name (e.g., "accordion" from ".../components/accordion/index.mdx")
  const parts = relativePath.replace(/\.mdx$/, '').split('/');
  // Find the meaningful part (skip "index")
  const namePart = parts.filter((p) => p !== 'index').pop() || 'Untitled';
  return namePart
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * Extract a short description for the page — first paragraph after the H1.
 * Skips markdown formatting artifacts, HTML tags, and tab labels.
 */
function extractDescription(cleanedContent) {
  const lines = cleanedContent.split('\n');
  let foundTitle = false;
  for (const line of lines) {
    if (line.startsWith('# ')) {
      foundTitle = true;
      continue;
    }
    if (foundTitle) {
      let trimmed = line.trim();
      // Skip empty lines, headings, code blocks, tables, tab labels, HTML, JSX
      if (
        !trimmed ||
        trimmed.startsWith('#') ||
        trimmed.startsWith('```') ||
        trimmed.startsWith('|') ||
        trimmed.startsWith('<') ||
        trimmed.startsWith('**') && trimmed.endsWith('**')  // Bold-only labels like **CLI:**
      ) {
        continue;
      }
      // Strip markdown links from description for cleaner text
      trimmed = trimmed.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
      // Strip any remaining HTML-like tags
      trimmed = trimmed.replace(/<[^>]+>/g, '');
      // Truncate to ~120 chars for the summary
      return trimmed.length > 120 ? trimmed.slice(0, 117) + '...' : trimmed;
    }
  }
  return '';
}

// ---------------------------------------------------------------------------
// 3. Page categorization
// ---------------------------------------------------------------------------

function getCategory(relativePath) {
  const parts = relativePath.split('/');
  if (parts[0] === 'home') return 'Getting Started';
  if (parts[0] === 'components') return 'Components';
  if (parts[0] === 'guides') return 'Guides';
  if (parts[0] === 'apps') return 'Apps';
  if (parts[0] === 'hooks') return 'Hooks';
  if (parts[0] === 'mcp-server') return 'MCP Server';
  if (parts[0] === 'changelog') return 'Changelog';
  return 'Other';
}

// ---------------------------------------------------------------------------
// 4. Main generation
// ---------------------------------------------------------------------------

async function generateFiles() {
  console.log('Generating llms.txt and llms-full.txt...');

  const mdxFiles = glob.sync(`${DOCS_DIR}/**/*.mdx`);

  if (!Array.isArray(mdxFiles) || mdxFiles.length === 0) {
    console.error('No MDX files found in', DOCS_DIR);
    process.exit(1);
  }

  // Sort files by category, then alphabetically for consistent output
  mdxFiles.sort();

  const pages = [];

  for (const file of mdxFiles) {
    const relativePath = path.relative(DOCS_DIR, file);
    const urlPath = `/ui/docs/${relativePath.replace(/\.mdx$/, '')}`;
    const rawContent = fs.readFileSync(file, 'utf-8');

    const cleanedContent = cleanMDX(rawContent);
    const title = extractTitle(cleanedContent, relativePath);
    const description = extractDescription(cleanedContent);
    const category = getCategory(relativePath);

    pages.push({ relativePath, urlPath, title, description, category, cleanedContent });
  }

  // --- Generate llms-full.txt ---
  let fullContent = '';

  for (const page of pages) {
    fullContent += `## ${page.title}\n\n`;
    fullContent += `URL: ${page.urlPath}\n\n`;
    fullContent += page.cleanedContent + '\n\n';
    fullContent += '---\n\n'; // horizontal rule between pages
  }

  fs.writeFileSync(LLMS_FULL_TXT_PATH, fullContent);
  console.log(`Created ${LLMS_FULL_TXT_PATH}`);

  // --- Generate llms.txt (spec-compliant summary) ---
  let summary = '';

  // Title (required)
  summary += '# gluestack UI\n\n';

  // Summary (required — blockquote style per spec)
  summary += '> Universal React & React Native component library with Tailwind CSS v4.\n';
  summary += '> Copy-paste components for web (Next.js) and mobile (Expo / React Native), supporting both NativeWind v5 and UniWind engines.\n\n';

  // Group pages by category
  const categoryOrder = [
    'Getting Started',
    'Components',
    'Guides',
    'Hooks',
    'Apps',
    'MCP Server',
    'Changelog',
    'Other',
  ];

  const grouped = {};
  for (const page of pages) {
    if (!grouped[page.category]) grouped[page.category] = [];
    grouped[page.category].push(page);
  }

  for (const cat of categoryOrder) {
    if (!grouped[cat] || grouped[cat].length === 0) continue;

    summary += `## ${cat}\n\n`;

    for (const page of grouped[cat]) {
      const desc = page.description ? `: ${page.description}` : '';
      summary += `- [${page.title}](${page.urlPath})${desc}\n`;
    }

    summary += '\n';
  }

  // Optional details
  summary += '## Quick Reference\n\n';
  summary += '- **CLI**: `npx gluestack-ui@alpha add <component>`\n';
  summary += '- **Theming**: CSS variables defined in `global.css` with `@theme inline` mappings\n';
  summary += '- **Engines**: NativeWind v5 or UniWind\n';
  summary += '- **Docs**: https://v5.gluestack.io/ui/docs\n\n';

  summary += '## Full Documentation\n\n';
  summary += '- [llms-full.txt](./llms-full.txt): Complete documentation for all components and guides\n';

  fs.writeFileSync(LLMS_TXT_PATH, summary);
  console.log(`Created ${LLMS_TXT_PATH}`);

  console.log(`\nDone! Processed ${pages.length} pages.`);
}

generateFiles().catch((err) => {
  console.error('Error generating LLMS files:', err);
  process.exit(1);
});

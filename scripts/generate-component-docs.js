/**
 * scripts/generate-component-docs.js
 * ------------------------------------
 * Parses all MDX files at src/components/ui/<name>/docs/index.mdx
 * and generates:
 *   1. apps/figma-kit/app/component-docs.ts   (TS module)
 *   2. apps/figma-kit/react-to-figma-test/component-docs.json
 * Also updates the COMPONENTS list in ui.html.
 *
 * Run:  node scripts/generate-component-docs.js
 */

const path = require('path');
const fs   = require('fs');

const ROOT         = process.cwd();
const SRC_UI       = path.join(ROOT, 'src', 'components', 'ui');
const SIDEBAR_JSON = path.join(ROOT, 'src', 'sidebar.json');
const DEST_TS      = path.join(ROOT, 'apps', 'figma-kit', 'app', 'component-docs.ts');
const DEST_JSON    = path.join(ROOT, 'apps', 'figma-kit', 'react-to-figma-test', 'component-docs.json');
const UI_HTML      = path.join(ROOT, 'apps', 'figma-kit', 'react-to-figma-test', 'ui.html');

// ── Helpers ────────────────────────────────────────────────────────────────────

function toPascalCase(kebab) {
  return kebab.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim();
    if (key) result[key] = val;
  }
  return result;
}

function cleanCell(raw) {
  return raw
    .replace(/<InlineCode>([\s\S]*?)<\/InlineCode>/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractOptions(typeStr) {
  const quoted = typeStr.match(/"([^"]+)"/g);
  if (quoted) return quoted.map(s => s.slice(1, -1));
  const single = typeStr.match(/'([^']+)'/g);
  if (single) return single.map(s => s.slice(1, -1));
  return [];
}

function extractDescription(content) {
  let body = content.replace(/^---[\s\S]*?---\r?\n/, '');
  body = body.replace(/^import\s[\s\S]*?(?:\r?\n){2}/gm, '');
  const h1Idx = body.search(/^# .+/m);
  if (h1Idx === -1) return '';
  const afterH1 = body.slice(h1Idx).replace(/^# .+\r?\n/, '');
  const lines = afterH1.split(/\r?\n/);
  const paragraphLines = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('///') || trimmed.startsWith('<br') || trimmed.startsWith('##')) break;
    if (trimmed.startsWith('This is an illustration')) continue;
    if (trimmed.startsWith('import ')) continue;
    if (paragraphLines.length === 0 && !trimmed) continue;
    if (!trimmed && paragraphLines.length > 0) break;
    if (trimmed) paragraphLines.push(trimmed);
  }
  return paragraphLines
    .join(' ')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim();
}

function parseTableProps(content) {
  const props = [];
  const rowRe = /<TableRow>([\s\S]*?)<\/TableRow>/g;
  let rowMatch;
  while ((rowMatch = rowRe.exec(content)) !== null) {
    const rowBody = rowMatch[1];
    if (/<TableHeaderCell/.test(rowBody)) continue;

    const cellRe = /<TableCell>([\s\S]*?)<\/TableCell>/g;
    const cells = [];
    let cellMatch;
    while ((cellMatch = cellRe.exec(rowBody)) !== null) {
      cells.push(cleanCell(cellMatch[1]));
    }

    if (cells.length < 2 || !cells[0]) continue;
    const name = cells[0];
    const type = cells[1] || '';
    const description = cells[3] !== undefined ? cells[3] : (cells[2] || '');
    props.push({ name, type, options: extractOptions(type), description });
  }
  return props;
}

function readSidebar() {
  try { return JSON.parse(fs.readFileSync(SIDEBAR_JSON, 'utf8')); }
  catch (_) { return null; }
}

function getSidebarInfo(componentName, sidebar) {
  const slug = componentName.toLowerCase().replace(/\s/g, '-');
  const defaultUrl = `https://gluestack.io/ui/docs/components/${slug}`;
  try {
    const sections = (sidebar && sidebar.navigation && sidebar.navigation.sections) ? sidebar.navigation.sections : [];
    const compSection = sections.find(s => s.title === 'Components');
    const subs = (compSection && compSection.subsections) ? compSection.subsections : [];
    for (const sub of subs) {
      if (sub.type !== 'heading') continue;
      for (const item of (sub.items || [])) {
        const itemSlug = ((item.path || '').split('/').pop() || '');
        if (
          (item.title || '').toLowerCase() === componentName.toLowerCase() ||
          itemSlug.toLowerCase() === slug
        ) {
          return { category: sub.title, url: `https://gluestack.io${item.path}` };
        }
      }
    }
  } catch (_) { /* ignore */ }
  return { category: 'Other', url: defaultUrl };
}

function esc(s) { return JSON.stringify(s); }

function generateTS(docs) {
  const entries = docs.map(doc => {
    const propsStr = doc.properties.length === 0
      ? '    []'
      : '    [\n' +
        doc.properties.map(p =>
          `      { name: ${esc(p.name)}, type: ${esc(p.type)}, options: ${JSON.stringify(p.options)}, description: ${esc(p.description)} }`
        ).join(',\n') +
        '\n    ]';

    return (
      `  ${esc(doc.name)}: {\n` +
      `    name: ${esc(doc.name)},\n` +
      `    description: ${esc(doc.description)},\n` +
      `    bestPractices: [],\n` +
      `    properties:\n${propsStr},\n` +
      `    gluestackUrl: ${esc(doc.gluestackUrl)},\n` +
      `  }`
    );
  });

  return (
`/**
 * component-docs.ts
 * ------------------
 * AUTO-GENERATED by scripts/generate-component-docs.js
 * DO NOT EDIT — run \`node scripts/generate-component-docs.js\` to regenerate.
 * Source: src/components/ui/*/docs/index.mdx
 */

export interface PropEntry {
  name: string;
  type: string;
  options: string[];
  description: string;
}

export interface ComponentDoc {
  name: string;
  description: string;
  bestPractices: string[];
  properties: PropEntry[];
  gluestackUrl: string;
}

const DOCS: Record<string, ComponentDoc> = {
${entries.join(',\n\n')}
};

export default DOCS;
`
  );
}

function updateUiHtml(docsMap, list) {
  if (!fs.existsSync(UI_HTML)) {
    console.warn('⚠️  ui.html not found — skipping');
    return;
  }
  const listStr = JSON.stringify(list, null, 6);
  const docsStr = JSON.stringify(docsMap, null, 2);
  let html = fs.readFileSync(UI_HTML, 'utf8');
  
  let replaced = html.replace(/var COMPONENTS\s*=\s*\[[\s\S]*?\];/, `var COMPONENTS = ${listStr};`);
  
  // Inject FULL_DOCS if it exists, otherwise add it
  if (replaced.includes('var FULL_DOCS =')) {
    replaced = replaced.replace(/var FULL_DOCS\s*=\s*\{[\s\S]*?\};\n/, `var FULL_DOCS = ${docsStr};\n`);
  } else {
    replaced = replaced.replace('var COMPONENTS =', `var FULL_DOCS = ${docsStr};\n\n    var COMPONENTS =`);
  }

  if (replaced === html) {
    console.warn('⚠️  Could not find COMPONENTS array in ui.html — skipping');
    return;
  }
  fs.writeFileSync(UI_HTML, replaced, 'utf8');
  console.log(`✅ ui.html COMPONENTS list updated (${list.length} components)`);
}

// ── Main ───────────────────────────────────────────────────────────────────────

function main() {
  console.log('🔍 Scanning src/components/ui for MDX docs...');
  const sidebar = readSidebar();

  const allDirs = fs.readdirSync(SRC_UI, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

  const docsMap = {};
  const docsList = [];

  for (const dir of allDirs) {
    const mdxPath = path.join(SRC_UI, dir, 'docs', 'index.mdx');
    if (!fs.existsSync(mdxPath)) continue;

    const content = fs.readFileSync(mdxPath, 'utf8');
    const fm = parseFrontmatter(content);
    const name = (fm.pageTitle && fm.pageTitle.trim()) ? fm.pageTitle.trim() : toPascalCase(dir);
    const description = extractDescription(content);
    const properties = parseTableProps(content);
    const info = getSidebarInfo(name, sidebar);

    const docObj = {
      name,
      description,
      bestPractices: [],
      properties,
      gluestackUrl: info.url,
      category: info.category,
    };

    docsMap[name] = docObj;
    docsList.push({ name, category: info.category });
    console.log(`  ✔ ${name}  (${properties.length} props)`);
  }

  // We need docs as an array for generateTS
  const docsArray = Object.values(docsMap);
  fs.writeFileSync(DEST_TS, generateTS(docsArray), 'utf8');
  console.log(`\n✅ component-docs.ts  →  ${DEST_TS}`);

  fs.writeFileSync(DEST_JSON, JSON.stringify(docsMap, null, 2), 'utf8');
  console.log(`✅ component-docs.json →  ${DEST_JSON}`);

  updateUiHtml(docsMap, docsList);

  console.log(`\n🎉 Done! ${docsArray.length} components documented.`);
}

main();

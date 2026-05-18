import type {
  AIProvider,
  AuthorInfo,
  DraftContent,
  Outline,
  OutlineSection,
  PipelineConfig,
  StageResult,
} from '../types';
import { countWords } from '../utils/reading-time';
import { log } from '@clack/prompts';

const SECTION_SYSTEM = `You are a technical blog writer for gluestack-ui, a universal React & React Native component library. You write MDX content that will be published on the gluestack blog.

CRITICAL MDX RULES:
1. Do NOT use YAML frontmatter. No --- blocks at the top.
2. Use gluestack-ui v3 JSX components: Box, HStack, Text, Image, Heading, TOC
3. For images use: source={{ uri: 'https://example.com/image.png' }}
4. Code blocks use triple backticks with language: \`\`\`tsx or \`\`\`bash
5. Write in a clear, professional, developer-friendly voice
6. Include practical code examples with gluestack-ui v3 syntax
7. Use bold (**text**) and inline code (\`code\`) for emphasis where appropriate
8. Do NOT use HTML <p> tags — use plain paragraphs or <Text> components
9. Keep paragraphs concise — 2-3 sentences max
10. Every code example must be runnable and use current gluestack-ui v3 APIs`;

const GLUESTACK_REFERENCE = `
gluestack-ui v3 component reference (use ONLY these APIs):
- <Box> — layout container with className
- <HStack> — horizontal stack with className, gap
- <VStack> — vertical stack with className, gap
- <Text> — text with className
- <Heading> — heading with className
- <Image> — image with source={{ uri: '...' }} or source={require('...')}, className, resizeMode
- <Button> — button with className, variant, size, action
- <Input> — text input with className, variant, size
- <Checkbox> — checkbox with className
- <Select> — select dropdown
- <Modal> — modal dialog
- <Toast> — toast notification

Styling: Use Tailwind/NativeWind className props. No style prop.
Theme: Use semantic tokens like text-typography-900, bg-background-50, etc.
Imports: import { Box } from '@/components/ui/box';`;

export async function runDraft(
  provider: AIProvider,
  outline: Outline,
  author: AuthorInfo,
  config: PipelineConfig
): Promise<StageResult<DraftContent>> {
  try {
    log.step('Drafting blog content section by section...');

    const sections: string[] = [];

    // Generate each major section independently
    for (let i = 0; i < outline.sections.length; i++) {
      const section = outline.sections[i];
      log.info(`  Drafting section ${i + 1}/${outline.sections.length}: ${section.heading}`);

      const sectionContent = await draftSection(provider, section, outline, config);
      sections.push(sectionContent);
    }

    // Assemble the full MDX
    const mdxBody = assembleMDX(outline, sections, author);

    const wordCount = countWords(mdxBody);

    log.info(`  Draft complete: ${wordCount} words`);

    return { ok: true, data: { mdxBody, wordCount } };
  } catch (err: any) {
    return { ok: false, error: err.message, recoverable: true };
  }
}

async function draftSection(
  provider: AIProvider,
  section: OutlineSection,
  outline: Outline,
  config: PipelineConfig
): Promise<string> {
  const sectionOutline = JSON.stringify(section, null, 2);
  const keywords = outline.targetKeywords.join(', ');

  const userPrompt = `Write the MDX content for this blog section:

SECTION: ${section.heading}
KEY POINTS TO COVER:
${section.keyPoints.map((kp) => `  - ${kp}`).join('\n')}
${section.hasCodeExample ? 'INCLUDE: At least one runnable code example' : ''}
${section.gluestackComponents.length > 0 ? `USE THESE COMPONENTS: ${section.gluestackComponents.join(', ')}` : ''}

FULL ARTICLE CONTEXT:
Title: ${outline.title}
Target keywords: ${keywords}
Target total word count: ${config.targetWordCount}

Write ONLY the MDX content for this section (do NOT include the H1 title or imports).
Start with the ## heading for this section.
${section.subsections.length > 0 ? `Include ### subsection headings for: ${section.subsections.map((s) => s.heading).join(', ')}` : ''}

${GLUESTACK_REFERENCE}`;

  const response = await provider.chat({
    system: SECTION_SYSTEM,
    user: userPrompt,
    jsonMode: false,
  });

  return response.trim();
}

function assembleMDX(
  outline: Outline,
  sectionContents: string[],
  author: AuthorInfo
): string {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Build TOC items from sections
  const tocItems = outline.sections
    .filter((s) => s.level === 2)
    .map((s) => {
      const id = s.heading
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      return `    {\n      id: '${id}',\n      title: '${s.heading.replace(/'/g, "\\'")}',\n    },`;
    })
    .join('\n');

  // Build the MDX
  const parts: string[] = [];

  // Imports
  parts.push(`import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Image } from '@/components/ui/image';
import { Heading } from '@/components/ui/heading';
import { TOC } from '@/components/page-components/blogs-page/TOC';`);

  // Date
  parts.push(`\n<Text className="text-sm pt-2">${dateStr}</Text>`);

  // Title
  parts.push(`\n# ${outline.title}`);

  // Author HStack
  parts.push(`\n<HStack className="gap-3 items-center">
  <Box className="h-8 w-8 rounded-full overflow-hidden">
    <Image
      source={{ uri: '${author.avatarUrl}' }}
      alt="${author.name.toLowerCase().replace(/\s+/g, '-')}"
      className="h-8 w-8"
    />
  </Box>
  <Box>
    <Text className="text-sm font-bold text-typography-900">${author.name}</Text>
    <Text className="text-sm">${author.occupation}</Text>
  </Box>
</HStack>`);

  // Introduction
  parts.push(`\n<br />\n`);
  parts.push(outline.introduction);

  // Sections
  for (const content of sectionContents) {
    parts.push(`\n\n${content}`);
  }

  // TOC footer
  parts.push(`\n<TOC\n  items={[\n${tocItems}\n  ]}\n/>`);

  return parts.join('\n');
}
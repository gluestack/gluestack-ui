# LLMs.txt Generation Rewrite Design

## Problem

The current `scripts/generate-llms-files.js` produces low-quality `llms.txt` and `llms-full.txt`:

1. **llms.txt**: All links show as `[Index](...)` with no descriptions — violates the spec which requires `[title](url): description`
2. **llms-full.txt**: Raw MDX leaks through (imports, `[Component: ...]` artifacts, JSX tags), code blocks not properly extracted, all pages titled "Index"
3. The AST-based `semantic-extractor.js` is too minimal — it converts JSX to `[Component: Name: props]` text nodes, losing all useful content
4. `<AdvancedComponentLLMGenerator mdxContent={...}>` is entirely ignored despite containing clean, pre-structured markdown

## Solution: Two Extraction Strategies

### Strategy 1: AdvancedComponentLLMGenerator extraction
For pages that contain `<AdvancedComponentLLMGenerator mdxContent={...}>` (currently Button, expected to grow):
- Parse the `mdxContent` prop value directly — it already contains clean markdown
- This is the highest-quality extraction path

### Strategy 2: Improved MDX cleaning
For all other pages (accordion, input, guides, home, apps, hooks, etc.):
- Strip all `import` statements
- Extract code strings from `<CodePreviewer code={...} />` into proper fenced code blocks
- Convert `<Table>/<TableRow>/<TableCell>` etc. into markdown tables
- Strip interactive-only components (`<Responsiveness>`, `<AnatomyImage>`, etc.)
- Keep all markdown headings, paragraphs, code blocks, lists as-is
- Derive proper page titles from `# Heading` in content, not from filename

## Output Format

### llms.txt (summary, spec-compliant)
```
# gluestack UI

> Universal React & React Native component library with Tailwind CSS v4...
> Copy-paste components for web (Next.js) and mobile (Expo/React Native)

## Getting Started
- [Introduction](/ui/docs/home/overview/introduction/index): Customizable components for React, Next.js & React Native
- [Quick Start](/ui/docs/home/overview/quick-start/index): Get started with gluestack-ui v5
...

## Components
- [Accordion](/ui/docs/components/accordion/index): Expandable/collapsible content sections
- [Button](/ui/docs/components/button/index): Clickable action element with variants and sizes
...

## Guides
...

## Hooks
...

## Apps
...
```

### llms-full.txt (full documentation)
- Each page becomes a clearly delineated section with proper title from the `# heading`
- Clean markdown content (no MDX artifacts)
- Code blocks properly formatted with language tags
- Props tables as markdown tables
- Horizontal rules `---` between pages

## Implementation Plan

1. Rewrite `scripts/generate-llms-files.js` as a clean Node.js script
2. Implement MDX-to-markdown cleaner that:
   - Removes import lines
   - Extracts code from `<CodePreviewer code={...} />` → fenced code blocks
   - Converts `<Table>` components → markdown tables
   - Strips visual-only components
   - Extracts `mdxContent` from `<AdvancedComponentLLMGenerator>` when present
   - Derives titles from `# Heading` in content
3. Generate llms.txt with proper `[title](url): description` format
4. Generate llms-full.txt with clean markdown per page
5. Remove the old `semantic-extractor.js` (replaced by the new cleaner)

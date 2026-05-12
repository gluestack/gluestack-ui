---
name: AST-powered LLM documentation generation design
description: Design for a robust MDX-to-text transformation pipeline using AST parsing for improved LLM documentation.
type: project
---

# Design: AST-Powered Semantic Documentation Generation

## Overview
The current `scripts/generate-llms-files.js` uses fragile regex to clean MDX content, leading to lost structural context and poor API information. This design proposes a move to an AST-based (Abstract Syntax Tree) transformation pipeline using `unified` and `remark`.

## Goals
- **Usage-First:** Prioritize API props and code examples.
- **Semantic Extraction:** Convert custom components into descriptive text rather than just stripping them.
- **Robustness:** Use proper MDX parsing to handle nested components and complex attributes accurately.

## Architecture: The Semantic Transform Pipeline

The system will be implemented as a `unified` pipeline:

### 1. Parsing Stage
- **Tooling:** `remark-parse` + `remark-mdx`.
- **Input:** Raw `.mdx` file content.
- **Output:** A `remark` AST representing the document structure.

### 2. Transformation Stage (Custom Plugin: `semantic-extractor`)
A custom plugin will traverse the AST using `unist-util-visit`. It will handle several node types specifically:

#### A. `mdxJsxFlowElement` (Custom Components)
Instead of stripping, we perform "Semantic Conversion":
- **Prop Extraction:** Inspect `attributes` to find used props (e.g., `variant`, `size`, `colorScheme`).
- **Component Metadata:** Generate a text summary for the component. 
  - *Example:* `<Button variant="outline" size="sm">` becomes `[Button: variant="outline", size="sm"]`.
- **Structural Mapping:** For container components (e.g., `Tabs`, `Table`), maintain the hierarchy in the text output to show how they are composed.

#### B. `mdxJsxTextElement` / `mdxJsxText` (Code Extraction)
- Specifically target JSX attributes that contain code strings (e.g., `code={...}`).
- Extract the raw string, strip surrounding quotes, and promote it to a standard Markdown code block in the output to ensure high visibility for LLMs.

#### C. `code` (Markdown Code Blocks)
- Preserve these as they are primary usage signals.
- Ensure language identifiers are kept for context.

#### D. Visual/Non-Usage Elements
- Identify components that are purely visual (e.g., `<AnatomyImage />`, `<CodePreviewer />` without a code prop).
- Remove these to reduce token noise while keeping the focus on "how to use".

### 3. Serialization Stage
- **Tooling:** `remark-stringify`.
- **Output:** A clean, high-signal Markdown string optimized for LLM context windows.

## Implementation Details

### Dependencies to Add
- `unified`
- `remark-parse`
- `remark-mdx`
- `remark-stringify`
- `unist-util-visit`

### Proposed File Structure
- `scripts/generate-llms-files.js`: Entry point (orchestrator).
- `scripts/lib/semantic-extractor.js`: The core transformation plugin logic.

## Success Criteria
- `llms-full.txt` contains clear, textually represented component usage (e.g., `[Component: Name] with props: { ... }`).
- No broken or "half-stripped" HTML/JSX remains in the output.
- API usage patterns (variants, sizes) are explicitly mentioned in the text even if they weren't in a standard code block.

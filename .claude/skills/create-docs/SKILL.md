---
name: create-docs
description: Create or update component documentation with examples, API reference, and best practices
---

# Create Documentation Workflow

Guide for creating comprehensive documentation for gluestack-ui components. This includes MDX documentation, examples, and API references.

## Documentation Types

1. **Component Documentation** - Main docs for UI components
2. **Guide/Tutorial** - Step-by-step guides
3. **API Reference** - Detailed API documentation
4. **Migration Guide** - Version migration instructions

## Workflow

### PHASE 1: Documentation Type Selection

**Step 1.1: Identify Documentation Task**

Ask the user:
```yaml
questions:
  - question: "What type of documentation are you creating?"
    header: "Doc Type"
    multiSelect: false
    options:
      - label: "Component documentation (Recommended)"
        description: "Complete docs for a UI component with examples and API reference"
      - label: "Guide/Tutorial"
        description: "Step-by-step guide for a specific task"
      - label: "API Reference"
        description: "Detailed API documentation"
      - label: "Update existing docs"
        description: "Update or improve existing documentation"
```

**Step 1.2: Identify Component (if component docs)**

Ask for component name if creating component documentation.

### PHASE 2: Analysis & Planning

**Step 2.1: Read Existing Component (if component docs)**

Read the component implementation to understand:
- Component structure
- Props and types
- Sub-components
- Variants
- Features
- Dependencies

```bash
# Read component files
Read: src/components/ui/[component-name]/index.tsx
Read: src/components/ui/[component-name]/styles.tsx
Read: packages/gluestack-core/src/[component-name]/creator/index.tsx
```

**Step 2.2: Review Similar Documentation**

Read 2-3 similar component docs for structure:

```bash
Read: src/components/ui/accordion/docs/index.mdx
Read: src/components/ui/button/docs/index.mdx
Read: src/components/ui/alert-dialog/docs/index.mdx
```

Understand:
- Documentation structure
- Sections included
- Example format
- API reference format

**Step 2.3: Plan Documentation Structure**

```markdown
## Documentation Plan

### Sections to Include:
1. Title & Description
2. Visual Example
3. Installation (CLI + Manual)
4. Basic Usage
5. API Reference
6. Variants & Examples
7. Accessibility
8. Best Practices
9. Related Components

### Examples to Create:
1. Basic usage
2. Variants (size, style)
3. Real-world use case
4. Advanced patterns
5. Customization

### API Reference:
- List all props
- Types and defaults
- Required vs optional
- Sub-components
```

**CHECKPOINT 1: Confirm documentation structure with user**

### PHASE 3: Create Documentation File

**Step 3.1: Create MDX File**

Create: `src/components/ui/[component-name]/docs/index.mdx`

**Step 3.2: Add Frontmatter**

```mdx
---
title: [ComponentName] Component | gluestack-ui
description: A brief description of what the component does and when to use it
pageTitle: [ComponentName]
---
```

**Step 3.3: Add Component Introduction**

```mdx
# [ComponentName]

A clear, concise description of what the component does.

This is an illustration of **[ComponentName]** component.

/// {Example:basic} ///
```

The `/// {Example:basic} ///` syntax embeds the basic example.

**Step 3.4: Add Installation Section**

```mdx
## Installation

<Tabs>
<TabItem label="CLI">

### Run the following command:

<CodeBlock code={\`\${process.env.NEXT_PUBLIC_GLUESTACK_COMMAND || 'npx gluestack-ui'} add [component-name]\`} />

</TabItem>

<TabItem label="Manual">

### Step 1: Install dependencies

\`\`\`bash
npm install [dependencies]
\`\`\`

### Step 2: Copy and paste the following code into your project

Copy the code from [repository link]

### Step 3: Update imports

\`\`\`tsx
import { [ComponentName] } from '@/components/ui/[component-name]';
\`\`\`

</TabItem>
</Tabs>
```

**Step 3.5: Add Usage Section**

```mdx
## Usage

\`\`\`jsx
import { [ComponentName] } from '@/components/ui/[component-name]';

function Example() {
  return (
    <[ComponentName]>
      {/* Component content */}
    </[ComponentName]>
  );
}
\`\`\`
```

**Step 3.6: Add API Reference**

```mdx
## API Reference

### [ComponentName]

Contains all the [ComponentName] parts.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'sm' \| 'md' \| 'lg' | 'md' | The size of the component |
| variant | 'default' \| 'outline' | 'default' | The visual variant |
| isDisabled | boolean | false | Whether the component is disabled |
| className | string | - | Additional CSS classes |

### [SubComponent] (if applicable)

Description of sub-component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| [prop] | [type] | [default] | [description] |
```

**Step 3.7: Add Examples Section**

```mdx
## Examples

### Basic Example

/// {Example:basic} ///

### Size Variants

/// {Example:sizes} ///

### Custom Styling

/// {Example:customized-component} ///

### Real-world Example

/// {Example:use-case-specific} ///
```

**Step 3.8: Add Accessibility Section**

```mdx
## Accessibility

### Keyboard Navigation

- **Tab**: Move focus to the component
- **Enter**: Activate the component (buttons, links)
- **Space**: Activate buttons, toggle checkboxes
- **Escape**: Close overlays, modals

### Screen Reader

The component is announced as "[role]" with proper labeling.

### ARIA Attributes

- \`role\`: Defines the component role
- \`aria-label\`: Provides accessible label
- \`aria-disabled\`: Indicates disabled state
- \`aria-expanded\`: Indicates expanded/collapsed state (if applicable)

### Focus Management

Focus is properly managed when opening/closing overlays.
```

**Step 3.9: Add Best Practices Section**

```mdx
## Best Practices

### Do's

- ✅ Use clear, descriptive labels
- ✅ Provide feedback for user actions
- ✅ Keep content concise
- ✅ Follow platform conventions

### Don'ts

- ❌ Don't use for [wrong use case]
- ❌ Don't nest [specific elements]
- ❌ Don't override accessibility features

## Common Patterns

### Pattern 1: [Description]

\`\`\`jsx
// Example code
\`\`\`

### Pattern 2: [Description]

\`\`\`jsx
// Example code
\`\`\`
```

**Step 3.10: Add Related Components**

```mdx
## Related Components

- [RelatedComponent1](/ui/related-component-1) - Description
- [RelatedComponent2](/ui/related-component-2) - Description
```

### PHASE 4: Create Examples

**Step 4.1: Basic Example**

Create: `src/components/ui/[component-name]/examples/basic/meta.json`

```json
{
  "title": "Basic Example",
  "description": "A basic example of [ComponentName]"
}
```

Create: `src/components/ui/[component-name]/examples/basic/template.handlebars`

```handlebars
<script>
import React from 'react';
import { [ComponentName], [SubComponent] } from '@/components/ui/[component-name]';

const Example = () => {
  return (
    <[ComponentName]>
      <[SubComponent]>
        Basic example content
      </[SubComponent]>
    </[ComponentName]>
  );
};

export default Example;
</script>
```

**Step 4.2: Sizes Example**

Create: `src/components/ui/[component-name]/examples/sizes/`

```handlebars
<script>
import React from 'react';
import { [ComponentName] } from '@/components/ui/[component-name]';
import { VStack } from '@/components/ui/vstack';

const Example = () => {
  return (
    <VStack space="md">
      <[ComponentName] size="sm">Small</ [ComponentName]>
      <[ComponentName] size="md">Medium</[ComponentName]>
      <[ComponentName] size="lg">Large</[ComponentName]>
    </VStack>
  );
};

export default Example;
</script>
```

**Step 4.3: Customized Example**

Create: `src/components/ui/[component-name]/examples/customized-component/`

```handlebars
<script>
import React from 'react';
import { [ComponentName] } from '@/components/ui/[component-name]';

const Example = () => {
  return (
    <[ComponentName]
      className="bg-primary-500 border-2 border-primary-700"
      size="lg"
    >
      Customized styling
    </[ComponentName]>
  );
};

export default Example;
</script>
```

**Step 4.4: Create 2-3 More Examples**

Based on component features:
- Controlled/uncontrolled state
- With icons
- Loading state
- Error state
- Real-world use case

Each example needs:
- `meta.json` with title and description
- `template.handlebars` with runnable code

### PHASE 5: Update Sidebar Navigation

**Step 5.1: Update sidebar.json**

Add component to appropriate category in `src/sidebar.json`:

```json
{
  "routes": [
    {
      "title": "Components",
      "routes": [
        {
          "title": "[ComponentName]",
          "path": "/ui/[component-name]"
        }
      ]
    }
  ]
}
```

Place in correct alphabetical order within category.

### PHASE 6: Review & Testing

**Step 6.1: Preview Documentation**

```bash
cd apps/website
yarn dev
```

Navigate to the component documentation page and check:
- Title and description correct
- Frontmatter renders properly
- Installation section works
- Examples render and are interactive
- API reference table displays correctly
- Accessibility section clear
- Links work
- No broken images
- No console errors

**Step 6.2: Test Examples**

For each example:
- Click to view
- Code is copy-pasteable
- Example renders correctly
- Interactive elements work
- No console errors

**Step 6.3: Accessibility Review**

- Headings hierarchy correct (h1 → h2 → h3)
- Code blocks have syntax highlighting
- Links have descriptive text
- Images have alt text (if any)
- Tables are properly formatted

**CHECKPOINT 2: Get user approval on documentation**

### PHASE 7: Finalization

**Step 7.1: Documentation Checklist**

```markdown
## Documentation Checklist

### Content
- [ ] Title and description clear
- [ ] Installation instructions complete (CLI + Manual)
- [ ] Basic usage example provided
- [ ] API reference complete
- [ ] All props documented
- [ ] All sub-components documented
- [ ] Accessibility section included
- [ ] Best practices included
- [ ] Related components linked

### Examples
- [ ] Basic example created
- [ ] Variant examples created
- [ ] Customization example created
- [ ] Real-world example created
- [ ] All examples have meta.json
- [ ] All examples have template.handlebars
- [ ] Examples are runnable and tested

### Structure
- [ ] Frontmatter correct
- [ ] Sections in logical order
- [ ] Code blocks formatted
- [ ] Tables formatted correctly
- [ ] Links work

### Navigation
- [ ] Added to sidebar.json
- [ ] Correct category
- [ ] Alphabetical order
- [ ] Path correct

### Testing
- [ ] Documentation page loads
- [ ] Examples render correctly
- [ ] No console errors
- [ ] Interactive elements work
- [ ] Search finds component
```

**Step 7.2: Summary**

```markdown
## ✅ Documentation Complete!

### What Was Created:
- Documentation: src/components/ui/[component-name]/docs/index.mdx
- Examples:
  - basic/
  - sizes/
  - customized-component/
  - [other examples]
- Navigation: Updated sidebar.json

### Content Sections:
- ✅ Introduction & description
- ✅ Installation (CLI + Manual)
- ✅ Basic usage
- ✅ API reference
- ✅ Examples (4-5 examples)
- ✅ Accessibility
- ✅ Best practices
- ✅ Related components

### Testing:
- ✅ Documentation renders correctly
- ✅ All examples work
- ✅ Navigation updated
- ✅ No errors

### Next Steps:
1. Review documentation one more time
2. Commit: `git commit -m "docs([component]): add documentation"`
3. Create PR

Ready to commit?
```

---

## Documentation Best Practices

### Writing Style

1. **Clear and Concise** - Use simple language
2. **Active Voice** - "Use this component" not "This component is used"
3. **Present Tense** - "The component renders" not "The component will render"
4. **Consistent Terminology** - Use same terms throughout
5. **Code Examples** - Show, don't just tell

### Structure

1. **Start with Why** - Explain purpose before details
2. **Logical Flow** - Simple → Complex
3. **Scannable** - Use headings, lists, tables
4. **Visual Examples** - Show components early
5. **Complete Examples** - Include all imports

### API Reference

1. **Complete** - Document all props
2. **Types** - Show TypeScript types
3. **Defaults** - Always show default values
4. **Required** - Mark required props clearly
5. **Descriptions** - Explain what each prop does

### Examples

1. **Self-Contained** - Can copy-paste and run
2. **Realistic** - Show real use cases
3. **Progressive** - Start basic, then advanced
4. **Variety** - Cover different scenarios
5. **Working** - Test all examples

### Accessibility

1. **Keyboard** - Document all keyboard interactions
2. **Screen Reader** - Explain announcements
3. **ARIA** - Document ARIA attributes
4. **Focus** - Explain focus management
5. **Best Practices** - Link to WCAG guidelines

---

## Common Documentation Sections

### Must Have

- Title & Description
- Installation
- Basic Usage
- API Reference
- Examples

### Should Have

- Accessibility
- Best Practices
- Common Patterns
- Related Components

### Nice to Have

- Troubleshooting
- Migration Guide
- Performance Tips
- Advanced Usage

---

**Let's create great docs!** 📝

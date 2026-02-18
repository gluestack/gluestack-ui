---
name: create-component
description: Create a new React Native/Expo component with guided workflow following compound component API pattern
---

# Create Component - Interactive Workflow

You are helping create a new component for gluestack-ui, a cross-platform React Native/Expo UI library. Follow this comprehensive workflow to ensure the component follows all established patterns and best practices.

## CRITICAL REQUIREMENTS

1. **ALWAYS enter Plan Mode first** using the EnterPlanMode tool
2. **NEVER skip user confirmations** - there are 6 confirmation points
3. **ALWAYS analyze existing components** before proposing patterns
4. **ALWAYS follow the compound component API pattern** for multi-part components
5. **ALWAYS use AskUserQuestion** to gather requirements and preferences
6. **ALWAYS discuss tradeoffs** before making design decisions
7. **NEVER edit generated files** in `apps/*/components/ui/` - only edit `src/`
8. **ALWAYS use latest color tokens** from `src/components/ui/gluestack-ui-provider/config.ts`
9. **ALWAYS respect user's animation library preference** - ask explicitly and use their choice
10. **ALWAYS use correct package imports** - e.g., `@gluestack-ui/core/bottomsheet/creator` not `@gluestack-ui/bottomsheet`
11. **ALWAYS define exports properly** - barrel exports in `packages/gluestack-core/src/[component]/index.tsx` and package.json typesVersions
12. **ALWAYS research similar components** on the web to understand best practices and functionality patterns
13. **NEVER manually modify apps/ directory** - changes propagate automatically through mappers

---

## WORKFLOW: 8 PHASES

### PHASE 1: ENTER PLAN MODE & DISCOVERY

**Step 1.1: Enter Plan Mode**
```
Use EnterPlanMode tool to enter planning mode. You will explore the codebase and design the component before implementation.
```

**Step 1.2: Gather Initial Requirements**

Use AskUserQuestion tool to gather basic information:

**Initial Questions (Must Ask First):**
```yaml
questions:
  - question: "What is the name of the component you want to create?"
    header: "Component Name"
    multiSelect: false
    options:
      - label: "Single-word component (e.g., dropdown, tooltip, badge)"
        description: "Simple kebab-case name for basic components"
      - label: "Multi-word component (e.g., bottom-sheet, file-upload, date-picker)"
        description: "Compound kebab-case name for complex components"

  - question: "What category does this component belong to?"
    header: "Category"
    multiSelect: false
    options:
      - label: "Overlays (Recommended for modals, sheets, tooltips)"
        description: "Components that appear above other content (modals, sheets, popovers, tooltips)"
      - label: "Data Display (Recommended for cards, lists, tables)"
        description: "Components that display information (cards, badges, avatars, tables)"
      - label: "Forms (Recommended for inputs, selects)"
        description: "Form-related components (inputs, checkboxes, selects, switches)"
      - label: "Layout (Recommended for containers, grids)"
        description: "Structural components (containers, stacks, grids, dividers)"

  - question: "What problem does this component solve?"
    header: "Purpose"
    multiSelect: false
    options:
      - label: "User interaction (buttons, inputs, controls)"
        description: "Allows users to interact with the application"
      - label: "Information display (cards, badges, alerts)"
        description: "Shows information or status to users"
      - label: "Navigation (menus, tabs, breadcrumbs)"
        description: "Helps users navigate the application"
      - label: "Feedback (toasts, alerts, progress)"
        description: "Provides feedback about actions or states"

  - question: "What animation library do you prefer for this component?"
    header: "Animation"
    multiSelect: false
    options:
      - label: "react-native-reanimated (Recommended)"
        description: "Better performance, runs on UI thread, most components use this"
      - label: "@legendapp/motion"
        description: "Simple declarative animations, good for basic transitions"
      - label: "No animations"
        description: "Static component without animations"
```

After getting these answers, ask the user to describe in their own words:
- What is the specific problem this component addresses?
- What are the key features it must have?
- Any specific design references or inspirations?

**Step 1.3: Research Similar Components**

**IMPORTANT: Research on the web first before designing!**

Use WebSearch tool to research:
1. Search for "[component-name] component best practices" (e.g., "bottom sheet component best practices")
2. Search for "[component-name] accessibility patterns" (e.g., "bottom sheet accessibility")
3. Search for "React Native [component-name] implementation"
4. Look for inspiration from popular UI libraries:
   - Material Design guidelines for this component
   - iOS Human Interface Guidelines
   - Chakra UI, Ant Design, Material-UI implementations
   - React Native Paper, NativeBase implementations

Analyze the research to understand:
- Common features and patterns
- Accessibility best practices
- Animation patterns
- API design conventions
- Edge cases to handle

Present research findings to user:
```markdown
## Research Findings: [ComponentName]

### Industry Best Practices:
- [Finding 1 with source]
- [Finding 2 with source]
- [Finding 3 with source]

### Common Features Found:
- [Feature 1 - seen in Library A, Library B]
- [Feature 2 - recommended by Material Design]
- [Feature 3 - iOS HIG standard]

### Accessibility Standards:
- [ARIA pattern to follow]
- [Keyboard interactions needed]
- [Screen reader considerations]

### Recommended Features for Our Component:
Based on research, we should include:
1. [Feature with justification]
2. [Feature with justification]
3. [Feature with justification]
```

Ask user:
- Do you agree with these recommendations?
- Any features you want to add/remove based on the research?
- Any concerns about complexity vs functionality?

**Step 1.4: Analyze Existing Patterns**

Read and understand these files to learn gluestack-ui patterns:
1. `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/CONTRIBUTING.md` - Complete contribution guidelines
2. `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/src/components/ui/accordion/index.tsx` - Example compound component
3. `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/src/components/ui/button/index.tsx` - Example with style context
4. `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/src/components/ui/alert-dialog/index.tsx` - Example with animations
5. `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/packages/gluestack-core/src/accordion/creator/index.tsx` - Example creator pattern
6. **Color tokens:** `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/src/components/ui/gluestack-ui-provider/config.ts` - Latest color system

Use Glob/Grep to find more examples if needed.

**Step 1.5: Gather Detailed Requirements**

Use AskUserQuestion tool to ask additional questions:

**Question 1: Component Type**
```yaml
questions:
  - question: "What type of component is this?"
    header: "Component Type"
    multiSelect: false
    options:
      - label: "Simple component"
        description: "Single element like Card, Badge - no sub-components"
      - label: "Compound component (Recommended)"
        description: "Multiple sub-components like Accordion, AlertDialog - follows gluestack pattern"
      - label: "Form component"
        description: "Input, Checkbox, Select - form interaction"
      - label: "Overlay component"
        description: "Modal, Popover, Tooltip - floating/overlay UI"
      - label: "Layout component"
        description: "Container, Grid, Stack - structural layout"
```

**Question 2: Platform Requirements**
```yaml
questions:
  - question: "Which platforms should this component support?"
    header: "Platforms"
    multiSelect: true
    options:
      - label: "iOS (Recommended)"
        description: "Support iOS devices"
      - label: "Android (Recommended)"
        description: "Support Android devices"
      - label: "Web (Recommended)"
        description: "Support web browsers via React Native Web"
      - label: "Web-specific implementation"
        description: "Needs separate index.web.tsx file for web-only code"
```

**Question 3: Accessibility Requirements**
```yaml
questions:
  - question: "Does this component need ARIA support and accessibility features?"
    header: "Accessibility"
    multiSelect: true
    options:
      - label: "Keyboard navigation (Recommended)"
        description: "Arrow keys, Tab, Enter, Escape support"
      - label: "Screen reader support (Recommended)"
        description: "ARIA labels, announcements, semantic markup"
      - label: "Focus management"
        description: "Focus trap, auto-focus, focus return"
      - label: "ARIA patterns"
        description: "Follow WAI-ARIA authoring practices"
```

If ARIA is needed, ask which pattern applies (dialog, menu, button, checkbox, etc.)

**Question 4: Animation Details**

Based on the animation library chosen earlier, ask specifics:

If **react-native-reanimated** was chosen:
```yaml
questions:
  - question: "What type of animations does this component need?"
    header: "Animation Type"
    multiSelect: true
    options:
      - label: "Entrance/exit animations (Recommended)"
        description: "FadeIn, SlideIn, ZoomIn when mounting/unmounting"
      - label: "Gesture-driven animations"
        description: "Swipe, drag, pinch interactions"
      - label: "Spring physics"
        description: "Natural motion with spring animations"
      - label: "Layout animations"
        description: "Animate position and size changes"
```

If **@legendapp/motion** was chosen:
```yaml
questions:
  - question: "What type of animations does this component need?"
    header: "Animation Type"
    multiSelect: true
    options:
      - label: "Opacity transitions"
        description: "Fade in/out effects"
      - label: "Scale transitions"
        description: "Zoom in/out effects"
      - label: "Position transitions"
        description: "Slide movements"
```

**Question 5: Styling & Variants**

Ask the user:
- What variants should this component support? (e.g., size: sm/md/lg, variant: default/outline/ghost)
- What should be the default variant?
- Does it need parent-child style context? (if compound component)
- Should it support custom theming?

**IMPORTANT: Always use color tokens from `src/components/ui/gluestack-ui-provider/config.ts` for styling:**
- Use semantic tokens like `bg-background`, `text-foreground`, `border-border`
- These tokens support both light and dark modes automatically
- Never hardcode color values like `#000000` or `rgb(0,0,0)`

**Question 6: Sub-components (if compound)**

If it's a compound component, ask:
- List all sub-components needed (e.g., Dropdown, DropdownTrigger, DropdownContent, DropdownItem)
- How do they interact with each other?
- What state/context needs to be shared?
- What's the typical usage pattern?

**Question 7: Dependencies**

The animation library is already determined (user chose earlier). Ask about other dependencies:

```yaml
questions:
  - question: "Which additional external dependencies does this component need?"
    header: "Dependencies"
    multiSelect: true
    options:
      - label: "None (Recommended)"
        description: "Use only React Native core primitives + chosen animation library"
      - label: "react-native-svg"
        description: "For custom icons or SVG elements"
      - label: "@floating-ui/react-native"
        description: "For positioning (popovers, tooltips, dropdowns)"
      - label: "react-native-gesture-handler"
        description: "For complex touch gestures"
      - label: "Other (specify)"
        description: "Other npm packages needed"
```

If "Other" is selected, ask the user to specify which packages and why.

**IMPORTANT: Remember the user's animation library choice and NEVER substitute it with a different library during implementation!**

---

### PHASE 2: API DESIGN & CONFIRMATION

**Step 2.1: Analyze Similar Components**

Use Glob to find similar components:
```
Use Glob tool with pattern: "src/components/ui/**/index.tsx"
```

Read 2-3 similar components to understand:
- How they structure their API
- Naming conventions for props
- TypeScript interface patterns
- Sub-component naming
- Event handler naming (onOpenChange vs onChange vs onToggle)

**Step 2.2: Design Component API**

Based on requirements and similar component analysis, design the API:

For a compound component example:
```typescript
// Component API
<ComponentName>
  <ComponentTrigger>
    <Button>Open</Button>
  </ComponentTrigger>
  <ComponentContent>
    <ComponentItem>
      <ComponentItemText>Item 1</ComponentItemText>
    </ComponentItem>
  </ComponentContent>
</ComponentName>

// Props interfaces
interface ComponentNameProps {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

interface ComponentContentProps {
  placement?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

// ... other interfaces
```

For a simple component:
```typescript
<ComponentName
  size="md"
  variant="default"
  className="custom-class"
>
  Content here
</ComponentName>

interface ComponentNameProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
  className?: string;
  children?: React.ReactNode;
}
```

**Step 2.3: Present API to User**

Present the complete API design to the user and ask:
- Is this API intuitive and easy to use?
- Does it follow React Native conventions?
- Are the prop names clear and self-explanatory?
- Any missing props or features?
- Any naming conflicts with existing components?
- Would you prefer different sub-component names?

**CHECKPOINT 1: Get user confirmation on API design before proceeding.**

---

### PHASE 3: TRADEOFFS & DESIGN DECISIONS

**Step 3.1: Identify Design Decisions**

Based on the component type and requirements, identify key decisions. Common decisions:

1. **State Management:** Controlled vs Uncontrolled vs Both
2. **Positioning:** Manual vs Auto-positioning library
3. **Trigger:** Specific component vs Any child
4. **Animation Library:** Animated API vs react-native-reanimated
5. **Accessibility:** Basic vs Full WCAG compliance
6. **Flexibility:** Simple API vs Highly configurable

**Step 3.2: Present Tradeoffs**

Create a tradeoffs table for each decision:

```markdown
## Design Decisions & Tradeoffs

### Decision 1: State Management
| Aspect | Option A: Controlled Only | Option B: Both Controlled & Uncontrolled | Recommendation |
|--------|---------------------------|------------------------------------------|----------------|
| **API Complexity** | Simple - requires value & onChange | More complex - supports both patterns | Option B |
| **Flexibility** | Developer must manage state | Works with or without state management | Option B |
| **Common Use Case** | Best for complex forms | Best for both simple and complex cases | Option B |
| **Bundle Size** | Smaller (~1KB less) | Slightly larger | Option B |
| **Pattern Match** | Alert uses controlled only | Accordion, Select use both | Option B ✅ |

**Recommendation:** Option B - Support both patterns like most gluestack components

### Decision 2: Animation
| Aspect | Option A: Animated API | Option B: react-native-reanimated | Recommendation |
|--------|------------------------|----------------------------------|----------------|
| **Performance** | Good for simple animations | Excellent - runs on UI thread | Option B |
| **Cross-platform** | Works but different APIs | Consistent API web+native | Option B |
| **Bundle Size** | No extra dependency | Adds ~50KB | Option B |
| **Developer Experience** | More complex API | Simpler, declarative API | Option B |
| **Pattern Match** | Button uses Animated | AlertDialog, Drawer use reanimated | Option B ✅ |

**Recommendation:** Option B - Use react-native-reanimated for consistency

### Decision 3: [Add more decisions as needed]
```

**Step 3.3: Discuss with User**

Present the tradeoffs and ask:
- Do you agree with the recommendations?
- Any preferences different from recommendations?
- Any concerns about bundle size, performance, or complexity?
- Should we prioritize API simplicity over flexibility?

**CHECKPOINT 2: Get user confirmation on design decisions before proceeding.**

---

### PHASE 4: PATTERN MATCHING & CONSISTENCY

**Step 4.1: Pattern Analysis**

Use Glob and Grep to analyze patterns:

```bash
# Find similar components
Glob: "src/components/ui/**/index.tsx"

# Check naming conventions
Grep: "export const.*= React.forwardRef" in src/components/ui/

# Check prop patterns
Grep: "size.*=.*'sm'" in src/components/ui/

# Check style patterns
Grep: "tva\\({" in src/components/ui/**/styles.tsx

# Check TypeScript patterns
Grep: "interface.*Props" in src/components/ui/
```

**Step 4.2: Create Pattern Report**

Generate a report showing:

```markdown
## Pattern Analysis Report

### ✅ Similar Components Found
- **Popover**: Uses @floating-ui/react-native for positioning
- **Menu**: Uses compound pattern with MenuItem
- **Select**: Uses similar dropdown behavior
- **AlertDialog**: Uses withStyleContext for parent-child styling

### ✅ Naming Conventions
- Folders: kebab-case (e.g., `alert-dialog`, `file-upload`)
- Components: PascalCase (e.g., `AlertDialog`, `FileUpload`)
- Props: camelCase (e.g., `isOpen`, `onOpenChange`)
- Variants: lowercase (e.g., `size='sm'`, not `size='SM'`)

### ✅ Prop Patterns
- Size prop: `'sm' | 'md' | 'lg'` (consistent across all components)
- Variant prop: `'default' | 'outline' | 'ghost' | 'destructive'`
- Boolean props: Prefix with `is` (e.g., `isOpen`, `isDisabled`)
- Event handlers: Prefix with `on` (e.g., `onChange`, `onOpenChange`)

### ✅ Style Patterns
- All use `tva()` from gluestack-utils
- Styles defined in separate `styles.tsx` file
- Parent variants passed via `withStyleContext` and `useStyleContext`
- Base styles + variants structure

### ✅ TypeScript Patterns
- All use React.forwardRef with generic types
- Props extend base component props
- Variants typed with VariantProps<typeof styleFunction>
- All exports are named exports

### ✅ File Structure Pattern
```
component-name/
├── index.tsx              # Main component
├── index.web.tsx          # Web-specific (if needed)
├── styles.tsx             # Tailwind styles
├── dependencies.json      # NPM dependencies
├── docs/
│   └── index.mdx
└── examples/
    └── basic/
        ├── meta.json
        └── template.handlebars
```

### 📋 Pattern Recommendations for Your Component

Based on analysis, your component should:
1. Use kebab-case for folder: `your-component-name`
2. Use PascalCase for components: `YourComponentName`
3. Follow size prop pattern: `'sm' | 'md' | 'lg'`
4. Use `isOpen` and `onOpenChange` for open state (not `open` and `onToggle`)
5. Define styles in separate `styles.tsx` using `tva()`
6. Use `withStyleContext` if compound component
7. Export all sub-components as named exports
```

**Step 4.3: Confirm Pattern Matching**

Ask the user:
- Do these patterns make sense?
- Should we follow all the recommendations?
- Any patterns you'd like to deviate from? (and why)

**CHECKPOINT 3: Get user confirmation on pattern matching before proceeding.**

---

### PHASE 5: IMPLEMENTATION PLAN & CONFIRMATION

**Step 5.1: Create Complete Implementation Plan**

Generate detailed plan:

```markdown
## Implementation Plan: [ComponentName]

### 📁 File Structure

**CRITICAL: Follow this EXACT structure as per CONTRIBUTING.md:**

```
src/components/ui/<component-name>/
├── index.tsx                          # Main component file (copy-pasteable)
├── index.web.tsx                      # Web-specific (if needed)
├── styles.tsx                         # Tailwind styles with tva() (optional)
├── dependencies.json                  # NPM dependencies (if needed)
├── examples/                          # Usage examples
│   ├── basic/                         # Basic example (REQUIRED)
│   │   ├── meta.json                  # Example metadata with reactLive imports
│   │   └── template.handlebars        # Handlebars template (no imports)
│   ├── customized-component/          # Customized variant
│   │   ├── meta.json
│   │   └── template.handlebars
│   └── [other-examples]/              # Additional examples (3-5 total recommended)
│       ├── meta.json
│       └── template.handlebars
└── docs/                              # Main documentation
    └── index.mdx                      # Component documentation page

packages/gluestack-core/src/<component-name>/
├── creator/
│   └── index.tsx                      # create[ComponentName] factory
├── aria/
│   └── index.tsx                      # use[ComponentName] hook (if needed)
└── index.tsx                          # Barrel export
```

**Note:** Use `<component-name>` in kebab-case (e.g., `bottom-sheet`, `alert-dialog`)

### 🔧 Core Package Implementation

**CRITICAL: Proper Exports Configuration**

When creating a new component in gluestack-core, you MUST configure exports properly:

1. **Barrel Export:** Create `packages/gluestack-core/src/[component-name]/index.tsx`:
```typescript
export * from './creator';
export * from './creator/types';  // if types exist
export * from './aria';  // if aria exists
```

2. **Update Main Index:** Add to `packages/gluestack-core/src/index.tsx`:
```typescript
export * from './[component-name]';
```

3. **Package.json Updates:** The barrel exports for deep imports (e.g., `@gluestack-ui/core/[component]/creator`) are auto-generated by `scripts/generate-barrel-exports.js` during build. The script:
   - Scans `src/` for component directories
   - Creates barrel files in the component root directory (e.g., `bottomsheet/creator.ts`)
   - These files export from `lib/esm/[component]/[subdir]`

4. **TypesVersions:** For TypeScript to find the deep imports, typesVersions in package.json will be updated in the next package release

**File:** `packages/gluestack-core/src/[component-name]/creator/index.tsx`

```typescript
export function create[ComponentName]<
  RootProps,
  // ... other generic types
>({
  Root,
  // ... other components
}: {
  Root: React.ComponentType<RootProps>;
  // ... other components
}) {
  const [ComponentName] = [ComponentName]Main(Root) as any;
  [ComponentName].SubComponent = [ComponentName]SubComponent(SubComponent);
  // ... more sub-components

  return [ComponentName] as I[ComponentName]ComponentType<...>;
}
```

**File:** `packages/gluestack-core/src/[component-name]/aria/index.tsx` (if needed)

```typescript
export function use[ComponentName]({
  // ... props
}: Use[ComponentName]Props) {
  // ARIA logic using react-aria hooks
  return {
    // ... return values
  };
}
```

### 🎨 UI Component Implementation

**CRITICAL: Use Correct Import Paths**

Always import from the deep path, not the component name directly:
- ✅ CORRECT: `import { create[ComponentName] } from '@gluestack-ui/core/[component-name]/creator';`
- ❌ WRONG: `import { create[ComponentName] } from '@gluestack-ui/[component-name]';`

**CRITICAL: Use User's Animation Library Choice**

Use the animation library the user specified during requirements gathering:
- If user chose **react-native-reanimated**: Use `Animated` from `react-native-reanimated`
- If user chose **@legendapp/motion**: Use motion components from `@legendapp/motion`
- If user chose **No animations**: Don't import any animation library

**CRITICAL: Use Latest Color Tokens**

Always use semantic color tokens from the gluestack-ui theme system:
- Use tokens like: `bg-background`, `bg-card`, `text-foreground`, `border-border`, `bg-primary`, `bg-secondary`
- These are defined in `src/components/ui/gluestack-ui-provider/config.ts`
- They automatically support light/dark mode
- Never use hardcoded colors like `bg-white`, `text-black`, `#000000`

**File:** `src/components/ui/[component-name]/index.tsx`

```typescript
'use client';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
// CORRECT import path - use deep import from core package
import { create[ComponentName] } from '@gluestack-ui/core/[component-name]/creator';
import { tva, withStyleContext, useStyleContext, type VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { [componentName]Style, [subComponent]Style } from './styles';

// Import animation library based on user's choice
// Example with react-native-reanimated:
import Animated, { FadeIn, SlideInUp } from 'react-native-reanimated';
// OR with @legendapp/motion:
// import { Motion } from '@legendapp/motion';

// Create context-aware root
const Root = withStyleContext(View, '[COMPONENT_NAME]');

// Create compound component
const UI[ComponentName] = create[ComponentName]({
  Root: Root,
  // ... other components
});

// Main component with variants
const [ComponentName] = React.forwardRef<
  React.ComponentRef<typeof View>,
  React.ComponentProps<typeof View> & VariantProps<typeof [componentName]Style>
>(({ className, size = 'md', variant = 'default', ...props }, ref) => {
  return (
    <UI[ComponentName]
      ref={ref}
      className={[componentName]Style({ size, variant, class: className })}
      context={{ size, variant }}
      {...props}
    />
  );
});

[ComponentName].displayName = '[ComponentName]';

// Sub-components
const [SubComponent] = React.forwardRef<
  React.ComponentRef<typeof View>,
  React.ComponentProps<typeof View>
>(({ className, ...props }, ref) => {
  const { size, variant } = useStyleContext('[COMPONENT_NAME]');
  return (
    <UI[ComponentName].[SubComponent]
      ref={ref}
      className={[subComponent]Style({
        parentVariants: { size, variant },
        class: className
      })}
      {...props}
    />
  );
});

[SubComponent].displayName = '[SubComponent]';

// Exports
export { [ComponentName], [SubComponent], /* ... other exports */ };
```

**File:** `src/components/ui/[component-name]/styles.tsx`

```typescript
import { tva } from '@gluestack-ui/utils/nativewind-utils';

// CRITICAL: Always use semantic color tokens from config.ts
// Available tokens: --background, --foreground, --card, --primary, --secondary,
// --muted, --accent, --destructive, --border, --input, --ring, --popover
// Use as: bg-background, text-foreground, border-border, bg-card, bg-primary, etc.

export const [componentName]Style = tva({
  base: 'flex-col rounded-md',
  variants: {
    size: {
      sm: 'p-2 gap-2',
      md: 'p-4 gap-4',
      lg: 'p-6 gap-6',
    },
    variant: {
      // Use semantic tokens - these work in light AND dark mode automatically
      default: 'bg-background border border-border',
      outline: 'bg-transparent border border-border',
      ghost: 'bg-transparent',
      card: 'bg-card border border-border',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

export const [subComponent]Style = tva({
  base: 'flex-row items-center',
  parentVariants: {
    size: {
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-3',
    },
  },
});
```

**File:** `src/components/ui/[component-name]/dependencies.json` (if needed)

```json
{
  "dependencies": {
    "@floating-ui/react-native": "^0.10.0",
    "react-native-reanimated": "^3.0.0"
  }
}
```

### 📝 Documentation

**File:** `src/components/ui/[component-name]/docs/index.mdx`

- Installation section (CLI + Manual)
- Basic usage example
- API reference table
- Props documentation
- Accessibility notes
- Best practices

### 🎯 Examples

**CRITICAL: Follow exact format and structure from existing components!**

Create 3-5 comprehensive examples demonstrating different use cases:

1. **basic/** - REQUIRED - Simple, default usage
2. **customized-component/** - Customized styling with variants
3. **controlled/** - Controlled state management (if applicable)
4. **with-[feature]/** - Specific features (e.g., with-icons, with-image)
5. **[real-world-scenario]/** - Practical use case (e.g., delete-post, invite-friends)

**Example Structure Checklist:**

Each example MUST have:
- ✅ `meta.json` with proper structure:
  - `title`: Short, descriptive title
  - `description`: Clear explanation of what the example demonstrates
  - `argTypes`: Interactive controls (optional, only if example needs them)
  - `reactLive`: **REQUIRED** - ALL components used must be listed here
- ✅ `template.handlebars` with proper format:
  - Start with single space + `function Example()`
  - NO imports (they're in reactLive)
  - NO export statements
  - Use Handlebars variables for argTypes: `{{size}}`, `{{variant}}`
  - Can use React hooks (useState, useEffect, etc.)

**Analyze Existing Examples:**

Before creating examples, read similar components to understand patterns:
```bash
# Look at accordion examples
src/components/ui/accordion/examples/*/meta.json
src/components/ui/accordion/examples/*/template.handlebars

# Look at button examples
src/components/ui/button/examples/*/meta.json
src/components/ui/button/examples/*/template.handlebars

# Look at modal examples for overlay patterns
src/components/ui/modal/examples/*/meta.json
src/components/ui/modal/examples/*/template.handlebars
```

**Common Example Patterns:**

- **Stateful examples:** Use `React.useState` for interactive demos
- **Render props:** Show function-as-child patterns like `{({ isExpanded }) => ...}`
- **Variants:** Demonstrate different size/variant combinations
- **Icons:** Show icon integration with `as={IconName}` pattern
- **Composition:** Show how to compose with other components (Button, Text, Icon)
- **Real scenarios:** Show practical use cases users will implement

### 🔗 Exports & Configuration

1. Export from `src/components/ui/index.tsx`:
   ```typescript
   export * from './[component-name]';
   ```

2. Update `src/sidebar.json` for docs navigation

3. Update `packages/gluestack-ui/src/dependencies.ts` (if dependencies needed)

### ✨ Features Checklist

- [x] Keyboard navigation (Arrow keys, Enter, Escape)
- [x] Screen reader support (ARIA labels)
- [x] Focus management
- [x] Controlled & uncontrolled modes
- [x] Animation support (entrance/exit)
- [x] TypeScript types
- [x] Cross-platform (iOS, Android, Web)
- [x] Dark mode support
- [x] Responsive design
- [x] Parent-child style context

### 📦 Dependencies

- react-native-reanimated: For animations
- @floating-ui/react-native: For positioning (if overlay)
- [Add others if needed]

### 🎯 Sub-components

1. **[ComponentName]** (Root) - Main container, context provider
2. **[SubComponent1]** - Description
3. **[SubComponent2]** - Description
[... list all sub-components]

### 🔍 Testing Plan

1. Test in kitchen-sink app (iOS, Android, Web)
2. Test in website app (documentation)
3. Test all variants (size, variant combinations)
4. Test keyboard navigation
5. Test screen reader
6. Test animations
7. Test edge cases
```

**Step 5.2: Present Plan to User**

Show the complete plan and ask:
- Does this implementation plan look complete?
- Any changes or additions needed?
- Any concerns about the approach?
- Ready to proceed with implementation?

**CHECKPOINT 4: Get user confirmation on implementation plan. Use ExitPlanMode to exit plan mode and get approval.**

---

### PHASE 6: IMPLEMENTATION

**IMPORTANT: Only proceed if user approved the plan in Phase 5.**

**Step 6.1: Setup Local Package Development**

**CRITICAL: Never Manually Edit apps/ Directory**

The `apps/` directory contains generated code that is automatically synced from `src/components/ui/`:
- `apps/kitchen-sink/components/ui/` - Auto-generated via mapper
- `apps/website/components/ui/` - Auto-generated via mapper
- `apps/starter-kit-expo/components/ui/` - Auto-generated via mapper
- `apps/starter-kit-next/components/ui/` - Auto-generated via mapper

**ONLY edit files in `src/components/ui/[component-name]/`** and changes will propagate automatically when you run `yarn sync`.

```bash
# Link packages for development
yarn link:create

# Link to apps
yarn link:apps
```

**Step 6.2: Implement Core Package**

1. Create directory structure:
```bash
mkdir -p packages/gluestack-core/src/[component-name]/creator
mkdir -p packages/gluestack-core/src/[component-name]/aria  # only if ARIA hook needed
```

2. Implement creator function (follow pattern from accordion/creator/index.tsx)
3. Implement ARIA hook if needed (follow pattern from accordion/aria/index.tsx)
4. **CRITICAL: Create barrel export** `packages/gluestack-core/src/[component-name]/index.tsx`:
```typescript
export * from './creator';
export * from './creator/types';  // if types exist
export * from './aria';  // if aria exists
```
5. **CRITICAL: Update main index** `packages/gluestack-core/src/index.tsx`:
```typescript
export * from './[component-name]';
```
6. The `generate-barrel-exports.js` script will auto-create deep import files during build

**Step 6.3: Implement UI Component**

**CRITICAL REMINDERS for this step:**
- ✅ Import from `@gluestack-ui/core/[component-name]/creator` (deep import)
- ✅ Use the animation library the USER CHOSE (don't substitute!)
- ✅ Use semantic color tokens: `bg-background`, `text-foreground`, `border-border`, etc.
- ✅ Only edit `src/components/ui/` - NEVER touch `apps/` directories

1. Create directory:
```bash
mkdir -p src/components/ui/[component-name]/docs
mkdir -p src/components/ui/[component-name]/examples/basic
```

2. Create `src/components/ui/[component-name]/index.tsx` with compound component:
   - Import creator using deep path: `@gluestack-ui/core/[component-name]/creator`
   - Import utils from: `@gluestack-ui/utils/nativewind-utils`
   - Use user's chosen animation library (react-native-reanimated or @legendapp/motion)
   - Use semantic color tokens in className props

3. Create `src/components/ui/[component-name]/styles.tsx` with tva() styles:
   - Import tva from: `@gluestack-ui/utils/nativewind-utils`
   - Use only semantic color tokens (bg-background, text-foreground, etc.)
   - Support both light and dark modes automatically

4. Create `src/components/ui/[component-name]/dependencies.json` if external deps needed

5. Create web-specific `src/components/ui/[component-name]/index.web.tsx` if needed

**Step 6.4: Create Examples**

**CRITICAL: Follow exact format used by existing components!**

**Step 6.4.1: Analyze Existing Examples First**

Before creating any examples, read and analyze similar existing components:

1. **Find similar components:**
```bash
# Use Glob to find all examples
Glob: "src/components/ui/*/examples/*/meta.json"
Glob: "src/components/ui/*/examples/*/template.handlebars"
```

2. **Read 3-5 relevant examples** from similar components:
   - If creating overlay component: Read modal, popover, actionsheet examples
   - If creating form component: Read input, checkbox, select examples
   - If creating layout component: Read accordion, tabs, card examples

3. **Understand the patterns:**
   - How do they structure meta.json?
   - What components are listed in reactLive?
   - How do they format template.handlebars?
   - Do they use argTypes? Which ones?
   - How do they handle state in examples?
   - What Handlebars variables do they use?

4. **Present findings to user:**
```markdown
## Example Pattern Analysis

Based on analyzing [ComponentX], [ComponentY], [ComponentZ]:

### meta.json patterns found:
- All include title, description
- reactLive lists every component used including icons
- argTypes only used when interactive controls needed
- Common argTypes: size (sm/md/lg), variant (default/outline)

### template.handlebars patterns found:
- All start with single space + function Example()
- State management with React.useState
- Handlebars variables: {{size}}, {{variant}}
- Common structure: [pattern description]

### Recommended approach for our component:
1. [Recommendation based on patterns]
2. [Recommendation based on patterns]
```

**Step 6.4.2: Create Examples**

For each example (basic, customized, etc.):

1. **Create example directory:**
```bash
mkdir -p src/components/ui/[component-name]/examples/basic
mkdir -p src/components/ui/[component-name]/examples/customized-component
# Add more as needed
```

2. **Create `meta.json`** following this EXACT format:

```json
{
  "title": "Basic Example",
  "description": "A basic usage example showing the default behavior of [ComponentName]",
  "argTypes": {
    "size": {
      "control": {
        "type": "select"
      },
      "options": ["sm", "md", "lg"],
      "defaultValue": "md"
    }
  },
  "reactLive": {
    "[ComponentName]": "@/components/ui/[component-name]",
    "[SubComponent1]": "@/components/ui/[component-name]",
    "[SubComponent2]": "@/components/ui/[component-name]",
    "Button": "@/components/ui/button",
    "ButtonText": "@/components/ui/button",
    "Text": "@/components/ui/text"
  }
}
```

**Notes on `meta.json`:**
- `title`: Short, descriptive title
- `description`: Clear explanation of what the example demonstrates
- `argTypes`: (optional) Interactive controls - only include if example has controllable props
- `reactLive`: **REQUIRED** - Maps ALL component names used in template to their import paths
  - Use `@/components/ui/[component-name]` format
  - Include all sub-components from the same component
  - Include any external components used (Button, Text, Icon, etc.)

3. **Create `template.handlebars`** following this EXACT format:

```handlebars
 function Example() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <[ComponentName] size="{{size}}">
      <[SubComponent1]>
        <Text>Content here</Text>
      </[SubComponent1]
      <[SubComponent2]>
        More content
      </[SubComponent2]>
    </[ComponentName]>
  );
}
```

**CRITICAL rules for `template.handlebars`:**
- ✅ Start with a SINGLE SPACE then `function Example()`
- ✅ NO imports - they come from `reactLive` in meta.json
- ✅ Use Handlebars variables for argTypes: `{{size}}`, `{{variant}}`, etc.
- ✅ Return JSX directly (can wrap in `<>...</>` if multiple root elements)
- ✅ Use React hooks (useState, useEffect, etc.) - React is available globally
- ❌ NO `import` statements
- ❌ NO `export default`
- ❌ NO script tags

**Example of a complete working example:**

`examples/basic/meta.json`:
```json
{
  "title": "Basic",
  "description": "A simple example showing the component in its default state",
  "argTypes": {},
  "reactLive": {
    "Accordion": "@/components/ui/accordion",
    "AccordionItem": "@/components/ui/accordion",
    "AccordionHeader": "@/components/ui/accordion",
    "AccordionTrigger": "@/components/ui/accordion",
    "AccordionTitleText": "@/components/ui/accordion",
    "AccordionContent": "@/components/ui/accordion",
    "AccordionContentText": "@/components/ui/accordion",
    "AccordionIcon": "@/components/ui/accordion",
    "AddIcon": "@/components/ui/icon",
    "RemoveIcon": "@/components/ui/icon"
  }
}
```

`examples/basic/template.handlebars`:
```handlebars
 function Example() {
  return (
    <Accordion className="w-[90%] m-5">
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => (
              <>
                <AccordionTitleText>
                  How do I get started?
                </AccordionTitleText>
                {isExpanded ? (
                  <AccordionIcon as={RemoveIcon} />
                ) : (
                  <AccordionIcon as={AddIcon} />
                )}
              </>
            )}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            To get started, follow our quick start guide.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

**Step 6.5: Create Documentation**

**CRITICAL: Follow exact format from CONTRIBUTING.md and existing components!**

Create `src/components/ui/[component-name]/docs/index.mdx`:

```mdx
---
title: [ComponentName] Component | gluestack-ui | Installation, Usage & API

description: [SEO-friendly description of the component, its use cases, and platforms]

pageTitle: [ComponentName]

pageDescription: [Same as description above]

showHeader: true
---
import {
  Table,
  TableHeader,
  TableCell,
  TableHeaderCell,
  TableBody,
  TableRow,
} from '@/docs-components/table';
import { InlineCode } from '@/docs-components/inline-code';
import { Tabs, TabItem } from '@/docs-components/tabs';

# [ComponentName]

[Brief description of what the component does and its main use cases]

This is an illustration of **[ComponentName]** component.

/// {Example:basic} ///

<br />
## Installation

<Tabs>
<TabItem label="CLI">
### Run the following command:
<CodeBlock code={\`\${process.env.NEXT_PUBLIC_GLUESTACK_COMMAND || 'npx gluestack-ui'} add [component-name]\`} language="bash" />
</TabItem>
<TabItem label="Manual">

### Step 1: Install the following dependencies:

\`\`\`bash
npm i [list dependencies if any, e.g., @expo/html-elements]
\`\`\`

### Step 2: Copy and paste the following code into your project.

\`\`\`jsx
%%-- File: src/components/ui/[component-name]/index.tsx --%%
\`\`\`

### Step 3: Update the import paths to match your project setup.

</TabItem>
</Tabs>

## API Reference

To use this component in your project, include the following import statement in your file.

\`\`\`ts
import {
  [ComponentName],
  [SubComponent1],
  [SubComponent2],
} from '@/components/ui/[component-name]';
\`\`\`

\`\`\`ts
export default () => (
  <[ComponentName]>
    <[SubComponent1]>
      <[SubComponent2] />
    </[SubComponent1]>
  </[ComponentName]>
);
\`\`\`

### Component Props

This section provides a comprehensive reference list for the component props, detailing descriptions, properties, types, and default behavior for easy project integration.

#### [ComponentName]

It inherits all the properties of React Native's [View](https://reactnative.dev/docs/view) component.

<br />
<>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Prop</TableHeaderCell>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Default</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>
          <InlineCode>size</InlineCode>
        </TableCell>
        <TableCell>"sm" | "md" | "lg"</TableCell>
        <TableCell>"md"</TableCell>
        <TableCell>
          The size of the component.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <InlineCode>variant</InlineCode>
        </TableCell>
        <TableCell>"default" | "outline"</TableCell>
        <TableCell>"default"</TableCell>
        <TableCell>
          The visual variant of the component.
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</>

#### [SubComponent1]

[Description of what this sub-component does]

<>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Prop</TableHeaderCell>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Default</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>
          <InlineCode>propName</InlineCode>
        </TableCell>
        <TableCell>type</TableCell>
        <TableCell>default</TableCell>
        <TableCell>
          Description of the prop
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</>

[Repeat for each sub-component...]

### Accessibility

Adheres to the [ComponentName] [WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/[pattern-name]/).

We have outlined the various features that ensure the [ComponentName] component is accessible to all users, including those with disabilities. These features help ensure that your application is inclusive and meets accessibility standards.

- [Accessibility feature 1]
- [Accessibility feature 2]
- [Accessibility feature 3]

### Keyboard Interactions

- \`Space\` - [What happens when Space is pressed]
- \`Enter\` - [What happens when Enter is pressed]
- \`Tab\` - Moves focus to the next focusable element.
- \`Shift + Tab\` - Moves focus to the previous focusable element.

### Screen Reader

- VoiceOver: [Describe what VoiceOver announces]

### Examples

The Examples section provides visual representations of the different variants of the component, allowing you to quickly and easily determine which one best fits your needs. Simply copy the code and integrate it into your project.

/// {Example:customized-component} ///

/// {Example:with-variants} ///

/// {Example:controlled} ///

[Add more examples as needed...]
```

**Documentation Best Practices (from CONTRIBUTING.md):**
- ✅ Include comprehensive examples showing different variants and use cases
- ✅ Document all props with types and descriptions using Table components
- ✅ Provide accessibility guidelines following WAI-ARIA patterns
- ✅ Include keyboard interactions section
- ✅ Include screen reader behavior description
- ✅ Include common patterns and best practices
- ✅ Use the `/// {Example:example-name} ///` syntax to embed examples
- ✅ Use proper frontmatter with title, description, pageTitle, pageDescription
- ✅ Use \`<Tabs>\` and \`<TabItem>\` for CLI vs Manual installation
- ✅ Use \`%%-- File: path --%%\` to include source code in manual installation

**Step 6.6: Update Exports and Configuration**

**CRITICAL: Update all necessary configuration files!**

1. **Add to `src/components/ui/index.tsx`:**
```typescript
export * from './[component-name]';
```

2. **Update `src/sidebar.json`** to add component to documentation navigation:

Find the appropriate section (e.g., "Components") and add:
```json
{
  "title": "[ComponentName]",
  "path": "/ui/docs/components/[component-name]"
}
```

**Note:** Follow the existing pattern in sidebar.json:
- Use proper path format: `/ui/docs/components/[component-name]`
- Place in the correct section based on component category
- Maintain alphabetical order within the section
- Use PascalCase for the title

3. **If dependencies needed, update `packages/gluestack-ui/src/dependencies.ts`:**

Add dependencies to the appropriate project types:
```typescript
const projectBasedDependencies: Dependencies = {
  nextjs: {
    dependencies: {
      '[package-name]': '^x.x.x',
    },
  },
  expo: {
    dependencies: {
      '[package-name]': '^x.x.x',
    },
  },
  // ... other project types
};
```

**Best Practices:**
- ✅ Always update sidebar.json when adding new components
- ✅ Use semantic versioning for dependencies
- ✅ Only add dependencies if truly needed
- ✅ Test that the component appears in documentation navigation after update

**Step 6.7: Verify Build**

```bash
# Build packages
cd packages/gluestack-core && yarn build
cd packages/gluestack-utils && yarn build

# Sync to apps
yarn sync
```

---

### PHASE 7: TESTING & REVIEW

**Step 7.1: Test in Kitchen Sink App**

```bash
cd apps/kitchen-sink
yarn dev
```

Test:
- Component renders correctly
- All variants work
- Animations smooth
- No console errors
- iOS simulator works
- Android emulator works
- Web browser works

**Step 7.2: Test in Website App**

```bash
cd apps/website
yarn dev
```

Test:
- Documentation page loads
- Examples render correctly
- Interactive examples work
- API reference displays
- No build errors

**Step 7.3: Accessibility Testing**

Test:
- Tab navigation works
- Keyboard shortcuts work (Arrow keys, Enter, Escape)
- Screen reader announces correctly (VoiceOver on iOS/Mac, TalkBack on Android)
- Focus management works
- ARIA attributes present

**Step 7.4: Present Results to User**

Show the user:
- Screenshots or description of working component
- All variants tested
- Examples working
- Documentation rendered

Ask:
- Does the component work as expected?
- Styling looks good?
- Animations smooth?
- Anything needs adjustment?

**CHECKPOINT 5: Get user approval on implementation. If issues, iterate and fix.**

---

### PHASE 8: FINALIZATION

**Step 8.1: Pre-Submission Checklist**

Go through this checklist:

```markdown
## Pre-Submission Checklist

### Code Quality
- [ ] Follows TypeScript best practices
- [ ] No console.log statements
- [ ] No commented-out code
- [ ] Proper error handling
- [ ] Meaningful variable/function names
- [ ] Code is clean and readable

### Component Structure
- [ ] Follows compound component pattern (if applicable)
- [ ] Uses React.forwardRef
- [ ] TypeScript types exported
- [ ] Props interface documented
- [ ] Default props defined

### Styling
- [ ] Uses NativeWind/Tailwind classes
- [ ] Styles in separate styles.tsx with tva()
- [ ] Responsive design
- [ ] Dark mode support
- [ ] Consistent spacing/sizing

### Accessibility
- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Focus management implemented
- [ ] Screen reader tested

### Documentation
- [ ] docs/index.mdx created following exact format from existing components
- [ ] Frontmatter includes: title, description, pageTitle, pageDescription, showHeader
- [ ] Proper imports for doc components (Table, InlineCode, Tabs, etc.)
- [ ] Installation section with CLI and Manual tabs
- [ ] Manual installation uses `%%-- File: path --%%` syntax
- [ ] API Reference section with component anatomy
- [ ] Props documented in Table components with proper structure
- [ ] Accessibility section with WAI-ARIA pattern reference
- [ ] Keyboard Interactions section documenting all keys
- [ ] Screen Reader section describing VoiceOver behavior
- [ ] Examples section using `/// {Example:name} ///` syntax
- [ ] All sub-components documented with their own prop tables

### Examples
- [ ] At least 3-5 examples created (basic is REQUIRED)
- [ ] Each example has meta.json with proper structure
- [ ] meta.json includes title, description
- [ ] meta.json includes reactLive section with ALL components used
- [ ] template.handlebars follows exact format (space + function, no imports)
- [ ] Examples use Handlebars variables for argTypes: `{{size}}`
- [ ] Examples demonstrate different use cases and variants
- [ ] Examples follow patterns from similar existing components
- [ ] Stateful examples use React.useState properly
- [ ] Examples are practical and realistic

### Configuration Updates
- [ ] Component exported from src/components/ui/index.tsx
- [ ] Component added to src/sidebar.json with correct path
- [ ] Sidebar entry in correct section and alphabetical order
- [ ] Dependencies added to packages/gluestack-ui/src/dependencies.ts (if needed)

### Testing
- [ ] Works in kitchen-sink (iOS, Android, Web)
- [ ] Works in website app
- [ ] All variants tested
- [ ] No console warnings/errors
- [ ] Performance acceptable

### Dependencies
- [ ] dependencies.json created (if needed)
- [ ] dependencies.ts updated (if needed)
- [ ] Only necessary dependencies added

### Exports & Package Configuration
- [ ] Barrel export created: packages/gluestack-core/src/[component]/index.tsx
- [ ] Main index updated: packages/gluestack-core/src/index.tsx
- [ ] Deep imports work: @gluestack-ui/core/[component]/creator
- [ ] UI component exported from src/components/ui/index.tsx
- [ ] All sub-components exported
- [ ] No missing exports

### Import Patterns
- [ ] Uses correct deep import: @gluestack-ui/core/[component]/creator
- [ ] Uses @gluestack-ui/utils/nativewind-utils for tva, withStyleContext
- [ ] Uses user's chosen animation library (not substituted)

### Color Tokens
- [ ] All colors use semantic tokens (bg-background, text-foreground, etc.)
- [ ] No hardcoded color values (#000, rgb(), etc.)
- [ ] Light and dark mode both work

### Apps Directory
- [ ] Did NOT manually edit any files in apps/ directories
- [ ] Only edited src/components/ui/[component]/

### Git
- [ ] Only source files (no generated files from apps/)
- [ ] Meaningful file names
- [ ] Organized structure
```

**Step 8.2: Review with User**

Present the checklist results and ask:
- Everything looks good?
- Ready to commit and create PR?
- Any final adjustments needed?

**CHECKPOINT 6: Final confirmation before commit.**

**Step 8.3: Cleanup**

```bash
# Unlink packages if needed
yarn unlink:apps
```

**Step 8.4: Next Steps**

Inform the user:
```markdown
## ✅ Component Creation Complete!

Your component is ready! Here's what was created:

### Files Created:
- ✅ Core package: `packages/gluestack-core/src/[component-name]/`
- ✅ UI component: `src/components/ui/[component-name]/`
- ✅ Documentation: `src/components/ui/[component-name]/docs/`
- ✅ Examples: `src/components/ui/[component-name]/examples/`

### Next Steps:

1. **Review changes** - Check all files one more time
2. **Run tests** - Ensure everything works
3. **Commit changes** - Use conventional commit format:
   ```bash
   git add .
   git commit -m "feat: add [component-name] component"
   ```
4. **Create PR** - Use `/review-pr` skill for final checklist or create PR now

Would you like me to help you create the PR?
```

---

## IMPORTANT REMINDERS

1. **NEVER skip user confirmations** - there are 6 checkpoints
2. **ALWAYS read CONTRIBUTING.md** at the start
3. **ALWAYS research similar components on the web** before designing (use WebSearch)
4. **ALWAYS analyze existing components** for patterns - read their examples and docs!
5. **ALWAYS use EnterPlanMode** at the beginning
6. **ALWAYS use AskUserQuestion** for requirements including:
   - Component name and category
   - Problem it solves
   - **Animation library preference** (and NEVER substitute the user's choice!)
7. **NEVER edit generated files** in apps/ directories - only edit src/
8. **ALWAYS use correct import paths**:
   - ✅ `@gluestack-ui/core/[component]/creator` (deep import)
   - ✅ `@gluestack-ui/utils/nativewind-utils`
   - ❌ NOT `@gluestack-ui/[component]` (wrong!)
9. **ALWAYS use semantic color tokens**:
   - ✅ `bg-background`, `text-foreground`, `border-border`, etc.
   - ❌ NOT `#000`, `rgb()`, `bg-white`, `text-black`
   - Reference: `src/components/ui/gluestack-ui-provider/config.ts`
10. **ALWAYS configure exports properly**:
    - Barrel export in `packages/gluestack-core/src/[component]/index.tsx`
    - Update `packages/gluestack-core/src/index.tsx`
    - Scripts auto-generate deep import files
11. **ALWAYS respect user's animation library choice** - if they want react-native-reanimated, don't use @legendapp/motion!
12. **ALWAYS test in multiple apps** before finalizing
13. **ALWAYS create complete documentation following exact format**:
    - Use proper frontmatter (title, description, pageTitle, pageDescription, showHeader)
    - Use Table components for props documentation
    - Include Accessibility, Keyboard Interactions, Screen Reader sections
    - Use `/// {Example:name} ///` to embed examples
14. **ALWAYS create examples following exact format**:
    - `meta.json` with title, description, argTypes (optional), reactLive (REQUIRED)
    - `template.handlebars` starting with space + function, NO imports, NO exports
    - Use Handlebars variables: `{{size}}`, `{{variant}}`
    - List ALL components in reactLive section
15. **ALWAYS follow the compound component API pattern** for multi-part components
16. **ALWAYS discuss tradeoffs** before making design decisions
17. **ALWAYS update sidebar.json** with correct path format: `/ui/docs/components/[component-name]`

## Error Recovery

If at any point:
- User is unsure about a decision → Provide more examples and explanation
- Pattern is unclear → Read more existing components for reference
- Implementation fails → Debug, fix, and re-test
- User wants changes → Go back to appropriate phase and iterate

## Success Criteria

The component is complete when:
- ✅ All 6 checkpoints passed with user approval
- ✅ Component works in kitchen-sink app (iOS, Android, Web)
- ✅ Documentation renders in website app
- ✅ All examples work
- ✅ Pre-submission checklist 100% complete
- ✅ User is satisfied with the result

---

**Ready to create an amazing component!** 🚀

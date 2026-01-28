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

---

## WORKFLOW: 8 PHASES

### PHASE 1: ENTER PLAN MODE & DISCOVERY

**Step 1.1: Enter Plan Mode**
```
Use EnterPlanMode tool to enter planning mode. You will explore the codebase and design the component before implementation.
```

**Step 1.2: Analyze Existing Patterns**

Read and understand these files to learn the patterns:
1. `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/CONTRIBUTING.md` - Complete contribution guidelines
2. `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/src/components/ui/accordion/index.tsx` - Example compound component
3. `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/src/components/ui/button/index.tsx` - Example with style context
4. `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/src/components/ui/alert-dialog/index.tsx` - Example with animations
5. `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/packages/gluestack-core/src/accordion/creator/index.tsx` - Example creator pattern

Use Glob/Grep to find more examples if needed.

**Step 1.3: Gather Requirements**

Use AskUserQuestion tool to ask:

**Question 1: Component Name & Purpose**
```yaml
questions:
  - question: "What should the component be called?"
    header: "Component Name"
    multiSelect: false
    options:
      - label: "Simple name (e.g., dropdown, tooltip)"
        description: "Single-word kebab-case name"
      - label: "Compound name (e.g., file-upload, date-picker)"
        description: "Multi-word kebab-case name"
```

After getting the name, ask:
- What problem does this component solve?
- What's the primary use case?

**Question 2: Component Type**
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

**Question 3: Platform Requirements**
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

**Question 4: Accessibility Requirements**
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

**Question 5: Animation Requirements**
```yaml
questions:
  - question: "Does this component need animations?"
    header: "Animations"
    multiSelect: false
    options:
      - label: "No animations"
        description: "Static component"
      - label: "Simple animations"
        description: "Opacity, scale using react-native-reanimated"
      - label: "Complex animations"
        description: "Gesture-driven, spring physics, complex transitions"
      - label: "Entrance/exit only"
        description: "Mount/unmount animations (FadeIn, ZoomIn, SlideIn)"
```

**Question 6: Styling & Variants**

Ask the user:
- What variants should this component support? (e.g., size: sm/md/lg, variant: default/outline/ghost)
- What should be the default variant?
- Does it need parent-child style context? (if compound component)
- Should it support custom theming?

**Question 7: Sub-components (if compound)**

If it's a compound component, ask:
- List all sub-components needed (e.g., Dropdown, DropdownTrigger, DropdownContent, DropdownItem)
- How do they interact with each other?
- What state/context needs to be shared?
- What's the typical usage pattern?

**Question 8: Dependencies**
```yaml
questions:
  - question: "Which external dependencies does this component need?"
    header: "Dependencies"
    multiSelect: true
    options:
      - label: "None (Recommended)"
        description: "Use only React Native core primitives"
      - label: "react-native-svg"
        description: "For custom icons or SVG elements"
      - label: "react-native-reanimated"
        description: "For animations"
      - label: "@floating-ui/react-native"
        description: "For positioning (popovers, tooltips)"
      - label: "Other (specify)"
        description: "Other npm packages needed"
```

If "Other" is selected, ask the user to specify which packages and why.

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

```
src/components/ui/[component-name]/
├── index.tsx                          # Main component exports
├── index.web.tsx                      # Web-specific (if needed)
├── styles.tsx                         # Tailwind styles with tva()
├── dependencies.json                  # NPM dependencies
├── docs/
│   └── index.mdx                      # Component documentation
└── examples/
    ├── basic/
    │   ├── meta.json
    │   └── template.handlebars
    ├── customized-component/
    │   ├── meta.json
    │   └── template.handlebars
    └── [other-examples]/
        ├── meta.json
        └── template.handlebars

packages/gluestack-core/src/[component-name]/
├── creator/
│   └── index.tsx                      # create[ComponentName] factory
├── aria/
│   └── index.tsx                      # use[ComponentName] hook
└── index.tsx                          # Barrel export
```

### 🔧 Core Package Implementation

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

**File:** `src/components/ui/[component-name]/index.tsx`

```typescript
'use client';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { create[ComponentName] } from '@gluestack-ui/[component-name]';
import { tva, withStyleContext, useStyleContext, type VariantProps } from '@gluestack-ui/nativewind-utils';
import { [componentName]Style, [subComponent]Style } from './styles';

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
import { tva } from '@gluestack-ui/nativewind-utils';

export const [componentName]Style = tva({
  base: 'flex-col rounded-md',
  variants: {
    size: {
      sm: 'p-2 gap-2',
      md: 'p-4 gap-4',
      lg: 'p-6 gap-6',
    },
    variant: {
      default: 'bg-background border border-border',
      outline: 'bg-transparent border border-border',
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

Create 3-5 examples:
1. **basic/** - Simple usage
2. **customized-component/** - Styled variant
3. **[use-case-specific]/** - Real-world examples

Each example needs:
- `meta.json` - Example metadata
- `template.handlebars` - Handlebars template

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
mkdir -p packages/gluestack-core/src/[component-name]/aria
```

2. Implement creator function (follow pattern from accordion/creator/index.tsx)
3. Implement ARIA hook if needed (follow pattern from accordion/aria/index.tsx)
4. Export from packages/gluestack-core/src/[component-name]/index.tsx
5. Update packages/gluestack-core/src/index.tsx to export new component

**Step 6.3: Implement UI Component**

1. Create directory:
```bash
mkdir -p src/components/ui/[component-name]/docs
mkdir -p src/components/ui/[component-name]/examples/basic
```

2. Create `src/components/ui/[component-name]/index.tsx` with compound component
3. Create `src/components/ui/[component-name]/styles.tsx` with tva() styles
4. Create `src/components/ui/[component-name]/dependencies.json` if needed
5. Create web-specific `src/components/ui/[component-name]/index.web.tsx` if needed

**Step 6.4: Create Examples**

For each example (basic, customized, etc.):

1. Create example directory
2. Create `meta.json`:
```json
{
  "title": "Basic Example",
  "description": "A basic example of [ComponentName]"
}
```

3. Create `template.handlebars`:
```handlebars
<script>
import React from 'react';
import { [ComponentName], [SubComponent] } from '@/components/ui/[component-name]';

const Example = () => {
  return (
    <[ComponentName]>
      <[SubComponent]>
        Content here
      </[SubComponent]>
    </[ComponentName]>
  );
};

export default Example;
</script>
```

**Step 6.5: Create Documentation**

Create `src/components/ui/[component-name]/docs/index.mdx`:

```mdx
---
title: [ComponentName] | gluestack-ui
description: A description of the component
---

import { Canvas, Meta, Story } from '@storybook/addon-docs';

<Meta title="[ComponentName]" />

# [ComponentName]

Description of what the component does.

/// {Example:basic} ///

## Installation

<Tabs>
<TabItem value="cli" label="CLI">

### Run the following command:
\`\`\`bash
npx gluestack-ui add [component-name]
\`\`\`

</TabItem>
<TabItem value="manual" label="Manual">

### Install dependencies:
\`\`\`bash
npm install [dependencies]
\`\`\`

### Copy and paste the component:
Copy from src/components/ui/[component-name]/index.tsx

</TabItem>
</Tabs>

## Usage

\`\`\`jsx
import { [ComponentName] } from '@/components/ui/[component-name]';

<[ComponentName]>
  Content
</[ComponentName]>
\`\`\`

## API Reference

### [ComponentName]

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'sm' \| 'md' \| 'lg' | 'md' | Size variant |
| variant | 'default' \| 'outline' | 'default' | Visual variant |

[Add all props...]

## Accessibility

- Supports keyboard navigation
- ARIA labels included
- Screen reader friendly

## Examples

### Basic
/// {Example:basic} ///

### Customized
/// {Example:customized-component} ///
```

**Step 6.6: Update Exports**

1. Add to `src/components/ui/index.tsx`:
```typescript
export * from './[component-name]';
```

2. Update `src/sidebar.json` to add component to navigation:
```json
{
  "title": "[ComponentName]",
  "path": "/ui/[component-name]"
}
```

3. If dependencies needed, update `packages/gluestack-ui/src/dependencies.ts`

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
- [ ] docs/index.mdx created
- [ ] Props documented in API table
- [ ] Examples created (basic + advanced)
- [ ] Installation instructions included
- [ ] Sidebar.json updated

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

### Exports
- [ ] Exported from src/components/ui/index.tsx
- [ ] All sub-components exported
- [ ] No missing exports

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
3. **ALWAYS analyze existing components** for patterns
4. **ALWAYS use EnterPlanMode** at the beginning
5. **ALWAYS use AskUserQuestion** for requirements
6. **NEVER edit generated files** in apps/ directories
7. **ALWAYS test in multiple apps** before finalizing
8. **ALWAYS create complete documentation** with examples
9. **ALWAYS follow the compound component API pattern** for multi-part components
10. **ALWAYS discuss tradeoffs** before making design decisions

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

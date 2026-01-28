---
name: contribute/create-package
parent: contribute
description: Create or modify gluestack-core and gluestack-utils packages for component creators and utilities
---

# Create Package Workflow

Guide for creating or modifying packages in the gluestack-ui ecosystem. This includes working with gluestack-core (component creators) and gluestack-utils (utilities, hooks, styling helpers).

## Package Types

### gluestack-core
Contains component creators and core logic:
- Creator functions (factory pattern for components)
- ARIA hooks for accessibility
- Component-specific logic
- State management

### gluestack-utils
Contains shared utilities:
- NativeWind utilities (tva, withStyleContext, useStyleContext)
- Common hooks
- Helper functions
- ARIA utilities from react-aria

## Workflow

### PHASE 1: Package Type Selection

**Step 1.1: Determine Package Type**

Ask the user:
```yaml
questions:
  - question: "Which package are you working on?"
    header: "Package Type"
    multiSelect: false
    options:
      - label: "gluestack-core"
        description: "Component creators, ARIA hooks, component-specific logic"
      - label: "gluestack-utils"
        description: "Shared utilities, common hooks, styling helpers"
```

**Step 1.2: Determine Task Type**

Ask the user:
```yaml
questions:
  - question: "What do you want to do?"
    header: "Task"
    multiSelect: false
    options:
      - label: "Create new component creator"
        description: "Add factory function for new component in gluestack-core"
      - label: "Create ARIA hook"
        description: "Add accessibility hook in gluestack-core"
      - label: "Create utility function"
        description: "Add helper function in gluestack-utils"
      - label: "Modify existing package code"
        description: "Update or fix existing package code"
```

### PHASE 2: Analysis & Planning

**Step 2.1: Analyze Existing Package Structure**

Read relevant package files:

**For gluestack-core:**
```
packages/gluestack-core/
├── src/
│   ├── accordion/
│   │   ├── creator/index.tsx
│   │   ├── aria/index.tsx
│   │   └── index.tsx
│   ├── button/
│   ├── [component-name]/
│   └── index.tsx
├── package.json
└── tsconfig.json
```

**For gluestack-utils:**
```
packages/gluestack-utils/
├── src/
│   ├── nativewind-utils/
│   │   ├── tva/
│   │   ├── withStyleContext/
│   │   └── useStyleContext/
│   ├── hooks/
│   ├── aria/
│   └── common/
├── package.json
└── tsconfig.json
```

**Step 2.2: Read Similar Implementations**

Use Read tool to understand patterns:

For component creator:
- Read `packages/gluestack-core/src/accordion/creator/index.tsx`
- Read `packages/gluestack-core/src/button/creator/index.tsx`
- Understand factory pattern

For ARIA hook:
- Read `packages/gluestack-core/src/accordion/aria/index.tsx`
- Understand react-aria integration

For utility:
- Read `packages/gluestack-utils/src/nativewind-utils/tva/index.tsx`
- Understand utility patterns

### PHASE 3: API Design

**Step 3.1: Design Package API**

Based on the task type:

**Component Creator API:**
```typescript
// Factory function that accepts base components and returns compound component
export function create[ComponentName]<
  RootProps,
  ItemProps,
  // ... other generic types
>({
  Root,
  Item,
  // ... other components
}: {
  Root: React.ComponentType<RootProps>;
  Item: React.ComponentType<ItemProps>;
  // ... other components
}) {
  // Create compound component
  const [ComponentName] = [ComponentName]Main(Root) as any;
  [ComponentName].Item = [ComponentName]Item(Item);
  // ... attach sub-components

  return [ComponentName] as I[ComponentName]ComponentType<
    RootProps,
    ItemProps,
    // ... other types
  >;
}
```

**ARIA Hook API:**
```typescript
// Hook that provides accessibility features
export function use[ComponentName]({
  isDisabled,
  isOpen,
  onOpenChange,
  // ... other props
}: Use[ComponentName]Props) {
  // Use react-aria hooks
  const state = useOverlayTriggerState({ isOpen, onOpenChange });
  const { triggerProps, overlayProps } = useOverlayTrigger({}, state, triggerRef);

  return {
    state,
    triggerProps,
    overlayProps,
    // ... other returns
  };
}
```

**Utility Function API:**
```typescript
// Helper function with clear input/output
export function utilityName(
  input: InputType,
  options?: OptionsType
): ReturnType {
  // Implementation
  return result;
}
```

**Step 3.2: Present API to User**

Show the proposed API and ask:
- Is the API clear and intuitive?
- Do the parameter names make sense?
- Is the return type appropriate?
- Any edge cases to consider?

**CHECKPOINT 1: Get user approval on API design**

### PHASE 4: Implementation Plan

**Step 4.1: File Structure Plan**

**For Component Creator (gluestack-core):**
```markdown
## Implementation Plan

### Files to Create:
```
packages/gluestack-core/src/[component-name]/
├── creator/
│   └── index.tsx              # create[ComponentName] factory
├── aria/
│   └── index.tsx              # use[ComponentName] hook (if needed)
└── index.tsx                  # Barrel export
```

### Updates Required:
- packages/gluestack-core/src/index.tsx (add export)
- packages/gluestack-core/package.json (if adding dependencies)

### Dependencies:
- react
- react-native
- @react-aria/[module] (if using react-aria)
- @react-stately/[module] (if using react-stately)
```

**For Utility (gluestack-utils):**
```markdown
## Implementation Plan

### Files to Create:
```
packages/gluestack-utils/src/[category]/[utility-name]/
├── index.tsx                  # Main utility
├── types.ts                   # TypeScript types (if complex)
└── README.md                  # Usage documentation (optional)
```

### Updates Required:
- packages/gluestack-utils/src/index.tsx (add export)
- packages/gluestack-utils/package.json (if adding dependencies)
```

**Step 4.2: Confirm Plan**

**CHECKPOINT 2: Get user confirmation on implementation plan**

### PHASE 5: Local Development Setup

**Step 5.1: Link Packages for Development**

```bash
# Link the package you're working on
yarn link:create-core    # For gluestack-core
# OR
yarn link:create-utils   # For gluestack-utils

# Link to apps for testing
yarn link:apps
```

**Step 5.2: Start Watch Mode**

The package will now rebuild automatically on changes:
```bash
# Watch mode is started by link:create-* commands
# Changes will auto-rebuild and push to yalc
```

### PHASE 6: Implementation

**Step 6.1: Create Component Creator (if gluestack-core)**

**Example: packages/gluestack-core/src/dropdown/creator/index.tsx**

```typescript
'use client';
import React from 'react';

// Component wrapper functions
const DropdownMain = <T,>(StyledRoot: React.ComponentType<T>) => {
  return React.forwardRef<T, any>(
    ({ children, ...props }, ref) => {
      return (
        <StyledRoot ref={ref} {...props}>
          {children}
        </StyledRoot>
      );
    }
  );
};

const DropdownTrigger = <T,>(StyledTrigger: React.ComponentType<T>) => {
  return React.forwardRef<T, any>(
    ({ children, ...props }, ref) => {
      return (
        <StyledTrigger ref={ref} {...props}>
          {children}
        </StyledTrigger>
      );
    }
  );
};

// ... more sub-component wrappers

// Factory function
export function createDropdown<
  RootProps,
  TriggerProps,
  ContentProps,
  // ... other types
>({
  Root,
  Trigger,
  Content,
  // ... other components
}: {
  Root: React.ComponentType<RootProps>;
  Trigger: React.ComponentType<TriggerProps>;
  Content: React.ComponentType<ContentProps>;
  // ... other components
}) {
  const Dropdown = DropdownMain(Root) as any;
  Dropdown.Trigger = DropdownTrigger(Trigger);
  Dropdown.Content = DropdownContent(Content);
  // ... attach more sub-components

  Dropdown.displayName = 'Dropdown';

  return Dropdown as IDropdownComponentType<
    RootProps,
    TriggerProps,
    ContentProps
  >;
}

// TypeScript interface for compound component
export type IDropdownComponentType<
  RootProps,
  TriggerProps,
  ContentProps
> = React.ForwardRefExoticComponent<RootProps> & {
  Trigger: React.ForwardRefExoticComponent<TriggerProps>;
  Content: React.ForwardRefExoticComponent<ContentProps>;
  // ... other sub-components
};
```

**Step 6.2: Create ARIA Hook (if needed)**

**Example: packages/gluestack-core/src/dropdown/aria/index.tsx**

```typescript
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useOverlayTrigger } from '@react-aria/overlays';
import { useRef } from 'react';

export interface UseDropdownProps {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  isDisabled?: boolean;
}

export function useDropdown(props: UseDropdownProps) {
  const {
    isOpen,
    defaultOpen,
    onOpenChange,
    isDisabled = false,
  } = props;

  const triggerRef = useRef(null);

  // State management
  const state = useOverlayTriggerState({
    isOpen,
    defaultOpen,
    onOpenChange,
  });

  // Accessibility props
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    triggerRef
  );

  return {
    state,
    triggerRef,
    triggerProps: {
      ...triggerProps,
      'aria-disabled': isDisabled,
    },
    overlayProps,
  };
}
```

**Step 6.3: Create Utility Function (if gluestack-utils)**

**Example: packages/gluestack-utils/src/hooks/useControllableState/index.tsx**

```typescript
import { useCallback, useState, useRef, useEffect } from 'react';

export interface UseControllableStateProps<T> {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
}

export function useControllableState<T>({
  value: controlledValue,
  defaultValue,
  onChange,
}: UseControllableStateProps<T>) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const setValue = useCallback(
    (nextValue: T | ((prev: T) => T)) => {
      const newValue =
        typeof nextValue === 'function'
          ? (nextValue as (prev: T) => T)(value as T)
          : nextValue;

      if (!isControlled) {
        setUncontrolledValue(newValue);
      }

      onChange?.(newValue);
    },
    [isControlled, onChange, value]
  );

  return [value, setValue] as const;
}
```

**Step 6.4: Add TypeScript Types**

Create proper TypeScript types for all exports:

```typescript
// In creator/index.tsx or separate types.ts
export interface DropdownProps {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export interface DropdownTriggerProps {
  children: React.ReactNode;
  isDisabled?: boolean;
}

// ... other interfaces
```

**Step 6.5: Create Barrel Exports**

**packages/gluestack-core/src/dropdown/index.tsx:**
```typescript
export * from './creator';
export * from './aria';
```

**packages/gluestack-core/src/index.tsx** (add line):
```typescript
export * from './dropdown';
```

### PHASE 7: Testing

**Step 7.1: Test in UI Component**

Create or update a UI component that uses the package:

```typescript
// src/components/ui/dropdown/index.tsx
import { createDropdown, useDropdown } from '@gluestack-ui/dropdown';
import { View, Pressable } from 'react-native';

const UIDropdown = createDropdown({
  Root: View,
  Trigger: Pressable,
  Content: View,
});

const Dropdown = React.forwardRef((props, ref) => {
  const { state, triggerProps, overlayProps } = useDropdown(props);

  return (
    <UIDropdown ref={ref}>
      {/* Component implementation */}
    </UIDropdown>
  );
});
```

**Step 7.2: Test in Apps**

```bash
# Test in kitchen-sink
cd apps/kitchen-sink && yarn dev

# Test in website
cd apps/website && yarn dev
```

Verify:
- Package imports correctly
- Functions work as expected
- TypeScript types are correct
- No console errors
- Documentation examples work

**Step 7.3: Build Test**

```bash
# Build the package
cd packages/gluestack-core && yarn build
# OR
cd packages/gluestack-utils && yarn build

# Check for build errors
# Verify dist/ folder created
# Check TypeScript declarations (.d.ts files)
```

### PHASE 8: Documentation

**Step 8.1: Add JSDoc Comments**

Add comprehensive JSDoc comments:

```typescript
/**
 * Creates a dropdown component with compound component pattern.
 *
 * @param components - Object containing React components for each part
 * @param components.Root - Root container component
 * @param components.Trigger - Trigger button component
 * @param components.Content - Dropdown content container
 *
 * @returns Compound component with Trigger and Content sub-components
 *
 * @example
 * ```tsx
 * const Dropdown = createDropdown({
 *   Root: View,
 *   Trigger: Pressable,
 *   Content: View,
 * });
 *
 * <Dropdown>
 *   <Dropdown.Trigger>Open</Dropdown.Trigger>
 *   <Dropdown.Content>Content</Dropdown.Content>
 * </Dropdown>
 * ```
 */
export function createDropdown({ ... }) {
  // ...
}
```

**Step 8.2: Update Package README (if major addition)**

Update package README if adding significant functionality.

### PHASE 9: Cleanup & Finalization

**Step 9.1: Unlink Packages**

```bash
yarn unlink:apps
```

**Step 9.2: Final Checklist**

```markdown
## Package Development Checklist

### Code Quality
- [ ] TypeScript types complete
- [ ] JSDoc comments added
- [ ] No console.log statements
- [ ] Proper error handling
- [ ] Code is clean and readable

### Functionality
- [ ] Package exports correctly
- [ ] Functions work as expected
- [ ] TypeScript types correct
- [ ] No runtime errors
- [ ] Tested in UI components

### Build
- [ ] Package builds successfully
- [ ] No build warnings
- [ ] .d.ts files generated
- [ ] Barrel exports correct

### Documentation
- [ ] JSDoc comments complete
- [ ] Usage examples provided
- [ ] README updated (if needed)

### Testing
- [ ] Tested in apps
- [ ] Integration tested
- [ ] Edge cases considered
```

**CHECKPOINT 3: Final confirmation**

### PHASE 10: Summary

```markdown
## ✅ Package Development Complete!

### What Was Created:
- Package: packages/[package-name]/src/[component-or-utility]/
- Exports: Updated barrel exports
- Types: Complete TypeScript definitions

### Testing:
- ✅ Builds successfully
- ✅ TypeScript types correct
- ✅ Tested in UI components
- ✅ Works in apps

### Next Steps:
1. Review changes
2. Commit: `git commit -m "feat([package]): [description]"`
3. Create PR
4. After merge, publish package (maintainers only)

Ready to commit?
```

---

## Best Practices

### For Component Creators (gluestack-core)

1. **Follow factory pattern** - Accept base components, return compound component
2. **Use forwardRef** - Always forward refs to base components
3. **Proper TypeScript generics** - Support any base component types
4. **displayName** - Set for better debugging
5. **Consistent naming** - Component + SubComponent pattern

### For ARIA Hooks (gluestack-core)

1. **Use react-aria** - Leverage existing ARIA implementations
2. **Return props objects** - Return props to spread on elements
3. **State management** - Use react-stately for complex state
4. **Composable** - Hooks should work together
5. **Document behavior** - Clear JSDoc for ARIA patterns

### For Utilities (gluestack-utils)

1. **Pure functions** - No side effects when possible
2. **Type safety** - Proper TypeScript types
3. **Tree-shakeable** - Export named exports
4. **Well documented** - Clear JSDoc with examples
5. **Tested** - Ensure utilities work correctly

---

**Let's build great packages!** 📦

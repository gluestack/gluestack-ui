---
name: gluestack-ui-v4
description: Enforces constrained, opinionated styling patterns for gluestack-ui v4. Main overview skill that coordinates specialized sub-skills for setup, components, styling, variants, performance, and validation.
---

# Gluestack UI v4 Design Patterns

This skill enforces constrained, opinionated styling patterns for gluestack-ui v4 that reduce decision fatigue, improve performance, enable consistent theming, and limit the solution space to canonical patterns.

## Core Principles

1. **Gluestack components over React Native primitives** - Gluestack wraps RN with theming, accessibility, and cross-platform consistency
2. **Component props over className utilities** - Use built-in props (size, variant, space) instead of className when available
3. **Semantic tokens ONLY - NO EXCEPTIONS** - NEVER use generic tokens (`typography-*`, `neutral-*`, `gray-*`) or numbered colors (`red-500`, `blue-600`). ONLY use semantic tokens (`text-foreground`, `bg-primary`, `border-border`, etc.) with optional alpha values
4. **className over inline styles** - Inline styles bypass optimization and consistency
5. **Spacing scale over pixel values** - Arbitrary values create unsustainable exceptions
6. **Copy-paste philosophy** - Components are copied into your codebase, not installed as dependencies
7. **Composable sub-components** - Use compound component patterns for flexibility
8. **Remove dead code** - Unused patterns mislead AI and increase cognitive load

## When to Use This Skill

- Creating new components with styling
- Reviewing existing component styles
- Refactoring styles to follow the design system
- Fixing styling inconsistencies
- Adding dark mode support
- Theming components
- Copying components from gluestack-ui into your project

**Before using any component, always verify the latest usage patterns at `https://v4.gluestack.io/ui/docs/components/${componentName}/`**

## Sub-Skills Organization

This skill is organized into specialized sub-skills for better token efficiency:

### 1. gluestack-ui-v4:setup
**Use for:** Initial project setup, installation, configuration, adding components

Covers:
- Using the official CLI (`npx gluestack-ui@alpha init -y` and `npx gluestack-ui@alpha add --all -y`)
- Project initialization for Expo, React Native CLI, and Next.js
- Dependency management
- Configuration files (tailwind, metro, babel, etc.)
- GluestackUIProvider setup
- Adding individual components
- Troubleshooting setup issues

**Invoke when:** Setting up gluestack-ui in a new or existing project, adding components via CLI, or troubleshooting installation issues

### 2. gluestack-ui-v4:creating-components
**Use for:** Step-by-step component creation, templates, recipes

Covers:
- Component creation workflow
- 6 ready-to-use templates (simple, variants, compound, form, interactive, loading)
- Common component recipes (profile cards, badges, search, lists)
- Best practices checklist
- Quick start guide

**Invoke when:** Creating new components from scratch or need component templates

### 3. gluestack-ui-v4:components
**Use for:** Component usage, compound patterns, icons, provider setup

Covers:
- Using Gluestack components over React Native primitives
- Component props vs className utilities
- Compound component patterns (Input, Button, FormControl, etc.)
- Icon usage hierarchy
- Provider setup

**Invoke when:** Working with component structure, props, and composition

### 4. gluestack-ui-v4:styling
**Use for:** Colors, spacing, dark mode, variants, className

Covers:
- Semantic color tokens
- Spacing scale adherence
- Dark mode with CSS variables
- Variant-based styling with tva
- className merging

**Invoke when:** Styling components, theming, or working with colors and spacing

### 5. gluestack-ui-v4:variants
**Use for:** Creating custom variants for components, extending design system

Covers:
- When and how to create variants
- Using tva for variant management
- Extending existing Gluestack components
- Parent-child variant relationships
- Compound variants for complex combinations
- Common variant patterns (badges, alerts, cards)
- Converting repeated styles to variants

**Invoke when:** Need to create custom variants for components, extend component styling options, or standardize repeated style patterns

### 6. gluestack-ui-v4:performance
**Use for:** Cross-platform, performance optimization, best practices

Covers:
- Cross-platform rendering (Native & Web)
- TypeScript usage
- Component memoization
- Animations with Reanimated
- Safe area handling
- FlatList for lists
- Platform-specific code

**Invoke when:** Optimizing performance, ensuring cross-platform compatibility, or following React Native best practices

### 7. gluestack-ui-v4:validation
**Use for:** Code review, anti-patterns, validation checklist

Covers:
- Complete validation checklist
- Anti-patterns to avoid
- Common mistakes
- Escalation guidance

**Invoke when:** Reviewing code, validating implementation, or checking for anti-patterns

## Quick Reference

### Resolution Hierarchy (in order of preference)

1. **Component props** - Use built-in props (size, variant, space)
2. **className utilities** - Use existing Tailwind/NativeWind classes
3. **Gluestack component variants** - Use built-in component variants
4. **tva (Tailwind Variant Authority)** - Create reusable variant patterns
5. **NativeWind interop** - Enable className on third-party components
6. **Inline styles** - Only as absolute last resort with documented justification

### Common Patterns

```tsx
// Component usage with props
<VStack space="lg" className="p-4">
  <Heading size="xl" bold>Title</Heading>
  <Text size="md" className="text-muted-foreground">Description</Text>
</VStack>

// Button with compound components
<Button variant="outline" size="lg">
  <ButtonText>Click Me</ButtonText>
  <ButtonIcon as={ChevronRightIcon} />
</Button>

// Input with icon (InputIcon MUST be in InputSlot)
<Input>
  <InputSlot>
    <InputIcon as={MailIcon} className="text-muted-foreground" />
  </InputSlot>
  <InputField placeholder="Enter email" />
</Input>

// Semantic color tokens
<Box className="bg-primary text-primary-foreground">
  <Text className="text-foreground">Content</Text>
</Box>
```

## Key Rules Summary

1. **Always use Gluestack components** instead of React Native primitives
2. **Use component props** (space, size, variant) instead of className when available
3. **CRITICAL: ONLY semantic tokens for colors** - NEVER use `typography-*`, `neutral-*`, `gray-*`, `slate-*`, or numbered colors (`red-500`, `blue-600`). ONLY use semantic tokens: `text-foreground`, `text-muted-foreground`, `bg-primary`, `bg-card`, `border-border`, etc. with optional alpha values (`/70`, `/90`)
4. **No inline styles** unless absolutely necessary
5. **Follow spacing scale** (0, 0.5, 1, 2, 3, 4, etc.) - no arbitrary values
6. **Compound components required** - ButtonText, InputSlot, FormControlLabel, etc.
7. **InputIcon MUST be wrapped in InputSlot** - this is critical
8. **Use tva for variants** when creating custom components with multiple styles
9. **Dark mode with dark: prefix** - uses CSS variables
10. **Cross-platform compatible** - use Gluestack wrappers, not direct React Native imports

## Reference Documentation

**IMPORTANT: Always verify component usage and patterns in the official v4 documentation before using components.**

- **Component Docs**: `https://v4.gluestack.io/ui/docs/components/${componentName}/`
- **Complete Documentation**: https://v4.gluestack.io/ui/docs
- **Import Path**: `@/components/ui/${componentName}`

## How to Use Sub-Skills

When working on specific tasks, invoke the appropriate sub-skill for detailed guidance:

- **Setting up gluestack-ui or adding components?** → Use `gluestack-ui-v4:setup`
- **Creating a new component?** → Use `gluestack-ui-v4:creating-components`
- **Component structure questions?** → Use `gluestack-ui-v4:components`
- **Styling and theming questions?** → Use `gluestack-ui-v4:styling`
- **Creating or extending component variants?** → Use `gluestack-ui-v4:variants`
- **Performance or cross-platform questions?** → Use `gluestack-ui-v4:performance`
- **Need to validate or review code?** → Use `gluestack-ui-v4:validation`

Each sub-skill provides focused, detailed guidance on its specific domain while maintaining consistency with these core principles.

---
name: gluestack-ui-v4:styling
description: Styling patterns for gluestack-ui v4 - covers semantic tokens, spacing, dark mode, variants with tva, and className merging.
---

# Gluestack UI v4 - Styling Patterns

This sub-skill focuses on styling patterns, theming, colors, spacing, dark mode, and variant management for gluestack-ui v4.

## Rule 3: Semantic Color Tokens Over Raw Values (v4)

**CRITICAL**: You MUST use only Gluestack v4 semantic tokens. Generic tokens like `typography-*`, `neutral-*`, `gray-*`, `slate-*`, or any numbered color tokens (`red-500`, `blue-600`, etc.) are **STRICTLY PROHIBITED**.

### Prohibited Token Patterns

**NEVER use these token patterns:**

| Prohibited Pattern | Why It's Wrong | Use Instead |
| ------------------ | -------------- | ----------- |
| `typography-*` | Generic, not semantic | `text-foreground`, `text-muted-foreground`, `text-card-foreground` |
| `neutral-*` | Generic, not semantic | `text-foreground`, `bg-background`, `bg-muted` |
| `gray-*`, `slate-*` | Raw color, not semantic | `text-muted-foreground`, `bg-muted`, `border-border` |
| `text-red-500`, `bg-red-600` | Numbered colors, not semantic | `text-destructive`, `bg-destructive` |
| `text-green-500`, `bg-green-600` | Numbered colors, not semantic | `text-primary` (for success states) |
| `text-blue-500`, `bg-blue-600` | Numbered colors, not semantic | `text-primary`, `bg-primary` |
| `border-gray-200` | Raw color, not semantic | `border-border` |
| `#DC2626`, `#3b82f6` (inline) | Hex values, not semantic | `text-destructive`, `bg-primary` |
| `bg-white`, `bg-black` | Raw colors, not semantic | `bg-background`, `text-foreground` |
| `text-opacity-*` | Opacity utilities | Use alpha values: `text-foreground/70` |

### Correct Semantic Token Replacement Guide

Use Gluestack v4 semantic tokens instead of raw Tailwind colors or arbitrary values:

| Instead of | Use |
| ---------- | --- |
| text-red-500 | text-destructive |
| text-green-500 | text-primary (for success) |
| text-blue-500 | text-primary |
| text-gray-500, text-neutral-500 | text-muted-foreground |
| text-gray-900, text-typography-900 | text-foreground |
| bg-blue-600 | bg-primary |
| bg-gray-100, bg-neutral-100 | bg-muted |
| bg-gray-50 | bg-background |
| border-gray-200, border-neutral-200 | border-border |
| #DC2626 (inline) | text-destructive |
| bg-white | bg-background |
| text-black | text-foreground |

### Available Semantic Token Categories (v4)

| Token                | Purpose                                  | Usage Example                        |
| -------------------- | ---------------------------------------- | ------------------------------------ |
| primary              | Brand identity, key interactive elements | `bg-primary`, `text-primary`         |
| primary-foreground   | Text on primary backgrounds              | `text-primary-foreground`            |
| secondary            | Secondary actions, supporting elements   | `bg-secondary`                       |
| secondary-foreground | Text on secondary backgrounds            | `text-secondary-foreground`          |
| background           | Main background color                    | `bg-background`                      |
| foreground           | Main text color                          | `text-foreground`                    |
| card                 | Card backgrounds                         | `bg-card`                            |
| card-foreground      | Text on card backgrounds                 | `text-card-foreground`               |
| popover              | Popover/modal backgrounds                | `bg-popover`                         |
| popover-foreground   | Text on popover backgrounds              | `text-popover-foreground`            |
| muted                | Muted backgrounds                        | `bg-muted`                           |
| muted-foreground     | Muted text color                         | `text-muted-foreground`              |
| destructive          | Error states, destructive actions        | `bg-destructive`, `text-destructive` |
| border               | Border colors                            | `border-border`                      |
| input                | Input border colors                      | `border-input`                       |
| ring                 | Focus ring colors                        | `ring-ring`                          |
| accent               | Accent highlights                        | `bg-accent`                          |
| accent-foreground    | Text on accent backgrounds               | `text-accent-foreground`             |

### CRITICAL: Why Semantic Tokens Are Mandatory

**Semantic tokens are NOT optional**. They are required for:

1. **Theme Consistency** - Tokens automatically adapt to light/dark modes
2. **Maintainability** - Change theme once, update everywhere
3. **Intent Expression** - `text-destructive` communicates purpose, `text-red-500` doesn't
4. **Future-Proofing** - Theme changes don't require code updates
5. **Accessibility** - Tokens ensure proper contrast ratios

**If you use generic tokens (`typography-*`, `neutral-*`) or numbered colors (`gray-500`, `blue-600`), the component will:**
- Break in dark mode
- Fail to match the design system
- Create maintenance debt
- Violate gluestack-ui v4 design principles

### Alpha Values

All color tokens support alpha values using the `/` syntax:

```tsx
// ✅ CORRECT: Using alpha values with semantic tokens
<Box className="bg-primary/90" />
<Text className="text-foreground/70" />
<Box className="border-border/80" />

// ❌ INCORRECT: Never use opacity utilities
<Text className="text-gray-900 opacity-70" />
<Box className="bg-blue-500 bg-opacity-90" />

// ✅ CORRECT: Alpha values, not opacity utilities
<Text className="text-foreground/70" />
<Box className="bg-primary/90" />
```

### Correct Pattern

```tsx
<Box className="bg-destructive">
  <Text className="text-white">Error message</Text>
</Box>

<Box className="border border-border bg-card">
  <Text className="text-card-foreground">Success!</Text>
</Box>

<Box className="bg-primary/90">
  <Text className="text-primary-foreground">Primary action</Text>
</Box>
```

### Incorrect Pattern

```tsx
// ❌ PROHIBITED: Numbered color tokens
<Box className="bg-red-500">
  <Text className="text-white">Error message</Text>
</Box>

// ❌ PROHIBITED: Inline hex values
<Box style={{ backgroundColor: '#DC2626' }}>
  <Text style={{ color: 'green' }}>Success!</Text>
</Box>

// ❌ PROHIBITED: Arbitrary color values
<Box className="bg-[#3b82f6]">
  <Text className="text-[#ffffff]">Primary action</Text>
</Box>

// ❌ PROHIBITED: Generic tokens (typography, neutral)
<Text className="text-typography-900">Heading</Text>
<Box className="bg-neutral-100">
  <Text className="text-neutral-600">Description</Text>
</Box>

// ❌ PROHIBITED: Gray/Slate color scales
<Text className="text-gray-700">Content</Text>
<Box className="bg-slate-100 border-gray-300">
  <Text className="text-gray-900">Text</Text>
</Box>

// ❌ PROHIBITED: Opacity utilities instead of alpha
<Text className="text-black opacity-70">Muted text</Text>
<Box className="bg-blue-600 bg-opacity-90">Content</Box>
```

## Rule 3: No Inline Styles

Avoid inline `style` props when className can achieve the same result.

### Resolution Hierarchy (in order of preference)

1. **className utilities** - Use existing Tailwind/NativeWind classes
2. **Gluestack component variants** - Use built-in component variants
3. **tva (Tailwind Variant Authority)** - Create reusable variant patterns
4. **NativeWind interop** - Enable className on third-party components
5. **Inline styles** - Only as absolute last resort with documented justification

### Correct Pattern

```tsx
<Box className="w-20 h-20 rounded-full bg-background" />

<Text size="lg" bold className="text-foreground" />

<Button variant="outline" size="lg">
  <ButtonText>Click Me</ButtonText>
</Button>
```

### Incorrect Pattern

```tsx
<Box
  style={{
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  }}
/>

<Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }} />
```

### Acceptable Exceptions

Inline styles are acceptable for:

1. **Dynamic values** - Values computed at runtime (e.g., animation values, safe area insets)
2. **Third-party component requirements** - Components that don't support className
3. **Platform-specific overrides** - When Platform.select is needed

```tsx
// Acceptable: dynamic value from hook
<Box style={{ paddingBottom: bottomInset }} />

// Acceptable: animation value
<Animated.View style={{ transform: [{ translateX: animatedValue }] }} />

// Acceptable: platform-specific
<Box style={Platform.select({ ios: { paddingTop: 20 }, android: {} })} />
```

## Rule 4: Spacing Scale Adherence

Use only values from the standard spacing scale. Arbitrary values create maintenance burden.

### Allowed Spacing Values

| Class | Size  |
| ----- | ----- |
| 0     | 0px   |
| 0.5   | 2px   |
| 1     | 4px   |
| 1.5   | 6px   |
| 2     | 8px   |
| 2.5   | 10px  |
| 3     | 12px  |
| 3.5   | 14px  |
| 4     | 16px  |
| 5     | 20px  |
| 6     | 24px  |
| 7     | 28px  |
| 8     | 32px  |
| 9     | 36px  |
| 10    | 40px  |
| 11    | 44px  |
| 12    | 48px  |
| 14    | 56px  |
| 16    | 64px  |
| 20    | 80px  |
| 24    | 96px  |
| 28    | 112px |
| 32    | 128px |
| 36    | 144px |
| 40    | 160px |
| 44    | 176px |
| 48    | 192px |
| 52    | 208px |
| 56    | 224px |
| 60    | 240px |
| 64    | 256px |
| 72    | 288px |
| 80    | 320px |
| 96    | 384px |

### Prohibited Patterns

- Arbitrary values: `p-[13px]`, `m-[27px]`, `gap-[15px]`
- Non-scale decimals: `p-2.7`, `m-4.3`

### Correct Pattern

```tsx
<Box className="p-4 m-2 gap-3" />
<Box className="px-6 py-4 mt-8" />
```

### Incorrect Pattern

```tsx
<Box className="p-[13px] m-[27px]" />
<Box style={{ padding: 13, margin: 27 }} />
```

## Rule 5: Dark Mode Using CSS Variables

Use the `dark:` prefix for dark mode support. Gluestack v4 uses CSS variables that automatically adapt to light/dark themes.

### Correct Pattern

```tsx
<Box className="bg-background dark:bg-background" />
<Text className="text-foreground dark:text-foreground" />

<Box className="border border-border dark:border-border" />
```

### Component-Level Dark Mode

```tsx
const CardView = ({ isDark }: { readonly isDark: boolean }) => (
  <Box className={isDark ? "bg-card" : "bg-background"}>
    <Text className={isDark ? "text-card-foreground" : "text-foreground"}>
      Content
    </Text>
  </Box>
);
```

### Using Data Attributes for States

Gluestack components use data attributes for interactive states. These are automatically applied by the components based on user interaction:

| State Prop     | Data Attribute       | Usage in className                       |
| -------------- | -------------------- | ---------------------------------------- |
| `hover`        | `data-hover`         | `data-[hover=true]:bg-primary/90`        |
| `active`       | `data-active`        | `data-[active=true]:bg-primary/80`       |
| `disabled`     | `data-disabled`      | `data-[disabled=true]:opacity-50`        |
| `focusVisible` | `data-focus-visible` | `data-[focus-visible=true]:ring-2`       |
| `focus`        | `data-focus`         | `data-[focus=true]:border-ring`          |
| `invalid`      | `data-invalid`       | `data-[invalid=true]:border-destructive` |
| `checked`      | `data-checked`       | `data-[checked=true]:bg-primary`         |

```tsx
// Correct: Using data attributes for states in tva
const buttonStyle = tva({
  base: 'rounded-md',
  variants: {
    variant: {
      default: 'bg-primary data-[hover=true]:bg-primary/90 data-[active=true]:bg-primary/80',
      destructive: 'bg-destructive data-[hover=true]:bg-destructive/90',
    },
  },
});

// Correct: Data attributes work automatically with component props
<Button disabled={isLoading}>
  <ButtonText>Submit</ButtonText>
</Button>

<Input isInvalid={hasError}>
  <InputField placeholder="Email" />
</Input>
```

## Rule 7: Variant-Based Styling with tva

For components with multiple style variants, use `tva` (Tailwind Variant Authority).

### Correct Pattern

```tsx
import { tva } from "@gluestack-ui/utils/nativewind-utils";

const cardStyles = tva({
  base: "rounded-lg p-4",
  variants: {
    variant: {
      default: "bg-card border border-border shadow-sm",
      elevated: "bg-card shadow-hard-2",
      outlined: "bg-transparent border border-border",
      filled: "bg-muted",
    },
    size: {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const Card = ({ variant, size, className }: CardProps) => (
  <Box className={cardStyles({ variant, size, class: className })} />
);
```

### Using Parent Variants

For sub-components that inherit parent styles:

```tsx
const buttonTextStyle = tva({
  base: "font-sans",
  parentVariants: {
    variant: {
      default: "text-primary-foreground",
      destructive: "text-white",
      outline: "text-foreground",
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
});
```

## Rule 8: className Merging for Custom Components

Allow className override in custom components using the `class` parameter in tva.

### Correct Pattern

```tsx
interface BoxCardProps {
  readonly className?: string;
  readonly children: React.ReactNode;
}

const BoxCard = ({ className, children }: BoxCardProps) => {
  const cardStyles = tva({
    base: "rounded-lg bg-card p-4",
  });

  return <Box className={cardStyles({ class: className })}>{children}</Box>;
};
```

### Using withStyleContext for Parent-Child Communication

For components that need to share context with children:

```tsx
import {
  withStyleContext,
  useStyleContext,
} from "@gluestack-ui/utils/nativewind-utils";

const SCOPE = "CUSTOM_COMPONENT";
const Root = withStyleContext(View, SCOPE);

const Parent = ({ variant, children }) => (
  <Root context={{ variant }} className={parentStyles({ variant })}>
    {children}
  </Root>
);

const Child = () => {
  const { variant } = useStyleContext(SCOPE);
  return <Box className={childStyles({ parentVariants: { variant } })} />;
};
```

## Layout Components Pattern

```tsx
// ✅ CORRECT: Using space prop instead of gap className
<VStack space="lg" className="p-4">
  <HStack space="md" className="items-center justify-between">
    <Heading size="xl">Title</Heading>
    <Button variant="default" size="sm">
      <ButtonText>Action</ButtonText>
    </Button>
  </HStack>
  <Box className="bg-card rounded-lg p-4">
    <Text size="md">Content</Text>
  </Box>
</VStack>
```

## Anti-Patterns to Avoid

### ❌ Don't: Use Generic or Non-Semantic Tokens

**STRICTLY PROHIBITED** - These token patterns are never allowed:

```tsx
// ❌ PROHIBITED: Generic typography tokens
<Text className="text-typography-900">Heading</Text>
<Text className="text-typography-700">Body</Text>
<Text className="text-typography-500">Muted</Text>

// ✅ CORRECT: Semantic tokens
<Text className="text-foreground">Heading</Text>
<Text className="text-foreground">Body</Text>
<Text className="text-muted-foreground">Muted</Text>

// ❌ PROHIBITED: Neutral color tokens
<Box className="bg-neutral-100" />
<Text className="text-neutral-600" />
<Box className="border-neutral-300" />

// ✅ CORRECT: Semantic tokens
<Box className="bg-muted" />
<Text className="text-muted-foreground" />
<Box className="border-border" />

// ❌ PROHIBITED: Gray/Slate color scales
<Box className="bg-gray-50" />
<Text className="text-gray-900" />
<Box className="border-gray-200" />
<Text className="text-slate-700" />

// ✅ CORRECT: Semantic tokens
<Box className="bg-background" />
<Text className="text-foreground" />
<Box className="border-border" />
<Text className="text-foreground" />

// ❌ PROHIBITED: Numbered color tokens
<Box className="bg-blue-600" />
<Text className="text-red-500" />
<Box className="border-green-400" />

// ✅ CORRECT: Semantic tokens
<Box className="bg-primary" />
<Text className="text-destructive" />
<Box className="border-primary" />
```

### ❌ Don't: Use Raw Color Values

```tsx
// ❌ PROHIBITED: Arbitrary hex values
<Box className="bg-[#3b82f6]" />
<Text className="text-[#DC2626]" />
<Box style={{ backgroundColor: '#f3f4f6' }} />

// ✅ CORRECT: Semantic tokens
<Box className="bg-primary" />
<Text className="text-destructive" />
<Box className="bg-muted" />

// ❌ PROHIBITED: Named colors
<Text style={{ color: 'red' }} />
<Box style={{ backgroundColor: 'white' }} />

// ✅ CORRECT: Semantic tokens
<Text className="text-destructive" />
<Box className="bg-background" />
```

### ❌ Don't: Use Inline Styles When className Works

```tsx
// ❌ Incorrect
<Box style={{ padding: 16, backgroundColor: '#fff' }} />

// ✅ Correct
<Box className="p-4 bg-background" />
```

### ❌ Don't: Use Arbitrary Spacing Values

```tsx
// ❌ Incorrect
<Box className="p-[13px] m-[27px]" />

// ✅ Correct
<Box className="p-3 m-6" />
```

## Common Styling Patterns

### Card with Semantic Tokens

```tsx
<Box className="bg-card rounded-lg border border-border p-4 shadow-sm">
  <Heading size="lg" className="text-card-foreground">
    Title
  </Heading>
  <Text size="sm" className="text-muted-foreground">
    Description
  </Text>
</Box>
```

### Button Variants with tva

```tsx
const buttonStyles = tva({
  base: "rounded-md px-4 py-2",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      destructive: "bg-destructive text-white",
      outline: "border border-border bg-transparent text-foreground",
      ghost: "bg-transparent text-foreground",
    },
  },
});

<Button className={buttonStyles({ variant: "outline" })}>
  <ButtonText>Click Me</ButtonText>
</Button>
```

### Dark Mode Support

```tsx
<Box className="bg-background dark:bg-background">
  <Text className="text-foreground dark:text-foreground">
    Adaptive content
  </Text>
  <Box className="border border-border dark:border-border">
    <Text className="text-muted-foreground dark:text-muted-foreground">
      Muted text
    </Text>
  </Box>
</Box>
```

## Token Usage Validation

### How to Validate Token Usage

Before committing any code, verify that you're using ONLY semantic tokens:

**✅ ALLOWED Token Patterns:**
- `text-foreground`, `text-muted-foreground`, `text-card-foreground`
- `text-primary`, `text-primary-foreground`
- `text-secondary`, `text-secondary-foreground`
- `text-destructive`, `text-accent`, `text-accent-foreground`
- `bg-background`, `bg-card`, `bg-muted`, `bg-popover`
- `bg-primary`, `bg-secondary`, `bg-destructive`, `bg-accent`
- `border-border`, `border-input`, `ring-ring`
- Alpha values: `text-foreground/70`, `bg-primary/90`, `border-border/50`

**❌ PROHIBITED Token Patterns:**
- ❌ `typography-*` (typography-900, typography-700, etc.)
- ❌ `neutral-*` (neutral-100, neutral-600, etc.)
- ❌ `gray-*` (gray-50, gray-900, etc.)
- ❌ `slate-*` (slate-700, slate-200, etc.)
- ❌ Numbered colors: `red-500`, `blue-600`, `green-400`
- ❌ Arbitrary values: `[#3b82f6]`, `[#DC2626]`
- ❌ Named colors: `'red'`, `'white'`, `'black'`
- ❌ Opacity utilities: `opacity-70`, `bg-opacity-90`

### Token Validation Checklist

Before submitting code, verify:

- [ ] **No `typography-*` tokens** - Replace with `text-foreground` or `text-muted-foreground`
- [ ] **No `neutral-*` tokens** - Replace with semantic equivalents
- [ ] **No `gray-*` or `slate-*` tokens** - Replace with semantic equivalents
- [ ] **No numbered color tokens** - Replace with semantic tokens
- [ ] **No arbitrary color values** - Replace with semantic tokens
- [ ] **No inline style colors** - Use className with semantic tokens
- [ ] **No opacity utilities** - Use alpha values instead (`/70`, `/90`)
- [ ] **All colors are semantic** - Every color token expresses intent
- [ ] **Dark mode compatible** - Semantic tokens work in both themes
- [ ] **Reviewed token table** - Verified against available semantic tokens list

### Common Token Violations and Fixes

```tsx
// ❌ VIOLATION: typography tokens
<Text className="text-typography-900">Title</Text>
<Text className="text-typography-600">Description</Text>

// ✅ FIX: Use semantic tokens
<Text className="text-foreground">Title</Text>
<Text className="text-muted-foreground">Description</Text>

// ❌ VIOLATION: neutral tokens
<Box className="bg-neutral-50 border-neutral-200">
  <Text className="text-neutral-700">Content</Text>
</Box>

// ✅ FIX: Use semantic tokens
<Box className="bg-background border-border">
  <Text className="text-foreground">Content</Text>
</Box>

// ❌ VIOLATION: gray scale tokens
<Box className="bg-gray-100">
  <Text className="text-gray-900">Heading</Text>
  <Text className="text-gray-500">Subtitle</Text>
</Box>

// ✅ FIX: Use semantic tokens
<Box className="bg-muted">
  <Text className="text-foreground">Heading</Text>
  <Text className="text-muted-foreground">Subtitle</Text>
</Box>

// ❌ VIOLATION: Numbered colors with opacity
<Text className="text-blue-600 opacity-70">Link</Text>
<Box className="bg-red-500 bg-opacity-10">Alert</Box>

// ✅ FIX: Use semantic tokens with alpha
<Text className="text-primary/70">Link</Text>
<Box className="bg-destructive/10">Alert</Box>
```

## Escalation Guidance

When a design request cannot be satisfied with existing patterns:

1. **Push back early** - Explain performance and maintenance implications
2. **Propose alternatives** - Map to existing tokens or suggest new semantic tokens
3. **Add to design system** - If truly needed, add token to `gluestack-ui-provider/config.ts`
4. **Document exception** - If inline style is unavoidable, add JSDoc explaining why

## Reference

- **Theme Configuration**: `@/components/ui/gluestack-ui-provider/config.ts`
- **Tailwind Config**: `./tailwind.config.js`
- **Documentation**: https://v4.gluestack.io/ui/docs

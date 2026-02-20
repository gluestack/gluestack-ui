---
name: gluestack-ui-v4:variants
description: Guide for creating custom variants for gluestack-ui v4 components - covers tva usage, extending components, variant patterns, and customization strategies.
---

# Gluestack UI v4 - Creating Component Variants

This sub-skill focuses on creating custom variants for existing gluestack-ui v4 components, allowing you to extend the design system with project-specific styling patterns while maintaining consistency and type safety.

## When to Create a Variant

Create a new variant when:

1. **Repeating the same style combination** - Multiple places use the same className pattern
2. **Project-specific design patterns** - Brand-specific button styles, card types, etc.
3. **Conditional styling** - Component appearance changes based on props
4. **Extending existing components** - Adding new visual styles to Gluestack components
5. **Theme-specific variations** - Different appearances for specific contexts

**Don't create variants for:**
- One-off custom styles (use className instead)
- Simple modifications (use existing props + className)
- Styles that should be in the global design system

## Variant Creation Workflow

### Step 1: Analyze the Component

Before creating a variant, understand:

1. **What's the base component?** - Button, Card, Badge, etc.
2. **What visual states are needed?** - Colors, sizes, borders, shadows
3. **Are there sub-components?** - ButtonText, CardHeader, etc.
4. **What props should control variants?** - variant, size, state props
5. **Should variants affect children?** - Parent variants for sub-components

### Step 2: Plan Variant Structure

Define your variant system:

```tsx
// Example: Planning a Badge component with variants
{
  variant: ['default', 'success', 'warning', 'error', 'info']
  size: ['sm', 'md', 'lg']
  shape: ['rounded', 'pill', 'square']
}
```

### Step 3: Implement with tva

Use `tva` (Tailwind Variant Authority) to create type-safe, composable variants.

## Creating Simple Variants

### Template: Adding Variants to a Custom Component

```tsx
import React from 'react';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

interface BadgeProps {
  readonly variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  readonly size?: 'sm' | 'md' | 'lg';
  readonly shape?: 'rounded' | 'pill' | 'square';
  readonly className?: string;
  readonly children: React.ReactNode;
}

// Define variant styles
const badgeStyles = tva({
  base: 'inline-flex items-center justify-center font-medium',
  variants: {
    variant: {
      default: 'bg-muted text-muted-foreground',
      success: 'bg-primary/10 text-primary border border-primary/20',
      warning: 'bg-accent/10 text-accent-foreground border border-accent/20',
      error: 'bg-destructive/10 text-destructive border border-destructive/20',
      info: 'bg-secondary/10 text-secondary-foreground border border-secondary/20',
    },
    size: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    },
    shape: {
      rounded: 'rounded-md',
      pill: 'rounded-full',
      square: 'rounded-none',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    shape: 'rounded',
  },
});

export const Badge = ({
  variant,
  size,
  shape,
  className,
  children
}: BadgeProps) => {
  return (
    <Box className={badgeStyles({ variant, size, shape, class: className })}>
      <Text>{children}</Text>
    </Box>
  );
};

// Usage:
// <Badge variant="success" size="lg" shape="pill">Active</Badge>
// <Badge variant="error" size="sm">Error</Badge>
```

**Key Points:**
- ✅ Uses `tva` for variant management
- ✅ Base styles apply to all variants
- ✅ Multiple variant dimensions (variant, size, shape)
- ✅ Default variants specified
- ✅ className override support with `class` parameter
- ✅ TypeScript types for variant options

## Extending Existing Gluestack Components

### Template: Adding Custom Variants to Button

```tsx
import React from 'react';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { Button as GluestackButton, ButtonText } from '@/components/ui/button';

// Define additional variant styles
const customButtonStyles = tva({
  base: '',
  variants: {
    variant: {
      // Extend existing variants with new ones
      gradient: 'bg-gradient-to-r from-primary to-accent',
      glass: 'bg-background/20 backdrop-blur-lg border border-border/50',
      neon: 'bg-transparent border-2 border-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]',
    },
    size: {
      // Add custom sizes
      xs: 'px-2 py-1',
      xl: 'px-8 py-4',
    },
  },
});

interface CustomButtonProps {
  readonly variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gradient' | 'glass' | 'neon';
  readonly size?: 'default' | 'sm' | 'lg' | 'icon' | 'xs' | 'xl';
  readonly className?: string;
  readonly onPress?: () => void;
  readonly isDisabled?: boolean;
  readonly children: React.ReactNode;
}

export const CustomButton = ({
  variant = 'default',
  size = 'default',
  className,
  onPress,
  isDisabled,
  children,
}: CustomButtonProps) => {
  // Use Gluestack Button for built-in variants
  if (['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'].includes(variant)) {
    return (
      <GluestackButton
        variant={variant as any}
        size={['default', 'sm', 'lg', 'icon'].includes(size) ? size as any : 'default'}
        onPress={onPress}
        isDisabled={isDisabled}
        className={className}
      >
        {children}
      </GluestackButton>
    );
  }

  // Use custom variants
  return (
    <GluestackButton
      onPress={onPress}
      isDisabled={isDisabled}
      className={customButtonStyles({ variant: variant as any, size: size as any, class: className })}
    >
      {children}
    </GluestackButton>
  );
};

// Usage:
// <CustomButton variant="gradient" size="xl">
//   <ButtonText>Gradient Button</ButtonText>
// </CustomButton>
//
// <CustomButton variant="neon" size="lg">
//   <ButtonText>Neon Button</ButtonText>
// </CustomButton>
```

**Key Points:**
- ✅ Extends existing component
- ✅ Preserves original variants
- ✅ Adds new custom variants
- ✅ Maintains compound component pattern
- ✅ Type-safe variant options

## Parent-Child Variant Relationships

When creating components with sub-components, use `parentVariants` to style children based on parent state.

### Template: Card with Variant-Aware Children

```tsx
import React from 'react';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

interface CardProps {
  readonly variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
  readonly colorScheme?: 'neutral' | 'primary' | 'success' | 'error';
  readonly className?: string;
  readonly children: React.ReactNode;
}

interface CardHeaderProps {
  readonly className?: string;
  readonly children: React.ReactNode;
}

interface CardBodyProps {
  readonly className?: string;
  readonly children: React.ReactNode;
}

// Parent card styles
const cardStyles = tva({
  base: 'rounded-lg overflow-hidden',
  variants: {
    variant: {
      default: 'border border-border bg-card',
      elevated: 'shadow-hard-2 bg-card',
      outlined: 'border-2 border-border bg-transparent',
      ghost: 'bg-transparent',
    },
    colorScheme: {
      neutral: '',
      primary: 'border-primary/20',
      success: 'border-primary/20',
      error: 'border-destructive/20',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      colorScheme: 'primary',
      class: 'bg-primary/5',
    },
    {
      variant: 'default',
      colorScheme: 'success',
      class: 'bg-primary/5',
    },
    {
      variant: 'default',
      colorScheme: 'error',
      class: 'bg-destructive/5',
    },
  ],
  defaultVariants: {
    variant: 'default',
    colorScheme: 'neutral',
  },
});

// Child styles that respond to parent variants
const cardHeaderStyles = tva({
  base: 'p-4 border-b',
  parentVariants: {
    variant: {
      default: 'border-border',
      elevated: 'border-border/50',
      outlined: 'border-border',
      ghost: 'border-transparent',
    },
    colorScheme: {
      neutral: '',
      primary: 'border-primary/20 bg-primary/5',
      success: 'border-primary/20 bg-primary/5',
      error: 'border-destructive/20 bg-destructive/5',
    },
  },
});

const cardBodyStyles = tva({
  base: 'p-4',
  parentVariants: {
    colorScheme: {
      neutral: '',
      primary: '',
      success: '',
      error: '',
    },
  },
});

// Context to share variant state with children
const CardContext = React.createContext<Pick<CardProps, 'variant' | 'colorScheme'>>({
  variant: 'default',
  colorScheme: 'neutral',
});

export const Card = ({
  variant = 'default',
  colorScheme = 'neutral',
  className,
  children
}: CardProps) => {
  return (
    <CardContext.Provider value={{ variant, colorScheme }}>
      <Box className={cardStyles({ variant, colorScheme, class: className })}>
        {children}
      </Box>
    </CardContext.Provider>
  );
};

export const CardHeader = ({ className, children }: CardHeaderProps) => {
  const { variant, colorScheme } = React.useContext(CardContext);
  return (
    <Box className={cardHeaderStyles({ parentVariants: { variant, colorScheme }, class: className })}>
      {children}
    </Box>
  );
};

export const CardBody = ({ className, children }: CardBodyProps) => {
  const { variant, colorScheme } = React.useContext(CardContext);
  return (
    <Box className={cardBodyStyles({ parentVariants: { colorScheme }, class: className })}>
      {children}
    </Box>
  );
};

// Usage:
// <Card variant="elevated" colorScheme="primary">
//   <CardHeader>
//     <Heading size="lg">Success Card</Heading>
//   </CardHeader>
//   <CardBody>
//     <Text>This card responds to parent variants</Text>
//   </CardBody>
// </Card>
```

**Key Points:**
- ✅ Parent context shares variant state
- ✅ Children use `parentVariants` to style based on parent
- ✅ Compound variants for complex combinations
- ✅ Type-safe context usage
- ✅ Flexible composition

## Compound Variants

Use compound variants when combinations of variant options need special styling.

### Template: Button with Compound Variants

```tsx
import React from 'react';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { Loader2Icon } from '@/components/ui/icon';

interface ActionButtonProps {
  readonly variant?: 'solid' | 'outline' | 'ghost';
  readonly colorScheme?: 'primary' | 'secondary' | 'destructive';
  readonly size?: 'sm' | 'md' | 'lg';
  readonly isLoading?: boolean;
  readonly isDisabled?: boolean;
  readonly className?: string;
  readonly onPress?: () => void;
  readonly children: React.ReactNode;
}

const actionButtonStyles = tva({
  base: 'rounded-md font-medium transition-colors',
  variants: {
    variant: {
      solid: '',
      outline: 'border-2 bg-transparent',
      ghost: 'bg-transparent',
    },
    colorScheme: {
      primary: '',
      secondary: '',
      destructive: '',
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
  compoundVariants: [
    // Solid + Primary
    {
      variant: 'solid',
      colorScheme: 'primary',
      class: 'bg-primary text-primary-foreground data-[hover=true]:bg-primary/90',
    },
    // Solid + Destructive
    {
      variant: 'solid',
      colorScheme: 'destructive',
      class: 'bg-destructive text-white data-[hover=true]:bg-destructive/90',
    },
    // Outline + Primary
    {
      variant: 'outline',
      colorScheme: 'primary',
      class: 'border-primary text-primary data-[hover=true]:bg-primary/10',
    },
    // Outline + Destructive
    {
      variant: 'outline',
      colorScheme: 'destructive',
      class: 'border-destructive text-destructive data-[hover=true]:bg-destructive/10',
    },
    // Ghost + Primary
    {
      variant: 'ghost',
      colorScheme: 'primary',
      class: 'text-primary data-[hover=true]:bg-primary/10',
    },
    // Ghost + Destructive
    {
      variant: 'ghost',
      colorScheme: 'destructive',
      class: 'text-destructive data-[hover=true]:bg-destructive/10',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
  },
});

export const ActionButton = ({
  variant,
  colorScheme,
  size,
  isLoading = false,
  isDisabled = false,
  className,
  onPress,
  children,
}: ActionButtonProps) => {
  return (
    <Button
      onPress={onPress}
      isDisabled={isDisabled || isLoading}
      className={actionButtonStyles({ variant, colorScheme, size, class: className })}
    >
      {isLoading && <ButtonIcon as={Loader2Icon} className="animate-spin" />}
      {children}
    </Button>
  );
};

// Usage:
// <ActionButton variant="solid" colorScheme="primary" size="lg">
//   <ButtonText>Primary Action</ButtonText>
// </ActionButton>
//
// <ActionButton variant="outline" colorScheme="destructive" isLoading>
//   <ButtonText>Delete</ButtonText>
// </ActionButton>
```

**Key Points:**
- ✅ Compound variants handle specific combinations
- ✅ Base variants provide defaults
- ✅ Hover states with data attributes
- ✅ Loading state integration
- ✅ Flexible variant combinations

## Common Variant Patterns

### Pattern 1: Status Badges

```tsx
const statusBadgeStyles = tva({
  base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
  variants: {
    status: {
      active: 'bg-primary/10 text-primary',
      inactive: 'bg-muted text-muted-foreground',
      pending: 'bg-accent/10 text-accent-foreground',
      completed: 'bg-primary/10 text-primary',
      failed: 'bg-destructive/10 text-destructive',
    },
  },
  defaultVariants: {
    status: 'inactive',
  },
});

// Usage:
// <Box className={statusBadgeStyles({ status: 'active' })}>
//   <Text>Active</Text>
// </Box>
```

### Pattern 2: Alert Variants

```tsx
const alertStyles = tva({
  base: 'rounded-lg border p-4',
  variants: {
    severity: {
      info: 'bg-secondary/10 border-secondary/20 text-secondary-foreground',
      success: 'bg-primary/10 border-primary/20 text-primary',
      warning: 'bg-accent/10 border-accent/20 text-accent-foreground',
      error: 'bg-destructive/10 border-destructive/20 text-destructive',
    },
  },
  defaultVariants: {
    severity: 'info',
  },
});

// Usage:
// <Box className={alertStyles({ severity: 'error' })}>
//   <Text>Error message</Text>
// </Box>
```

### Pattern 3: Interactive Card States

```tsx
const interactiveCardStyles = tva({
  base: 'rounded-lg border border-border p-4 transition-all cursor-pointer',
  variants: {
    state: {
      default: 'bg-card data-[hover=true]:bg-muted/50',
      selected: 'bg-primary/10 border-primary',
      disabled: 'bg-muted opacity-60 cursor-not-allowed',
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

// Usage:
// <Pressable>
//   <Box className={interactiveCardStyles({ state: 'selected' })}>
//     <Text>Selected Card</Text>
//   </Box>
// </Pressable>
```

### Pattern 4: Size Variants with Consistent Ratios

```tsx
const avatarStyles = tva({
  base: 'rounded-full overflow-hidden',
  variants: {
    size: {
      xs: 'w-6 h-6',
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
      xl: 'w-20 h-20',
      '2xl': 'w-24 h-24',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// Usage:
// <Image className={avatarStyles({ size: 'lg' })} source={{ uri: avatarUrl }} />
```

## Best Practices for Variants

### ✅ Do's

1. **Use semantic variant names**
   ```tsx
   // ✅ GOOD: Semantic names
   variant: 'primary' | 'secondary' | 'destructive'

   // ❌ BAD: Generic names
   variant: 'blue' | 'red' | 'green'
   ```

2. **Provide default variants**
   ```tsx
   // ✅ GOOD: Always specify defaults
   defaultVariants: {
     variant: 'default',
     size: 'md',
   }
   ```

3. **Use compound variants for combinations**
   ```tsx
   // ✅ GOOD: Handle specific combinations
   compoundVariants: [
     {
       variant: 'outline',
       colorScheme: 'primary',
       class: 'border-primary text-primary',
     },
   ]
   ```

4. **Keep variant dimensions focused**
   ```tsx
   // ✅ GOOD: Clear separation
   variants: {
     variant: { ... },  // Visual style
     size: { ... },     // Size
     state: { ... },    // Interactive state
   }
   ```

5. **Use ONLY semantic tokens in variant styles - NO EXCEPTIONS**
   ```tsx
   // ✅ CORRECT: Semantic tokens with alpha values
   success: 'bg-primary/10 text-primary border-primary/20'
   error: 'bg-destructive/10 text-destructive border-destructive/20'
   muted: 'bg-muted text-muted-foreground border-border'

   // ❌ PROHIBITED: Numbered color tokens
   success: 'bg-green-100 text-green-800 border-green-200'
   error: 'bg-red-100 text-red-800 border-red-200'

   // ❌ PROHIBITED: Generic tokens
   muted: 'bg-neutral-100 text-neutral-600 border-neutral-300'
   muted: 'bg-gray-100 text-gray-600 border-gray-300'

   // ❌ PROHIBITED: Typography tokens
   text: 'text-typography-900'
   ```

### ❌ Don'ts

1. **Don't create too many variant dimensions**
   ```tsx
   // ❌ BAD: Too many dimensions
   variants: {
     variant: { ... },
     size: { ... },
     color: { ... },
     border: { ... },
     shadow: { ... },
     rounded: { ... },
   }

   // ✅ GOOD: Focused dimensions
   variants: {
     variant: { ... },
     size: { ... },
   }
   ```

2. **Don't mix concerns in variant names**
   ```tsx
   // ❌ BAD: Mixing visual and semantic
   variant: 'primary' | 'large-primary' | 'small-secondary'

   // ✅ GOOD: Separate dimensions
   variant: 'primary' | 'secondary'
   size: 'sm' | 'md' | 'lg'
   ```

3. **Don't duplicate existing component props**
   ```tsx
   // ❌ BAD: Duplicating Button's variant prop
   const CustomButton = ({ variant, ... }: { variant: 'new1' | 'new2' })

   // ✅ GOOD: Extend existing variants
   const CustomButton = ({ variant, ... }: {
     variant: 'default' | 'outline' | 'new1' | 'new2'
   })
   ```

## CRITICAL: Semantic Tokens in Variants

**ALL variant styles MUST use ONLY semantic tokens. This is NON-NEGOTIABLE.**

### Correct Variant Token Usage

```tsx
// ✅ CORRECT: All colors are semantic tokens
const badgeStyles = tva({
  base: 'inline-flex items-center rounded-full px-3 py-1',
  variants: {
    variant: {
      default: 'bg-muted text-muted-foreground',
      primary: 'bg-primary/10 text-primary border border-primary/20',
      success: 'bg-primary/10 text-primary border border-primary/20',
      error: 'bg-destructive/10 text-destructive border border-destructive/20',
      warning: 'bg-accent/10 text-accent-foreground border border-accent/20',
    },
  },
});
```

### Prohibited Variant Token Usage

```tsx
// ❌ PROHIBITED: Using numbered color tokens
const badgeStyles = tva({
  variants: {
    variant: {
      success: 'bg-green-100 text-green-800 border-green-200', // ❌ NO
      error: 'bg-red-100 text-red-800 border-red-200',         // ❌ NO
      warning: 'bg-yellow-100 text-yellow-800',                // ❌ NO
    },
  },
});

// ❌ PROHIBITED: Using generic tokens
const badgeStyles = tva({
  variants: {
    variant: {
      default: 'bg-neutral-100 text-neutral-700',              // ❌ NO
      muted: 'bg-gray-100 text-gray-600',                      // ❌ NO
    },
  },
});

// ❌ PROHIBITED: Using typography tokens
const textStyles = tva({
  variants: {
    variant: {
      heading: 'text-typography-900',                          // ❌ NO
      body: 'text-typography-700',                             // ❌ NO
    },
  },
});
```

### Token Replacement Guide for Variants

| Prohibited Pattern | Use Instead |
| ------------------ | ----------- |
| `bg-green-100 text-green-800` | `bg-primary/10 text-primary` |
| `bg-red-100 text-red-800` | `bg-destructive/10 text-destructive` |
| `bg-yellow-100 text-yellow-800` | `bg-accent/10 text-accent-foreground` |
| `bg-blue-100 text-blue-800` | `bg-primary/10 text-primary` |
| `bg-neutral-100 text-neutral-700` | `bg-muted text-muted-foreground` |
| `bg-gray-100 text-gray-900` | `bg-muted text-foreground` |
| `text-typography-900` | `text-foreground` |
| `text-typography-600` | `text-muted-foreground` |
| `border-gray-300` | `border-border` |

## Validation Checklist for Variants

When creating variants, verify:

- [ ] **CRITICAL: NO prohibited tokens** - No `typography-*`, `neutral-*`, `gray-*`, `slate-*`, numbered colors
- [ ] **All colors are semantic tokens** - Every color uses semantic tokens from the approved list
- [ ] **Alpha values instead of opacity** - Uses `/70`, `/90` instead of `opacity-*` utilities
- [ ] Variant names are semantic (not color names)
- [ ] Default variants specified
- [ ] Spacing uses scale values (no arbitrary values)
- [ ] TypeScript types match variant options
- [ ] className override supported with `class` parameter
- [ ] Parent variants used for child components (if applicable)
- [ ] Compound variants for complex combinations (if needed)
- [ ] Data attributes for interactive states
- [ ] Tested with dark mode (semantic tokens ensure compatibility)
- [ ] Documentation/comments for non-obvious variants

## Recipe: Converting Repeated Styles to Variants

### Before: Repeated className Patterns

```tsx
// ❌ Repeated patterns across codebase
<Box className="bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
  <Text className="text-xs text-primary font-semibold">Active</Text>
</Box>

<Box className="bg-destructive/10 border border-destructive/20 rounded-full px-3 py-1">
  <Text className="text-xs text-destructive font-semibold">Error</Text>
</Box>

<Box className="bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
  <Text className="text-xs text-accent-foreground font-semibold">Pending</Text>
</Box>
```

### After: Variant-Based Component

```tsx
// ✅ GOOD: Single component with variants
const StatusPill = ({ status, children }: StatusPillProps) => {
  const pillStyles = tva({
    base: 'inline-flex items-center rounded-full px-3 py-1',
    variants: {
      status: {
        active: 'bg-primary/10 border border-primary/20',
        error: 'bg-destructive/10 border border-destructive/20',
        pending: 'bg-accent/10 border border-accent/20',
      },
    },
  });

  const textStyles = tva({
    base: 'text-xs font-semibold',
    parentVariants: {
      status: {
        active: 'text-primary',
        error: 'text-destructive',
        pending: 'text-accent-foreground',
      },
    },
  });

  return (
    <Box className={pillStyles({ status })}>
      <Text className={textStyles({ parentVariants: { status } })}>{children}</Text>
    </Box>
  );
};

// Usage:
<StatusPill status="active">Active</StatusPill>
<StatusPill status="error">Error</StatusPill>
<StatusPill status="pending">Pending</StatusPill>
```

## Troubleshooting

### Issue: Variants Not Applying

**Problem**: Variant classes not showing up

**Solution**:
1. Check Tailwind config includes tva patterns
2. Verify className merge order
3. Ensure no conflicting inline styles

### Issue: Parent Variants Not Working

**Problem**: Child components don't respond to parent variants

**Solution**:
1. Use context to share parent state
2. Pass parentVariants object correctly
3. Verify context provider wraps children

### Issue: Type Errors with Variants

**Problem**: TypeScript errors with variant options

**Solution**:
1. Define variant types in interface
2. Use literal types for variant values
3. Ensure defaultVariants match types

## Reference

- **tva Documentation**: https://www.tailwind-variants.org/
- **Gluestack v4 Docs**: https://v4.gluestack.io/ui/docs
- **Component Examples**: `https://v4.gluestack.io/ui/docs/components/${componentName}/`

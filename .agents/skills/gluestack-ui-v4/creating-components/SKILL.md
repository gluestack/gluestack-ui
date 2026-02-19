---
name: gluestack-ui-v4:creating-components
description: Step-by-step guide for creating components with gluestack-ui v4 - covers planning, structure, styling, TypeScript, and common component patterns.
---

# Gluestack UI v4 - Creating Components

This sub-skill provides practical guidance for creating new components using gluestack-ui v4, from planning to implementation.

## Component Creation Workflow

### Step 1: Plan Component Structure

Before writing code, answer these questions:

1. **What is the component's purpose?**
   - Form input, data display, navigation, layout, etc.

2. **Which Gluestack components do I need?**
   - Check official docs: `https://v4.gluestack.io/ui/docs/components/${componentName}/`
   - Use Gluestack wrappers, not React Native primitives

3. **Does it need compound components?**
   - Multiple related sub-components (Header, Body, Footer)
   - Icon + Text combinations
   - Label + Input patterns

4. **What props should it accept?**
   - Size variants: `sm`, `md`, `lg`
   - Visual variants: `default`, `outline`, `ghost`
   - State props: `isDisabled`, `isInvalid`, `isLoading`
   - Custom className for overrides

5. **Does it need variants?**
   - If yes, use `tva` (Tailwind Variant Authority)
   - Define base styles and variant options

### Step 2: Check Official Documentation

**ALWAYS** verify component usage before creating:

```bash
# Visit official docs for the component
https://v4.gluestack.io/ui/docs/components/${componentName}/
```

Check for:
- Latest API and props
- Required sub-components
- Usage examples
- Accessibility features

### Step 3: Create Component File

Follow this file structure:

```
components/
├── ui/                      # Gluestack UI components (copy-paste)
│   ├── box/
│   ├── button/
│   └── input/
└── custom/                  # Your custom components
    ├── profile-card/
    │   └── index.tsx
    └── login-form/
        └── index.tsx
```

## Component Templates

### Template 1: Simple Component (No Variants)

Use when component has consistent styling without variants.

```tsx
import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

interface ProfileCardProps {
  readonly name: string;
  readonly email: string;
  readonly className?: string;
}

export const ProfileCard = ({ name, email, className }: ProfileCardProps) => {
  return (
    <Box className={`bg-card rounded-lg border border-border p-4 ${className || ''}`}>
      <Heading size="lg" className="text-card-foreground">
        {name}
      </Heading>
      <Text size="sm" className="text-muted-foreground mt-1">
        {email}
      </Text>
    </Box>
  );
};
```

**Key points:**
- ✅ Uses Gluestack components (Box, Text, Heading)
- ✅ TypeScript interface with `readonly` props
- ✅ Semantic tokens (bg-card, text-card-foreground)
- ✅ Accepts className for customization
- ✅ Component props for sizing (Heading size)

### Template 2: Component with Variants (Using tva)

Use when component needs multiple visual styles or sizes.

```tsx
import React from 'react';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

interface AlertProps {
  readonly variant?: 'default' | 'success' | 'warning' | 'destructive';
  readonly size?: 'sm' | 'md' | 'lg';
  readonly className?: string;
  readonly children: React.ReactNode;
}

const alertStyles = tva({
  base: 'rounded-lg border p-4',
  variants: {
    variant: {
      default: 'bg-card border-border',
      success: 'bg-primary/10 border-primary',
      warning: 'bg-accent/10 border-accent',
      destructive: 'bg-destructive/10 border-destructive',
    },
    size: {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

const alertTextStyles = tva({
  base: 'font-sans',
  parentVariants: {
    variant: {
      default: 'text-foreground',
      success: 'text-primary',
      warning: 'text-accent-foreground',
      destructive: 'text-destructive',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
});

export const Alert = ({ variant, size, className, children }: AlertProps) => {
  return (
    <Box className={alertStyles({ variant, size, class: className })}>
      <Text className={alertTextStyles({ parentVariants: { variant, size } })}>
        {children}
      </Text>
    </Box>
  );
};
```

**Key points:**
- ✅ Uses tva for variant management
- ✅ Base styles + variant options
- ✅ Default variants specified
- ✅ Parent variants for child components
- ✅ className override support

### Template 3: Compound Component Pattern

Use when component has multiple related sub-components.

```tsx
import React from 'react';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';

// Main Card Component
interface CardProps {
  readonly className?: string;
  readonly children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <Box className={`bg-card rounded-lg border border-border shadow-sm ${className || ''}`}>
      {children}
    </Box>
  );
};

// Card Header Sub-component
interface CardHeaderProps {
  readonly className?: string;
  readonly children: React.ReactNode;
}

export const CardHeader = ({ className, children }: CardHeaderProps) => {
  return (
    <Box className={`p-4 border-b border-border ${className || ''}`}>
      {children}
    </Box>
  );
};

// Card Body Sub-component
interface CardBodyProps {
  readonly className?: string;
  readonly children: React.ReactNode;
}

export const CardBody = ({ className, children }: CardBodyProps) => {
  return (
    <Box className={`p-4 ${className || ''}`}>
      {children}
    </Box>
  );
};

// Card Footer Sub-component
interface CardFooterProps {
  readonly className?: string;
  readonly children: React.ReactNode;
}

export const CardFooter = ({ className, children }: CardFooterProps) => {
  return (
    <HStack space="md" className={`p-4 border-t border-border ${className || ''}`}>
      {children}
    </HStack>
  );
};

// Usage
// <Card>
//   <CardHeader>
//     <Heading size="lg">Title</Heading>
//   </CardHeader>
//   <CardBody>
//     <Text>Content</Text>
//   </CardBody>
//   <CardFooter>
//     <Button>Action</Button>
//   </CardFooter>
// </Card>
```

**Key points:**
- ✅ Main component + sub-components
- ✅ Each sub-component is independent
- ✅ Consistent styling across sub-components
- ✅ Flexible composition

### Template 4: Form Component

Use for form inputs with labels, validation, and error messages.

```tsx
import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control';
import { FormControlError, FormControlErrorIcon, FormControlErrorText } from '@/components/ui/form-control';
import { FormControlHelper, FormControlHelperText } from '@/components/ui/form-control';
import { Input, InputField, InputSlot, InputIcon } from '@/components/ui/input';
import { MailIcon, AlertCircleIcon } from '@/components/ui/icon';

interface EmailInputProps {
  readonly label?: string;
  readonly placeholder?: string;
  readonly helperText?: string;
  readonly value: string;
  readonly error?: string;
  readonly onChange: (value: string) => void;
  readonly className?: string;
}

export const EmailInput = ({
  label = 'Email Address',
  placeholder = 'Enter your email',
  helperText,
  value,
  error,
  onChange,
  className,
}: EmailInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FormControl isInvalid={!!error} className={className}>
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>

      <Input>
        <InputSlot>
          <InputIcon
            as={MailIcon}
            className={isFocused ? 'text-primary' : 'text-muted-foreground'}
          />
        </InputSlot>
        <InputField
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </Input>

      {error && (
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>{error}</FormControlErrorText>
        </FormControlError>
      )}

      {helperText && !error && (
        <FormControlHelper>
          <FormControlHelperText>{helperText}</FormControlHelperText>
        </FormControlHelper>
      )}
    </FormControl>
  );
};
```

**Key points:**
- ✅ FormControl wrapper for validation
- ✅ InputIcon wrapped in InputSlot (CRITICAL)
- ✅ Error and helper text handling
- ✅ Focus state management
- ✅ Proper keyboard type

### Template 5: Interactive Component with State

Use for components with internal state and interactions.

```tsx
import React, { useState } from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { ChevronDownIcon, ChevronUpIcon } from '@/components/ui/icon';
import { Icon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';

interface AccordionProps {
  readonly title: string;
  readonly children: React.ReactNode;
  readonly defaultExpanded?: boolean;
  readonly className?: string;
}

export const Accordion = ({
  title,
  children,
  defaultExpanded = false,
  className,
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Box className={`border border-border rounded-lg overflow-hidden ${className || ''}`}>
      <Pressable onPress={() => setIsExpanded(!isExpanded)}>
        <HStack
          space="md"
          className="p-4 bg-card items-center justify-between"
        >
          <Text size="md" bold className="text-card-foreground flex-1">
            {title}
          </Text>
          <Icon
            as={isExpanded ? ChevronUpIcon : ChevronDownIcon}
            size="md"
            className="text-muted-foreground"
          />
        </HStack>
      </Pressable>

      {isExpanded && (
        <Box className="p-4 bg-background border-t border-border">
          {children}
        </Box>
      )}
    </Box>
  );
};
```

**Key points:**
- ✅ Internal state management
- ✅ Conditional rendering
- ✅ Interactive elements (Pressable)
- ✅ Icon state changes
- ✅ Layout with space prop

### Template 6: Component with Loading State

Use for components that fetch data or perform async operations.

```tsx
import React from 'react';
import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';
import { CheckIcon } from '@/components/ui/icon';

interface SubmitButtonProps {
  readonly isLoading?: boolean;
  readonly isSuccess?: boolean;
  readonly onPress: () => void;
  readonly className?: string;
}

export const SubmitButton = ({
  isLoading = false,
  isSuccess = false,
  onPress,
  className,
}: SubmitButtonProps) => {
  return (
    <Button
      variant="default"
      size="lg"
      onPress={onPress}
      isDisabled={isLoading || isSuccess}
      className={className}
    >
      {isLoading && <ButtonSpinner />}
      {isSuccess && <ButtonIcon as={CheckIcon} />}
      <ButtonText>
        {isLoading ? 'Submitting...' : isSuccess ? 'Success!' : 'Submit'}
      </ButtonText>
    </Button>
  );
};
```

**Key points:**
- ✅ Loading state with ButtonSpinner
- ✅ Success state with icon
- ✅ Disabled during loading
- ✅ Dynamic text based on state

## Common Component Recipes

### Recipe 1: Profile Card with Avatar

```tsx
import React from 'react';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Image } from '@/components/ui/image';

interface ProfileCardProps {
  readonly name: string;
  readonly email: string;
  readonly avatarUrl: string;
  readonly bio?: string;
  readonly className?: string;
}

export const ProfileCard = ({
  name,
  email,
  avatarUrl,
  bio,
  className,
}: ProfileCardProps) => {
  return (
    <Box className={`bg-card rounded-lg border border-border p-4 ${className || ''}`}>
      <HStack space="lg" className="items-start">
        <Image
          source={{ uri: avatarUrl }}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full"
        />
        <VStack space="sm" className="flex-1">
          <Heading size="lg" className="text-card-foreground">
            {name}
          </Heading>
          <Text size="sm" className="text-muted-foreground">
            {email}
          </Text>
          {bio && (
            <Text size="sm" className="text-foreground mt-2">
              {bio}
            </Text>
          )}
        </VStack>
      </HStack>
    </Box>
  );
};
```

### Recipe 2: Status Badge

```tsx
import React from 'react';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

interface StatusBadgeProps {
  readonly status: 'active' | 'inactive' | 'pending' | 'error';
  readonly className?: string;
}

const badgeStyles = tva({
  base: 'rounded-full px-3 py-1 inline-flex',
  variants: {
    status: {
      active: 'bg-primary/10',
      inactive: 'bg-muted',
      pending: 'bg-accent/10',
      error: 'bg-destructive/10',
    },
  },
});

const badgeTextStyles = tva({
  base: 'text-xs font-medium',
  parentVariants: {
    status: {
      active: 'text-primary',
      inactive: 'text-muted-foreground',
      pending: 'text-accent-foreground',
      error: 'text-destructive',
    },
  },
});

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const labels = {
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
    error: 'Error',
  };

  return (
    <Box className={badgeStyles({ status, class: className })}>
      <Text className={badgeTextStyles({ parentVariants: { status } })}>
        {labels[status]}
      </Text>
    </Box>
  );
};
```

### Recipe 3: Search Input

```tsx
import React from 'react';
import { Input, InputField, InputSlot, InputIcon } from '@/components/ui/input';
import { SearchIcon, XIcon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';

interface SearchInputProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly placeholder?: string;
  readonly onClear?: () => void;
  readonly className?: string;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = 'Search...',
  onClear,
  className,
}: SearchInputProps) => {
  const handleClear = () => {
    onChange('');
    onClear?.();
  };

  return (
    <Input className={className}>
      <InputSlot>
        <InputIcon as={SearchIcon} className="text-muted-foreground" />
      </InputSlot>
      <InputField
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
      />
      {value.length > 0 && (
        <InputSlot onPress={handleClear}>
          <InputIcon as={XIcon} className="text-muted-foreground" />
        </InputSlot>
      )}
    </Input>
  );
};
```

### Recipe 4: List Item with Action

```tsx
import React from 'react';
import { Pressable } from '@/components/ui/pressable';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { ChevronRightIcon } from '@/components/ui/icon';

interface ListItemProps {
  readonly title: string;
  readonly description?: string;
  readonly onPress: () => void;
  readonly showChevron?: boolean;
  readonly className?: string;
}

export const ListItem = ({
  title,
  description,
  onPress,
  showChevron = true,
  className,
}: ListItemProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        className={`
          p-4 border-b border-border bg-background
          data-[hover=true]:bg-muted/50
          ${className || ''}
        `}
      >
        <HStack space="md" className="items-center justify-between">
          <VStack space="xs" className="flex-1">
            <Text size="md" className="text-foreground">
              {title}
            </Text>
            {description && (
              <Text size="sm" className="text-muted-foreground">
                {description}
              </Text>
            )}
          </VStack>
          {showChevron && (
            <Icon
              as={ChevronRightIcon}
              size="md"
              className="text-muted-foreground"
            />
          )}
        </HStack>
      </Box>
    </Pressable>
  );
};
```

## CRITICAL: Semantic Token Requirements

**Before creating any component, understand these STRICT token requirements:**

### ✅ ALLOWED Tokens (Semantic Only)

Use ONLY these semantic token patterns:

**Text Colors:**
- `text-foreground` - Main text color
- `text-muted-foreground` - Muted/secondary text
- `text-card-foreground` - Text on card backgrounds
- `text-primary`, `text-primary-foreground` - Primary brand colors
- `text-secondary`, `text-secondary-foreground` - Secondary colors
- `text-destructive` - Error states
- `text-accent`, `text-accent-foreground` - Accent colors
- With alpha: `text-foreground/70`, `text-primary/90`

**Background Colors:**
- `bg-background` - Main background
- `bg-card` - Card backgrounds
- `bg-muted` - Muted backgrounds
- `bg-popover` - Popover/modal backgrounds
- `bg-primary`, `bg-secondary`, `bg-destructive`, `bg-accent` - Action colors
- With alpha: `bg-primary/10`, `bg-muted/50`

**Border Colors:**
- `border-border` - Standard borders
- `border-input` - Input borders
- `ring-ring` - Focus rings
- With alpha: `border-border/50`, `border-primary/20`

### ❌ PROHIBITED Tokens (NEVER Use These)

**NEVER use these token patterns - they are STRICTLY PROHIBITED:**

```tsx
// ❌ PROHIBITED: Generic typography tokens
text-typography-900
text-typography-700
text-typography-500

// ❌ PROHIBITED: Neutral color tokens
bg-neutral-100
text-neutral-600
border-neutral-300

// ❌ PROHIBITED: Gray/Slate color scales
bg-gray-50
text-gray-900
border-gray-200
text-slate-700

// ❌ PROHIBITED: Numbered color tokens
bg-blue-600
text-red-500
border-green-400
bg-indigo-500

// ❌ PROHIBITED: Arbitrary values
bg-[#3b82f6]
text-[#DC2626]

// ❌ PROHIBITED: Opacity utilities
opacity-70
bg-opacity-90
text-opacity-80
```

### Why This Matters

Using prohibited tokens will:
- ❌ Break dark mode
- ❌ Violate design system
- ❌ Create maintenance debt
- ❌ Fail code review

Using semantic tokens will:
- ✅ Work in light AND dark mode
- ✅ Match design system
- ✅ Be maintainable
- ✅ Express intent clearly

## Best Practices Checklist

When creating a component, verify:

### Structure
- [ ] Uses Gluestack components (not React Native primitives)
- [ ] Imports from `@/components/ui/*`
- [ ] Follows compound component pattern when needed
- [ ] InputIcon wrapped in InputSlot (if using Input)

### TypeScript
- [ ] Interface defined with `readonly` props
- [ ] All props typed correctly
- [ ] Optional props have `?` marker
- [ ] Default values specified in function params

### Styling
- [ ] **CRITICAL: Uses ONLY semantic tokens** - NO `typography-*`, `neutral-*`, `gray-*`, `slate-*`, or numbered colors (`red-500`, `blue-600`)
- [ ] All color tokens are semantic (text-foreground, bg-card, text-muted-foreground, etc.)
- [ ] Alpha values used instead of opacity utilities (text-foreground/70 instead of opacity-70)
- [ ] Spacing uses scale values (p-4, m-2, etc.) - no arbitrary values
- [ ] Component props used (space, size, variant)
- [ ] className prop for customization
- [ ] Uses tva for variants (if needed)
- [ ] Dark mode compatible (semantic tokens work in both themes)

### Props
- [ ] Accepts className for overrides
- [ ] Size variants: `sm`, `md`, `lg`
- [ ] Visual variants if applicable
- [ ] State props: `isDisabled`, `isLoading`, `isInvalid`
- [ ] Callback props for interactions

### Accessibility
- [ ] Meaningful alt text for images
- [ ] Proper keyboard types for inputs
- [ ] Focus states handled
- [ ] ARIA labels when needed

### Performance
- [ ] Memoized with React.memo if expensive
- [ ] Callbacks wrapped in useCallback
- [ ] No unnecessary rerenders

## Common Mistakes to Avoid

### ❌ Don't: Mix React Native and Gluestack

```tsx
// ❌ INCORRECT
import { View, Text } from 'react-native';
import { Button } from '@/components/ui/button';

export const Component = () => (
  <View>
    <Text>Content</Text>
  </View>
);
```

### ❌ Don't: Skip Sub-Components

```tsx
// ❌ INCORRECT: Missing ButtonText
<Button onPress={handlePress}>Submit</Button>

// ✅ CORRECT
<Button onPress={handlePress}>
  <ButtonText>Submit</ButtonText>
</Button>
```

### ❌ Don't: Use Inline Styles

```tsx
// ❌ INCORRECT
<Box style={{ padding: 16, backgroundColor: '#fff' }}>

// ✅ CORRECT
<Box className="p-4 bg-background">
```

### ❌ Don't: Forget InputSlot

```tsx
// ❌ INCORRECT: InputIcon not wrapped
<Input>
  <InputIcon as={MailIcon} />
  <InputField />
</Input>

// ✅ CORRECT
<Input>
  <InputSlot>
    <InputIcon as={MailIcon} />
  </InputSlot>
  <InputField />
</Input>
```

## Quick Start Guide

1. **Choose a template** from above that matches your needs
2. **Check official docs** for the components you'll use
3. **Copy the template** and modify for your use case
4. **Add TypeScript types** with readonly props
5. **Use semantic tokens** for all colors
6. **Test on real device** to verify behavior
7. **Validate with checklist** before committing

## Reference

- **Component Documentation**: `https://v4.gluestack.io/ui/docs/components/${componentName}/`
- **Complete Docs**: https://v4.gluestack.io/ui/docs
- **tva Documentation**: https://www.tailwind-variants.org/

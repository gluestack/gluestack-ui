---
name: gluestack-ui-v4:components
description: Component usage patterns for gluestack-ui v4 - covers component selection, props vs className, compound patterns, icons, and provider setup.
---

# Gluestack UI v4 - Component Patterns

This sub-skill focuses on component usage, compound component patterns, icon handling, and provider setup for gluestack-ui v4.

## Rule 1: Gluestack Components Over React Native Primitives

Always use Gluestack components instead of direct React Native imports:

| React Native                         | Gluestack Equivalent                           |
| ------------------------------------ | ---------------------------------------------- |
| View from "react-native"             | Box from "@/components/ui/box"                 |
| Text from "react-native"             | Text from "@/components/ui/text"               |
| TouchableOpacity from "react-native" | Pressable from "@/components/ui/pressable"     |
| ScrollView from "react-native"       | ScrollView from "@/components/ui/scroll-view"  |
| Image from "react-native"            | Image from "@/components/ui/image"             |
| TextInput from "react-native"        | Input, InputField from "@/components/ui/input" |
| FlatList from "react-native"         | FlatList from "@/components/ui/flat-list"      |

### Correct Pattern

```tsx
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";

const Component = () => (
  <Box className="p-4">
    <Text className="text-foreground">Hello</Text>
    <Pressable onPress={handlePress}>
      <Text>Press Me</Text>
    </Pressable>
  </Box>
);
```

### Incorrect Pattern

```tsx
import { View, Text, TouchableOpacity } from "react-native";

const Component = () => (
  <View style={{ padding: 16 }}>
    <Text style={{ color: "#333" }}>Hello</Text>
    <TouchableOpacity onPress={handlePress}>
      <Text>Press Me</Text>
    </TouchableOpacity>
  </View>
);
```

### Exceptions

- Platform-specific code where RN primitives are explicitly required
- Deep integration with native modules
- Performance-critical paths where wrapper overhead matters (rare, must document)

## Rule 2: Use Component Props Over className Utilities

Always prefer component props over className utilities when a component provides built-in props. This ensures type safety, better maintainability, and consistent styling.

### Component Props vs className

Many Gluestack components provide props that map to common styling needs. Use these props instead of className utilities:

| Component | Use Prop Instead of className | Available Values |
|-----------|------------------------------|-----------------|
| `VStack` / `HStack` | `space` instead of `gap-*` | `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl` |
| `Button` | `variant` instead of `bg-*` classes | `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` |
| `Button` | `size` instead of `px-* py-*` classes | `default`, `sm`, `lg`, `icon` |
| `Heading` | `size` instead of `text-*` classes | `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl` |
| `Text` | `size` instead of `text-*` classes | `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl` |
| `Heading` / `Text` | `bold` prop instead of `font-bold` | boolean |
| `Heading` / `Text` | `isTruncated` prop instead of `truncate` | boolean |
| `VStack` / `HStack` | `reversed` prop instead of `flex-*-reverse` | boolean |

### Correct Pattern: Using Component Props

```tsx
// ✅ CORRECT: Using space prop instead of gap className
<VStack space="lg">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</VStack>

// ✅ CORRECT: Using Button variant and size props
<Button variant="outline" size="lg">
  <ButtonText>Click Me</ButtonText>
</Button>

// ✅ CORRECT: Using Heading size prop
<Heading size="2xl" bold>
  Title
</Heading>

// ✅ CORRECT: Using Text size and bold props
<Text size="sm" bold>
  Important text
</Text>

// ✅ CORRECT: Using HStack space prop
<HStack space="md" className="items-center">
  <Text>Label</Text>
  <Button size="sm">
    <ButtonText>Action</ButtonText>
  </Button>
</HStack>
```

### Incorrect Pattern: Using className Instead of Props

```tsx
// ❌ INCORRECT: Using gap className instead of space prop
<VStack className="gap-4">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</VStack>

// ❌ INCORRECT: Using className for button styling instead of variant/size props
<Button className="bg-primary px-8 py-2">
  <ButtonText>Click Me</ButtonText>
</Button>

// ❌ INCORRECT: Using text size className instead of size prop
<Heading className="text-2xl font-bold">
  Title
</Heading>

// ❌ INCORRECT: Using className for spacing instead of space prop
<HStack className="gap-2 items-center">
  <Text>Label</Text>
  <Button size="sm">
    <ButtonText>Action</ButtonText>
  </Button>
</HStack>
```

### When to Use className vs Props

**Use Props When:**
- Component provides a built-in prop for the styling (size, variant, space, etc.)
- You want type safety and autocomplete
- The styling is part of the component's design system

**Use className When:**
- Component doesn't provide a prop for the specific styling needed
- You need custom styling not covered by props
- Combining multiple utilities that don't have prop equivalents
- Layout utilities (flex, items-center, justify-between, etc.)

### Combining Props and className

You can combine props with className for additional styling:

```tsx
// ✅ CORRECT: Using space prop + className for additional styling
<VStack space="lg" className="p-4 bg-card rounded-lg">
  <Heading size="xl">Title</Heading>
  <Text size="sm">Description</Text>
</VStack>

// ✅ CORRECT: Using variant prop + className for custom adjustments
<Button variant="outline" size="lg" className="w-full">
  <ButtonText>Full Width Button</ButtonText>
</Button>
```

### Space Prop Mapping

The `space` prop on VStack/HStack maps to standard spacing:

| space prop | Gap Value | Equivalent className |
|------------|-----------|---------------------|
| `xs` | 4px | `gap-1` |
| `sm` | 8px | `gap-2` |
| `md` | 12px | `gap-3` |
| `lg` | 16px | `gap-4` |
| `xl` | 20px | `gap-5` |
| `2xl` | 24px | `gap-6` |
| `3xl` | 28px | `gap-7` |
| `4xl` | 32px | `gap-8` |

### Benefits of Using Props

1. **Type Safety** - TypeScript will catch invalid prop values
2. **Autocomplete** - IDE provides suggestions for valid values
3. **Consistency** - Enforces design system values
4. **Maintainability** - Easier to refactor and update
5. **Documentation** - Props are self-documenting
6. **Performance** - Props are optimized by the component system

## Rule 6: Gluestack Compound Component Pattern

Use Gluestack's composable compound component pattern for complex components. This is **REQUIRED** for proper rendering, styling, and functionality. Compound components provide proper context sharing, styling inheritance, and accessibility.

### Critical Rule: InputIcon MUST Be Wrapped in InputSlot

**ALL InputIcon components MUST be wrapped in InputSlot**, regardless of whether they're on the left or right side of the input. This is required for proper styling, positioning, and interaction handling.

### Input Component Patterns

#### Correct: InputIcon Wrapped in InputSlot (Required)

```tsx
// ✅ CORRECT: Left icon wrapped in InputSlot
<Input>
  <InputSlot>
    <InputIcon as={MailIcon} className="text-muted-foreground" />
  </InputSlot>
  <InputField placeholder="Enter email" />
</Input>

// ✅ CORRECT: Right icon (interactive) wrapped in InputSlot
<Input>
  <InputField placeholder="Enter password" secureTextEntry={!showPassword} />
  <InputSlot onPress={() => setShowPassword(!showPassword)}>
    <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} className="text-muted-foreground" />
  </InputSlot>
</Input>

// ✅ CORRECT: Both left and right icons wrapped in InputSlot
<Input>
  <InputSlot>
    <InputIcon as={SearchIcon} className="text-muted-foreground" />
  </InputSlot>
  <InputField placeholder="Search..." />
  <InputSlot onPress={handleClear}>
    <InputIcon as={XIcon} className="text-muted-foreground" />
  </InputSlot>
</Input>
```

#### Incorrect: InputIcon Used Directly (Will Break)

```tsx
// ❌ INCORRECT: InputIcon used directly without InputSlot
<Input>
  <InputIcon as={MailIcon} />  {/* ❌ Missing InputSlot wrapper */}
  <InputField placeholder="Enter email" />
</Input>

// ❌ INCORRECT: InputIcon outside Input structure
<InputIcon as={MailIcon} />  {/* ❌ Must be inside Input > InputSlot */}
<Input>
  <InputField placeholder="Enter email" />
</Input>
```

### Button Component Patterns

#### Correct Pattern

```tsx
// ✅ CORRECT: Button with text and icon
<Button variant="default" size="md">
  <ButtonText>Click Me</ButtonText>
  <ButtonIcon as={ChevronRightIcon} />
</Button>

// ✅ CORRECT: Button with only text
<Button>
  <ButtonText>Submit</ButtonText>
</Button>

// ✅ CORRECT: Button with only icon
<Button size="icon">
  <ButtonIcon as={SearchIcon} />
</Button>

// ✅ CORRECT: Button with loading state
<Button isDisabled={isLoading}>
  {isLoading ? (
    <>
      <ButtonSpinner />
      <ButtonText>Loading...</ButtonText>
    </>
  ) : (
    <ButtonText>Submit</ButtonText>
  )}
</Button>
```

#### Incorrect Pattern

```tsx
// ❌ INCORRECT: Text not wrapped in ButtonText
<Button>Click Me</Button>

// ❌ INCORRECT: Direct text children
<Button>
  Click Me  {/* ❌ Must use ButtonText */}
</Button>

// ❌ INCORRECT: Icon not wrapped in ButtonIcon
<Button>
  <ButtonText>Next</ButtonText>
  <ChevronRightIcon />  {/* ❌ Must use ButtonIcon */}
</Button>
```

### FormControl Component Patterns

#### Correct Pattern

```tsx
// ✅ CORRECT: Complete FormControl with label, input, and error
<FormControl isInvalid={!!errors.email}>
  <FormControlLabel>
    <FormControlLabelText>Email Address</FormControlLabelText>
  </FormControlLabel>
  <Input>
    <InputSlot>
      <InputIcon as={MailIcon} />
    </InputSlot>
    <InputField
      placeholder="Enter email"
      value={email}
      onChangeText={setEmail}
    />
  </Input>
  {errors.email && (
    <FormControlError>
      <FormControlErrorIcon as={AlertCircleIcon} />
      <FormControlErrorText>{errors.email}</FormControlErrorText>
    </FormControlError>
  )}
  <FormControlHelper>
    <FormControlHelperText>We'll never share your email</FormControlHelperText>
  </FormControlHelper>
</FormControl>
```

#### Incorrect Pattern

```tsx
// ❌ INCORRECT: Missing sub-components
<FormControl>
  <Text>Email</Text>  {/* ❌ Must use FormControlLabel > FormControlLabelText */}
  <InputField />  {/* ❌ Must wrap in Input */}
</FormControl>

// ❌ INCORRECT: Error text not wrapped
<FormControl isInvalid={hasError}>
  <Input>
    <InputField />
  </Input>
  {hasError && <Text>Error message</Text>}  {/* ❌ Must use FormControlError > FormControlErrorText */}
</FormControl>
```

### Card Component Patterns

#### Correct Pattern

```tsx
// ✅ CORRECT: Complete Card structure
<Card>
  <CardHeader>
    <Heading size="lg">Card Title</Heading>
    <Text className="text-muted-foreground">Subtitle</Text>
  </CardHeader>
  <CardBody>
    <Text>Card content goes here</Text>
  </CardBody>
  <CardFooter>
    <Button variant="outline">
      <ButtonText>Cancel</ButtonText>
    </Button>
    <Button>
      <ButtonText>Confirm</ButtonText>
    </Button>
  </CardFooter>
</Card>
```

#### Incorrect Pattern

```tsx
// ❌ INCORRECT: Direct children without sub-components
<Card>
  <Heading>Title</Heading>  {/* ❌ Must use CardHeader */}
  <Text>Content</Text>  {/* ❌ Must use CardBody */}
</Card>
```

### Checkbox Component Patterns

#### Correct Pattern

```tsx
// ✅ CORRECT: Checkbox with label
<Checkbox
  value="terms"
  isChecked={accepted}
  onChange={(isChecked) => setAccepted(isChecked)}
>
  <CheckboxIndicator>
    <CheckboxIcon as={CheckIcon} />
  </CheckboxIndicator>
  <CheckboxLabel>I accept the terms and conditions</CheckboxLabel>
</Checkbox>
```

#### Incorrect Pattern

```tsx
// ❌ INCORRECT: Missing sub-components
<Checkbox isChecked={accepted}>
  <Text>Accept terms</Text>  {/* ❌ Must use CheckboxLabel */}
</Checkbox>

// ❌ INCORRECT: Icon not wrapped properly
<Checkbox>
  <CheckIcon />  {/* ❌ Must use CheckboxIndicator > CheckboxIcon */}
  <CheckboxLabel>Accept</CheckboxLabel>
</Checkbox>
```

### Select Component Patterns

#### Correct Pattern

```tsx
// ✅ CORRECT: Select with trigger and options
<Select>
  <SelectTrigger>
    <SelectInput placeholder="Select option" />
    <SelectIcon as={ChevronDownIcon} />
  </SelectTrigger>
  <SelectPortal>
    <SelectBackdrop />
    <SelectContent>
      <SelectDragIndicatorWrapper>
        <SelectDragIndicator />
      </SelectDragIndicatorWrapper>
      <SelectItem label="Option 1" value="1">
        <SelectItemText>Option 1</SelectItemText>
      </SelectItem>
      <SelectItem label="Option 2" value="2">
        <SelectItemText>Option 2</SelectItemText>
      </SelectItem>
    </SelectContent>
  </SelectPortal>
</Select>
```

### Compound Component Reference Table

| Component | Required Sub-Components | Optional Sub-Components | Notes |
|-----------|------------------------|------------------------|-------|
| **Input** | `InputField` | `InputSlot`, `InputIcon` | **InputIcon MUST be inside InputSlot** |
| **Button** | `ButtonText` | `ButtonIcon`, `ButtonSpinner` | Text content must use ButtonText |
| **Card** | None | `CardHeader`, `CardBody`, `CardFooter` | Structure for organization |
| **FormControl** | None | `FormControlLabel`, `FormControlError`, `FormControlHelper` | Wrapper for form fields |
| **Checkbox** | `CheckboxIndicator`, `CheckboxLabel` | `CheckboxIcon` | Icon goes inside Indicator |
| **Select** | `SelectTrigger`, `SelectInput` | `SelectIcon`, `SelectContent`, `SelectItem` | Complex structure required |
| **Alert** | `AlertText` | `AlertIcon`, `AlertTitle` | Text must use AlertText |
| **Toast** | `ToastTitle` | `ToastDescription`, `ToastCloseButton` | Title required for display |

### Key Principles

1. **Always use sub-components** - Never place raw text, icons, or elements directly as children
2. **InputIcon requires InputSlot** - This is mandatory, not optional
3. **Text content requires text sub-components** - ButtonText, AlertText, etc.
4. **Icons require icon sub-components** - ButtonIcon, InputIcon (inside InputSlot), etc.
5. **Check official docs** - Component structures may vary; always verify at `https://v4.gluestack.io/ui/docs/components/${componentName}/`

### Common Mistakes to Avoid

```tsx
// ❌ MISTAKE: InputIcon without InputSlot
<Input>
  <InputIcon as={MailIcon} />
  <InputField />
</Input>

// ❌ MISTAKE: Button text not wrapped
<Button>Submit</Button>

// ❌ MISTAKE: FormControl error not using sub-components
<FormControl isInvalid={true}>
  <InputField />
  <Text className="text-red-500">Error</Text>  {/* ❌ Use FormControlError */}
</FormControl>

// ❌ MISTAKE: Checkbox without proper structure
<Checkbox>
  <Text>Label</Text>  {/* ❌ Use CheckboxLabel */}
</Checkbox>
```

## Rule 9: Copy-Paste Philosophy

Gluestack-ui uses a copy-paste approach. Components are copied into your codebase, not installed as npm packages.

**IMPORTANT**: Before copying or using any component, verify the latest usage patterns, sub-components, and API at `https://v4.gluestack.io/ui/docs/components/${componentName}/`

### Correct Pattern

1. **Check official v4 docs** - Visit `https://v4.gluestack.io/ui/docs/components/${componentName}/` to verify latest API and patterns
2. Copy component files from gluestack-ui into your `components/ui/` directory
3. Import from your local components directory
4. Customize as needed

```tsx
// Import from your local components
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
```

### Incorrect Pattern

```tsx
// Don't try to import from a package
import { Button } from "@gluestack-ui/button"; // ❌ This doesn't exist
```

## Rule 10: Provider Setup

Always wrap your app with `GluestackUIProvider` to enable theming and component functionality.

### Correct Pattern

```tsx
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function App() {
  return (
    <GluestackUIProvider>
      <YourApp />
    </GluestackUIProvider>
  );
}
```

## Rule 11: Icon Usage

Use icons from `@/components/ui/icon` following this priority:

1. **Pre-built icons** - Use icons already exported from `components/ui/icon/index.tsx` (e.g., `ChevronRightIcon`, `SearchIcon`, `CheckIcon`)
2. **Lucide Icons (Recommended)** - If the icon is not available in `components/ui/icon/index.tsx`, use Lucide Icons if available
3. **Custom icons with createIcon** - If neither is available, create custom icons using the `createIcon` function

### Icon Resolution Hierarchy

1. Check if icon exists in `@/components/ui/icon` (e.g., `ChevronRightIcon`, `SearchIcon`)
2. Use Lucide Icons if available (recommended for missing icons)
3. Create custom icon using `createIcon` function

### Using Pre-built Icons

```tsx
import { ChevronRightIcon, SearchIcon } from '@/components/ui/icon';
import { Icon } from '@/components/ui/icon';
import { Button, ButtonIcon } from '@/components/ui/button';

<Button>
  <ButtonText>Next</ButtonText>
  <ButtonIcon as={ChevronRightIcon} />
</Button>

<Icon as={SearchIcon} size="md" className="text-foreground" />
```

### Using Lucide Icons (Recommended)

When an icon is not available in `components/ui/icon/index.tsx`, use Lucide Icons:

```tsx
import { Icon } from "@/components/ui/icon";
import { Heart } from "lucide-react-native";

<Icon as={Heart} size="md" className="text-foreground" />;
```

### Creating Custom Icons with createIcon

If an icon is not available in `components/ui/icon/index.tsx` and not available in Lucide Icons, create a custom icon using the `createIcon` function:

```tsx
import { Icon, createIcon } from "@/components/ui/icon";
import { Path } from "react-native-svg";

function App() {
  const CustomIcon = createIcon({
    viewBox: "0 0 32 32",
    path: (
      <>
        <Path
          d="M9.5 14.6642L15.9999 9.87633V12.1358L9.5 16.9236V14.6642Z"
          fill="grey"
        />
        <Path
          d="M22.5 14.6642L16.0001 9.87639V12.1359L22.5 16.9237V14.6642Z"
          fill="grey"
        />
      </>
    ),
  });

  return <Icon as={CustomIcon} size="xl" className="text-foreground" />;
}
```

### Correct Pattern

```tsx
// Using pre-built icon
import { ChevronRightIcon } from "@/components/ui/icon";
import { Button, ButtonIcon } from "@/components/ui/button";

<Button>
  <ButtonText>Continue</ButtonText>
  <ButtonIcon as={ChevronRightIcon} />
</Button>;

// Using Lucide icon (when not in components/ui/icon)
import { Icon } from "@/components/ui/icon";
import { Heart } from "lucide-react-native";

<Icon as={Heart} size="md" className="text-foreground" />;

// Creating custom icon
import { Icon, createIcon } from "@/components/ui/icon";
import { Path } from "react-native-svg";

const CustomIcon = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <Path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

<Icon as={CustomIcon} size="md" className="text-foreground" />;
```

### Incorrect Pattern

```tsx
// ❌ Don't import icons from external packages directly
import { Heart } from "@some-icon-package";

// ❌ Don't use raw SVG components without createIcon
import Svg, { Path } from "react-native-svg";

<Svg>
  <Path d="..." />
</Svg>;
```

## CRITICAL: Semantic Token Usage in Components

**When using any component, you MUST use ONLY semantic color tokens.**

### ✅ CORRECT: Semantic Tokens

```tsx
// ✅ Text colors
<Text className="text-foreground">Main content</Text>
<Text className="text-muted-foreground">Secondary text</Text>
<Text className="text-destructive">Error message</Text>

// ✅ Background colors
<Box className="bg-background">Main area</Box>
<Box className="bg-card">Card content</Box>
<Box className="bg-primary">Primary action</Box>

// ✅ Border colors
<Box className="border border-border">Standard border</Box>
<Input className="border-input">Input field</Input>

// ✅ Alpha values
<Box className="bg-primary/10">Subtle background</Box>
<Text className="text-foreground/70">Muted text</Text>
```

### ❌ PROHIBITED: Generic and Numbered Tokens

```tsx
// ❌ NEVER use typography tokens
<Text className="text-typography-900">Heading</Text>
<Text className="text-typography-600">Description</Text>

// ❌ NEVER use neutral tokens
<Box className="bg-neutral-100">Card</Box>
<Text className="text-neutral-700">Text</Text>

// ❌ NEVER use gray/slate tokens
<Box className="bg-gray-50">Background</Box>
<Text className="text-gray-900">Content</Text>

// ❌ NEVER use numbered colors
<Box className="bg-blue-600">Primary</Box>
<Text className="text-red-500">Error</Text>

// ❌ NEVER use opacity utilities
<Text className="text-black opacity-70">Muted</Text>
```

## Common Form Patterns

```tsx
// Complete form with InputIcon properly wrapped in InputSlot
<FormControl isInvalid={hasError}>
  <FormControlLabel>
    <FormControlLabelText>Email</FormControlLabelText>
  </FormControlLabel>
  <Input>
    <InputSlot>
      <InputIcon as={MailIcon} className="text-muted-foreground" />
    </InputSlot>
    <InputField
      placeholder="Enter email"
      value={email}
      onChangeText={setEmail}
    />
  </Input>
  {hasError && (
    <FormControlError>
      <FormControlErrorIcon as={AlertCircleIcon} />
      <FormControlErrorText>Invalid email</FormControlErrorText>
    </FormControlError>
  )}
</FormControl>

// Password input with show/hide toggle
<Input>
  <InputSlot>
    <InputIcon as={LockIcon} className="text-muted-foreground" />
  </InputSlot>
  <InputField
    placeholder="Enter password"
    secureTextEntry={!showPassword}
    value={password}
    onChangeText={setPassword}
  />
  <InputSlot onPress={() => setShowPassword(!showPassword)}>
    <InputIcon
      as={showPassword ? EyeOffIcon : EyeIcon}
      className="text-muted-foreground"
    />
  </InputSlot>
</Input>
```

## Reference

**Always verify component usage at:** `https://v4.gluestack.io/ui/docs/components/${componentName}/`

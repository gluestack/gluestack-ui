# gluestack-ui-native Design Spec

A new gluestack variant built on expo-ui primitives with NativeWind v5 styling. Renders to native SwiftUI (iOS) and Jetpack Compose (Android) via expo-ui, styled with `styled()` + `tva()` from NativeWind v5.

## Decisions

- **Thin wrapper pattern**: Each component wraps exactly one expo-ui primitive with `tva()` for variants. No `createX` factories, no `@gluestack-ui/core` dependency.
- **NativeWind v5 `styled()`**: Replaces `cssInterop`. Registered per-component to map className to expo-ui's prop surface (style, textStyle, etc.).
- **3-tier design tokens**: Global → Alias → Component, all defined in `global.css` with `@theme` directives. No `tailwind.config.js`.
- **Separate source**: `src-native/` is independent from `src/`. No shared code or cross-references.
- **MVP scope**: Only components where expo-ui has direct equivalents — Button, Text, Input, Switch, Checkbox, Slider, Picker.

## Directory Structure

```
src-native/
├── components/
│   └── ui/
│       ├── button/index.tsx
│       ├── text/index.tsx
│       ├── input/index.tsx
│       ├── switch/index.tsx
│       ├── checkbox/index.tsx
│       ├── slider/index.tsx
│       └── picker/index.tsx
├── theme/
│   ├── global.css          # All 3 token tiers
│   └── provider.tsx        # GluestackProvider (wraps expo-ui Host)
└── index.ts                # Barrel export

apps/
└── starter-kit-expo-native/
    ├── app/
    │   ├── _layout.tsx
    │   └── index.tsx
    ├── components/
    │   └── ui/             # Gitignored — populated by mapper
    ├── theme/              # Populated by mapper
    ├── global.css          # Symlink or copy from mapper
    ├── package.json
    ├── app.json
    ├── tsconfig.json
    ├── metro.config.js
    └── nativewind-env.d.ts
```

## Component Architecture

Every component follows this pattern:

```tsx
'use client';
import React from 'react';
import { Button as ExpoButton, type ButtonProps as ExpoButtonProps } from 'expo-ui';
import { styled, tva, type VariantProps } from 'nativewind';

// 1. styled() — registers how className maps to component props
const ExpoButtonStyled = styled(ExpoButton, {
  className: {
    target: 'style',
    nativeStyleMapping: {
      backgroundColor: true,
      borderRadius: true,
      padding: true,
      paddingHorizontal: true,
      paddingVertical: true,
      opacity: true,
      borderWidth: true,
      borderColor: true,
      width: true,
      height: true,
    },
  },
});

// 2. tva — variant-based className composition
const buttonStyle = tva({
  base: 'bg-[var(--color-button-bg)] text-[var(--color-button-text)] rounded-lg',
  variants: { /* ... */ },
});

// 3. Extended types
type ButtonProps = ExpoButtonProps & VariantProps<typeof buttonStyle> & { className?: string };
type ButtonRef = React.ElementRef<typeof ExpoButton>;

// 4. Component
const Button = React.forwardRef<ButtonRef, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', action = 'primary', ...props }, ref) => (
    <ExpoButtonStyled
      ref={ref}
      className={buttonStyle({ variant, size, action, class: className })}
      {...props}
    />
  )
);

Button.displayName = 'Button';
export { Button, type ButtonProps, type ButtonRef };
```

### styled() mappings per component

| Component | target | nativeStyleMapping fields |
|-----------|--------|--------------------------|
| Button | `style` | backgroundColor, borderRadius, padding, paddingHorizontal, paddingVertical, opacity, borderWidth, borderColor, width, height |
| Text | `textStyle` | fontSize, fontWeight, fontFamily, color, lineHeight, letterSpacing, textAlign |
| Input | `style` | backgroundColor, borderRadius, borderWidth, borderColor, padding, paddingHorizontal, paddingVertical, opacity, width, height |
| Switch | `style` | opacity, width, height |
| Checkbox | `style` | opacity, width, height |
| Slider | `style` | width, height, opacity |
| Picker | `style` | backgroundColor, borderRadius, borderWidth, borderColor, padding, paddingHorizontal, paddingVertical, width, height |

## 3-Tier Design Token System

All tokens live in `src-native/theme/global.css`. No `tailwind.config.js`.

### Tier 1: Global Tokens (raw values)

```css
@theme {
  --color-violet-50: #F5F3FF;
  --color-violet-500: #8B5CF6;
  --color-violet-600: #7C3AED;
  --color-violet-700: #6D28D9;
  --color-rose-500: #F43F5E;
  --color-rose-600: #E11D48;
  --color-green-500: #22C55E;
  --color-green-600: #16A34A;
  --color-gray-50: #F9FAFB;
  --color-gray-500: #6B7280;
  --color-gray-800: #1F2937;
  --color-white: #FFFFFF;

  --spacing-0: 0px;
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;

  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;

  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
}
```

### Tier 2: Alias Tokens (semantic)

```css
@theme {
  --color-primary-50: var(--color-violet-50);
  --color-primary-500: var(--color-violet-500);
  --color-primary-600: var(--color-violet-600);
  --color-primary-700: var(--color-violet-700);

  --color-error-500: var(--color-rose-500);
  --color-error-600: var(--color-rose-600);

  --color-success-500: var(--color-green-500);
  --color-success-600: var(--color-green-600);

  --color-background-50: var(--color-gray-50);
  --color-typography-0: var(--color-white);
  --color-typography-500: var(--color-gray-500);
  --color-typography-800: var(--color-gray-800);
}
```

### Tier 3: Component Tokens (component-specific)

```css
@layer components {
  :root {
    --color-button-bg: var(--color-primary-500);
    --color-button-bg-hover: var(--color-primary-600);
    --color-button-bg-active: var(--color-primary-700);
    --color-button-text: var(--color-typography-0);

    --color-input-bg: var(--color-background-50);
    --color-input-border: var(--color-primary-300);
    --color-input-text: var(--color-typography-800);

    --color-checkbox-bg: var(--color-primary-500);
    --color-checkbox-text: var(--color-typography-0);

    --color-slider-track: var(--color-primary-500);
    --color-slider-thumb: var(--color-primary-600);
  }
}
```

Usage in tva: `bg-[var(--color-button-bg)]`

## Theme Provider

Thin wrapper around expo-ui's `Host` component. No token logic — tokens live in CSS.

```tsx
// src-native/theme/provider.tsx
import React from 'react';
import { Host } from 'expo-ui';
import { colorScheme } from 'nativewind';

type ThemeConfig = {
  seedColor?: string;
  colorScheme?: 'light' | 'dark' | 'system';
};

const GluestackProvider = ({
  children,
  seedColor = '#8B5CF6',
  colorScheme: themeScheme = 'system',
}: React.PropsWithChildren<ThemeConfig>) => (
  <Host
    seedColor={seedColor}
    colorScheme={themeScheme === 'system' ? colorScheme.get() : themeScheme}
  >
    {children}
  </Host>
);

export { GluestackProvider, type ThemeConfig };
```

App layout usage:

```tsx
// apps/starter-kit-expo-native/app/_layout.tsx
import { GluestackProvider } from '../components/ui/theme';

export default function RootLayout() {
  return (
    <GluestackProvider>
      <Slot />
    </GluestackProvider>
  );
}
```

## Component Specs

### Button

- **Primitive:** `expo-ui/Button`
- **Props:** Extends `ExpoButtonProps` + `VariantProps<typeof buttonStyle>` + `className`
- **Variants:** action (primary, secondary, positive, negative, default), variant (solid, outline, link), size (sm, md, lg)
- **Export:** `Button, ButtonProps, ButtonRef`

### Text

- **Primitive:** `expo-ui/Text`
- **Props:** Extends `ExpoTextProps` + `VariantProps<typeof textStyle>` + `className`
- **Variants:** size (xs, sm, md, lg, xl), weight (normal, medium, semibold, bold)
- **Export:** `Text, TextProps, TextRef`

### Input

- **Primitive:** `expo-ui/TextInput`
- **Props:** Extends `ExpoTextInputProps` + `VariantProps<typeof inputStyle>` + `className`
- **Variants:** size (sm, md, lg), variant (outline, filled, underlined), invalid (true, false)
- **Export:** `Input, InputProps, InputRef`

### Switch

- **Primitive:** `expo-ui/Switch`
- **Props:** Extends `ExpoSwitchProps` + `VariantProps<typeof switchStyle>` + `className`
- **Variants:** size (sm, md, lg)
- **Export:** `Switch, SwitchProps, SwitchRef`

### Checkbox

- **Primitive:** `expo-ui/Checkbox`
- **Props:** Extends `ExpoCheckboxProps` + `VariantProps<typeof checkboxStyle>` + `className`
- **Variants:** size (sm, md, lg), invalid (true, false)
- **Export:** `Checkbox, CheckboxProps, CheckboxRef`

### Slider

- **Primitive:** `expo-ui/Slider`
- **Props:** Extends `ExpoSliderProps` + `VariantProps<typeof sliderStyle>` + `className`
- **Variants:** size (sm, md, lg)
- **Export:** `Slider, SliderProps, SliderRef`

### Picker

- **Primitive:** `expo-ui/Picker` + `Picker.Item`
- **Props:** Extends `ExpoPickerProps` + `VariantProps<typeof pickerStyle>` + `className`
- **Variants:** size (sm, md, lg), variant (outlined, filled)
- **Export:** `Picker, PickerItem, PickerProps, PickerRef`

## Barrel Export

```ts
// src-native/index.ts
export { Button, type ButtonProps, type ButtonRef } from './components/ui/button';
export { Text, type TextProps, type TextRef } from './components/ui/text';
export { Input, type InputProps, type InputRef } from './components/ui/input';
export { Switch, type SwitchProps, type SwitchRef } from './components/ui/switch';
export { Checkbox, type CheckboxProps, type CheckboxRef } from './components/ui/checkbox';
export { Slider, type SliderProps, type SliderRef } from './components/ui/slider';
export { Picker, PickerItem, type PickerProps, type PickerRef } from './components/ui/picker';
export { GluestackProvider, type ThemeConfig } from './theme/provider';
```

## Mapper System

Follows the same pattern as existing `starter-kits` mapper.

### New files

```
scripts/mappers/
├── starter-kits-native/
│   ├── index.ts              # component() + nonComponent() hooks
│   └── componentOperations.ts # copyComponentShallow + deleteComponent + copyThemeFile
└── index.ts                  # Register new mapper
```

### Mapper config

```ts
const starterKitNativeConfigs = [
  {
    name: 'starter-kit-expo-native',
    sourcePath: path.resolve('src-native/components/ui'),
    destPath: path.resolve('apps/starter-kit-expo-native/components/ui'),
  },
];
```

- Source: `src-native/components/ui/` (shallow copy, files only, exclude dependencies.json)
- Theme files: `nonComponent()` hook copies `src-native/theme/` to `apps/starter-kit-expo-native/theme/`

### Registration

```ts
// scripts/mappers/index.ts
import starterKitsNativeMapper from './starter-kits-native';

export default [
  { name: 'website', mapper: websiteMapper },
  { name: 'kitchen-sink', mapper: kitchenSinkMapper },
  { name: 'starter-kits', mapper: starterKitsMapper },
  { name: 'starter-kits-native', mapper: starterKitsNativeMapper },
];
```

### Yarn commands

```bash
yarn dev:native      # watches src-native/ → starter-kit-expo-native
yarn sync:native     # one-time sync
```

## App Dependencies

```json
{
  "dependencies": {
    "expo": "~56.0.0",
    "expo-ui": "~56.0.0",
    "nativewind": "^5.0.0-preview.4",
    "react": "19.2.3",
    "react-native": "0.85.3",
    "tailwindcss": "^4.0.0",
    "tailwind-variants": "^0.1.20",
    "expo-router": "~56.2.5",
    "react-native-screens": "4.25.1",
    "react-native-safe-area-context": "~5.7.0"
  }
}
```

## Out of Scope (for MVP)

- Overlay components (Modal, Toast, AlertDialog, Actionsheet)
- Layout primitives (Box, HStack, VStack, Center)
- Composite components (FormControl, Avatar, Badge, Card, Divider)
- Documentation pages / examples
- `@gluestack-ui/core` integration
- Kitchen-sink or website destination apps

# Theming System Documentation

This app uses NativeWind v4+ with dynamic CSS variables for theming, integrated with GluestackUI. The implementation follows the official [NativeWind theming guide](https://www.nativewind.dev/docs/guides/themes).

## Features

- ✨ **7 Pre-designed Themes**: Default, Ocean, Forest, Sunset, Lavender, Cyber, and Rose
- 🌓 **Light & Dark Modes**: Each theme has both light and dark variants
- 💾 **Persistent Storage**: Theme preferences are saved using AsyncStorage
- 🎨 **Dynamic Switching**: Change themes instantly without app restart
- 🔧 **Fully Customizable**: Easy to add new themes or modify existing ones
- 🤝 **GluestackUI Integration**: Works seamlessly with GluestackUI components

## How It Works

### 1. Theme Configuration (`constants/themes.ts`)

Each theme is defined with CSS variable values for both light and dark modes:

```typescript
export const themeConfigs = {
  ocean: {
    name: "Ocean",
    description: "Calm blues and aqua tones",
    light: vars({
      "--color-primary-500": hexToRgb("#0891b2"),
      "--color-secondary-500": hexToRgb("#06b6d4"),
      // ... more colors
    }),
    dark: vars({
      "--color-primary-500": hexToRgb("#22d3ee"),
      "--color-secondary-500": hexToRgb("#67e8f9"),
      // ... more colors
    }),
  },
  // ... more themes
};
```

### 2. Theme Context (`contexts/app-theme-context.tsx`)

The theme context manages:

- Current theme selection
- Light/dark mode toggle
- AsyncStorage persistence
- Applying CSS variables using NativeWind's `vars()`

```typescript
const { currentTheme, colorMode, setTheme, toggleColorMode } = useAppTheme();
```

### 3. Tailwind Configuration (`tailwind.config.js`)

CSS variables are defined in the Tailwind config:

```javascript
colors: {
  primary: {
    500: 'rgb(var(--color-primary-500)/<alpha-value>)',
    // ... more shades
  },
}
```

## Usage

### Accessing Theme Values

Use Tailwind classes in your components:

```tsx
<View className="bg-primary-500">
  <Text className="text-typography-900">Hello World</Text>
</View>
```

### Switching Themes

```tsx
import { useAppTheme } from "@/contexts/app-theme-context";

function MyComponent() {
  const { setTheme, toggleColorMode } = useAppTheme();

  return (
    <>
      <Button onPress={() => setTheme("ocean")}>Use Ocean Theme</Button>
      <Button onPress={toggleColorMode}>Toggle Dark Mode</Button>
    </>
  );
}
```

### Checking Current Theme

```tsx
const { currentTheme, colorMode, isDark, isLight } = useAppTheme();

console.log(`Current theme: ${currentTheme}`); // e.g., 'ocean'
console.log(`Color mode: ${colorMode}`); // 'light' or 'dark'
```

## Adding a New Theme

1. Open `constants/themes.ts`
2. Add a new theme to the `themeConfigs` object:

```typescript
export const themeConfigs = {
  // ... existing themes
  midnight: {
    name: "Midnight",
    description: "Deep blues and purples",
    light: vars({
      "--color-primary-500": hexToRgb("#1e3a8a"),
      "--color-secondary-500": hexToRgb("#5b21b6"),
      // ... more colors
    }),
    dark: vars({
      "--color-primary-500": hexToRgb("#3b82f6"),
      "--color-secondary-500": hexToRgb("#8b5cf6"),
      // ... more colors
    }),
  },
};
```

3. Add the theme name to the `ThemeName` type:

```typescript
export type ThemeName =
  | "default"
  | "ocean"
  | "forest"
  | "sunset"
  | "lavender"
  | "cyber"
  | "rose"
  | "midnight"; // Add your new theme here
```

## Color Variables

Each theme must define these color variables:

### Primary Colors

- `--color-primary-500/600/700`: Main brand colors

### Secondary Colors

- `--color-secondary-500/600`: Accent colors

### Semantic Colors

- `--color-success-500`: Success states (green)
- `--color-error-500`: Error states (red)
- `--color-warning-500`: Warning states (orange/yellow)
- `--color-info-500`: Info states (blue)

### Background Colors

- `--color-background-0`: Main background
- `--color-background-50/100`: Secondary backgrounds

### Typography Colors

- `--color-typography-900`: Primary text
- `--color-typography-700`: Secondary text
- `--color-typography-500`: Tertiary text

### Outline Colors

- `--color-outline-300`: Borders and dividers

## Available Themes

| Theme    | Description                     | Best For                        |
| -------- | ------------------------------- | ------------------------------- |
| Default  | Clean and professional          | Business apps, productivity     |
| Ocean    | Calm blues and aqua tones       | Health, wellness, travel        |
| Forest   | Natural greens and earthy tones | Environmental, outdoor, organic |
| Sunset   | Warm oranges and pinks          | Creative, artistic, energetic   |
| Lavender | Soft purples and pastels        | Elegant, luxurious, calm        |
| Cyber    | Neon pinks and electric blues   | Gaming, tech, modern            |
| Rose     | Elegant rose and burgundy       | Fashion, beauty, romantic       |

## Tips

- Use semantic color names (`text-primary-500`) instead of direct colors (`text-blue-500`) for better theme consistency
- Test your UI with all themes to ensure good contrast and readability
- Consider accessibility when creating custom themes (WCAG contrast ratios)
- Use the theme picker screen (`app/(home)/themes.tsx`) as a template for theme selection UI

## GluestackUI Integration

### How It Works

The theming system is designed to work seamlessly with GluestackUI components:

1. **Unified Color Variables**: Both NativeWind and GluestackUI use the same CSS variable names (e.g., `--color-primary-500`)
2. **Single Source of Truth**: The `AppThemeProvider` applies theme variables that both systems read from
3. **No Conflicts**: GluestackUI's static theme config has been removed to prevent conflicts with dynamic theming

### Provider Hierarchy

```tsx
<AppThemeProvider>
  {" "}
  {/* Applies dynamic theme CSS variables */}
  <GluestackUIProvider>
    {" "}
    {/* Provides overlay/toast functionality */}
    <YourApp />
  </GluestackUIProvider>
</AppThemeProvider>
```

The `AppThemeProvider` wraps around `GluestackUIProvider` and applies the theme CSS variables using NativeWind's `vars()`. This ensures all components (both NativeWind and GluestackUI) use the same color scheme.

### Component Compatibility

All GluestackUI components automatically respect your theme choice because they read from the same CSS variables:

```tsx
// Both work with the same theme
<Button className="bg-primary-500">NativeWind Button</Button>
<GluestackButton>GluestackUI Button</GluestackButton>
```

## Troubleshooting

### Colors not updating

- Make sure you're using the theme context provider at the root of your app
- Verify CSS variables are defined in `tailwind.config.js`
- Check that you're using `rgb(var(--color-name)/<alpha-value>)` format
- Ensure `AppThemeProvider` wraps `GluestackUIProvider` (not the other way around)

### Theme not persisting

- Ensure AsyncStorage is properly installed (`@react-native-async-storage/async-storage`)
- Check that `setTheme` is being called correctly
- Verify AsyncStorage permissions on device

### Dark mode issues

- Use `colorMode` instead of `colorScheme` for theme-aware components
- Ensure both light and dark variants are defined for each theme
- Check that `toggleColorMode` is connected to your UI controls

### GluestackUI components not themed

- Verify that the old GluestackUI config is not being applied
- Check that `AppThemeProvider` is wrapping `GluestackUIProvider`
- Ensure all color shades (0-950) are defined in your theme config

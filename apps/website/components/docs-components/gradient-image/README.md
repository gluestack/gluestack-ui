# GradientImage Component

This component displays a gradient image that automatically adapts to the current color mode (light/dark).

## How it works

The component uses Tailwind CSS classes to conditionally show/hide different images based on the color mode:

- **Light mode**: Shows `light-lg.svg` (dark mode classes hide it: `dark:hidden`)
- **Dark mode**: Shows `dark-lg.svg` (hidden by default with `hidden`, shown in dark mode with `dark:block`)

## Implementation

```tsx
const GradientImage = () => {
  return (
    <Center>
      {/* Light mode gradient image - hidden in dark mode */}
      <Image
        source={"/assets/light-lg.svg"}
        alt="linear-gradient light mode"
        className="h-64 w-96 dark:hidden"
      />
      {/* Dark mode gradient image - hidden in light mode, shown in dark mode */}
      <Image
        source={"/assets/dark-lg.svg"}
        alt="linear-gradient dark mode"
        className="h-64 w-96 hidden dark:block"
      />
    </Center>
  );
};
```

## Key Tailwind Classes

- `dark:hidden` - Hides the element when dark mode is active
- `hidden dark:block` - Hides the element by default, but shows it (`block`) when dark mode is active

## Assets Required

- `/assets/light-lg.svg` - Gradient image for light mode
- `/assets/dark-lg.svg` - Gradient image for dark mode

The color mode is managed by the GluestackUIProvider and automatically adds/removes the `dark` class on the document element, which triggers the Tailwind conditional styles.

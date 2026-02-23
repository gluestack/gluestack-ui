# Testing, Colors & Supported Properties

Guide for testing animations with Jest, animating colors, and list of animatable properties.

## Table of Contents
- [Testing with Jest](#testing-with-jest)
- [Animating Colors](#animating-colors)
- [Supported Properties](#supported-properties)

---

## Testing with Jest

Reanimated provides testing utilities for Jest to mock and test animations.

### Setup

1. Add to `jest-setup.js`:

```js
require('react-native-reanimated').setUpTests();
```

Optional config: `setUpTests({ fps: 60 })`

2. Update `jest.config.js`:

```js
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup.js'],
};
```

### Testing API

#### toHaveAnimatedStyle

```tsx
import { render, fireEvent } from '@testing-library/react-native';

test('animates width on press', () => {
  jest.useFakeTimers();

  const { getByTestId } = render(<AnimatedComponent />);
  const view = getByTestId('animated-view');
  const button = getByTestId('trigger-button');

  // Initial state
  expect(view).toHaveAnimatedStyle({ width: 100 });

  // Trigger animation
  fireEvent.press(button);

  // Advance time (half of 500ms animation)
  jest.advanceTimersByTime(250);

  // Check intermediate state
  expect(view).toHaveAnimatedStyle({ width: 150 });

  // Complete animation
  jest.runAllTimers();

  // Check final state
  expect(view).toHaveAnimatedStyle({ width: 200 });
});
```

#### Matchers

| Matcher | Description |
|---------|-------------|
| `toHaveAnimatedStyle(style)` | Check specific animated styles |
| `toHaveAnimatedStyle(style, { shouldMatchAllProps: true })` | Check ALL styles match |
| `toHaveAnimatedProps(props)` | Check animated props (SVG, etc.) |

#### Timer Control

```tsx
// Use fake timers
jest.useFakeTimers();

// Advance by specific time
jest.advanceTimersByTime(250);

// Run all pending timers
jest.runAllTimers();
```

### Testing react-native-svg

```js
// In jest-setup.js or test file
jest.mock('react-native-svg', () => require('react-native-reanimated/mock'));
```

### Requirements

- Node 16+
- Jest 28+ (use `setupFilesAfterEnv`)
- Reanimated Babel plugin enabled in test environment

### Recommended Libraries

- `@testing-library/react-native`
- `@testing-library/react-hooks` for hook testing

---

## Animating Colors

Colors animate like any other value using `withTiming` or `withSpring`:

```tsx
const backgroundColor = useSharedValue('red');

// Animate directly
backgroundColor.value = withTiming('blue');

// In animated style
const style = useAnimatedStyle(() => ({
  backgroundColor: backgroundColor.value,
}));
```

### interpolateColor

For fine-grained control over color transitions:

```tsx
import { interpolateColor } from 'react-native-reanimated';

const style = useAnimatedStyle(() => ({
  backgroundColor: interpolateColor(
    progress.value,
    [0, 0.5, 1],
    ['red', 'yellow', 'green']
  ),
}));
```

#### Signature

```tsx
interpolateColor(
  value: number,
  inputRange: number[],
  outputColors: string[],
  colorSpace?: 'RGB' | 'HSV' | 'LAB',
  options?: { gamma?: number; useCorrectedHSVInterpolation?: boolean }
): string
```

#### Parameters

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `value` | number | required | Current animation progress |
| `inputRange` | number[] | required | Input breakpoints (increasing) |
| `outputColors` | string[] | required | Colors at each breakpoint |
| `colorSpace` | string | `'RGB'` | `'RGB'`, `'HSV'`, or `'LAB'` |
| `options.gamma` | number | 2.2 | Gamma correction factor |
| `options.useCorrectedHSVInterpolation` | boolean | true | Use shortest hue arc in HSV |

#### Color Spaces

| Space | Best for |
|-------|----------|
| `'RGB'` | General use, default |
| `'HSV'` | Rainbow/hue transitions |
| `'LAB'` | Perceptually uniform transitions |

#### Examples

```tsx
// Basic red to green
interpolateColor(progress.value, [0, 1], ['#FF0000', '#00FF00'])

// Multi-stop gradient
interpolateColor(
  scrollY.value,
  [0, 100, 200],
  ['white', 'blue', 'purple']
)

// HSV for rainbow effect
interpolateColor(
  rotation.value,
  [0, 360],
  ['red', 'red'],
  'HSV',
  { useCorrectedHSVInterpolation: false } // go through all hues
)

// With transparency
interpolateColor(
  opacity.value,
  [0, 1],
  ['rgba(255, 0, 0, 0)', 'rgba(255, 0, 0, 1)']
)
```

#### Color Formats Supported

- Named: `'red'`, `'blue'`, `'transparent'`
- Hex: `'#FF0000'`, `'#F00'`
- RGB: `'rgb(255, 0, 0)'`
- RGBA: `'rgba(255, 0, 0, 0.5)'`
- HSL: `'hsl(0, 100%, 50%)'`

---

## Supported Properties

Not all CSS properties are animatable in React Native. This table shows platform support.

### Fully Supported (Android + iOS + Web)

**Layout:**
- `width`, `height`, `maxWidth`, `maxHeight`, `minWidth`, `minHeight`
- `margin*` (all variants)
- `padding*` (all variants)
- `top`, `left`, `bottom`, `right`, `inset*`
- `flex`, `flexGrow`, `flexShrink`, `flexWrap`, `flexDirection`
- `justifyContent`, `alignItems`, `alignSelf`, `alignContent`
- `gap`, `rowGap`, `columnGap`
- `position`, `display`, `overflow`, `zIndex`, `aspectRatio`

**Transform:**
- `transform` (array of transforms)
- `transformOrigin`
- `opacity`
- `backfaceVisibility`

**Colors:**
- `backgroundColor`, `color`
- `borderColor`, `border*Color` (all variants)
- `shadowColor`, `outlineColor`

**Borders:**
- `borderRadius`, `border*Radius` (all variants)
- `borderWidth`, `border*Width` (all variants)
- `borderStyle`, `outlineStyle`, `outlineWidth`, `outlineOffset`

**Text:**
- `fontSize`, `fontWeight`, `fontStyle`, `fontFamily`, `fontVariant`
- `letterSpacing`, `lineHeight`
- `textAlign`, `textTransform`, `textDecorationLine`
- `textShadowColor`, `textShadowOffset`, `textShadowRadius`

**Other:**
- `boxShadow`, `filter`, `mixBlendMode`
- `cursor`, `pointerEvents`

### Platform-Specific

| Property | Android | iOS | Web |
|----------|---------|-----|-----|
| `shadowOffset` | No | Yes | Yes |
| `shadowOpacity` | No | Yes | Yes |
| `shadowRadius` | No | Yes | Yes |
| `elevation` | Yes | No | No |
| `tintColor` | Yes | Yes | No |
| `textDecorationColor` | No | Yes | Yes |
| `textAlignVertical` | Yes | No | No |
| `resizeMode` | Yes | Yes | No |

### NOT Animatable

These properties cannot be animated:
- `transformMatrix`, `rotation`, `scaleX`, `scaleY`, `translateX`, `translateY`
- `borderCurve`, `overlayColor`, `objectFit`, `writingDirection`

Use `transform: [{ rotate }, { scale }, { translateX }]` instead.

### Important Notes

**Style Inheritance:** Not supported. Properties like `textDecorationColor` won't inherit from `color`.

**Text Shadows (Web):** All shadow properties (`textShadowColor`, `textShadowOffset`, `textShadowRadius`) must be in every keyframe:

```tsx
// WRONG - shadow color overridden to black
<Animated.Text style={{
  animationName: {
    from: { textShadowRadius: 8 },
    to: { textShadowRadius: 16 },
  },
  textShadowColor: 'red', // ignored in animation!
}} />

// CORRECT - include in keyframes
<Animated.Text style={{
  animationName: {
    from: { textShadowColor: 'red', textShadowRadius: 8 },
    to: { textShadowColor: 'red', textShadowRadius: 16 },
  },
}} />
```

**Box Shadows:** Use `boxShadow` instead of separate shadow properties - it works on Android too.

**Image tintColor (iOS):** Must be set on initial render to be animatable.

**Mixed Units:** Animating between `%` and absolute values may have unexpected behavior.

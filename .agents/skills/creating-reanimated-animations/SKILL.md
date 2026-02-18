---
name: creating-reanimated-animations
description: Generate React Native Reanimated animation code for React Native apps. Use when user asks to create, implement, or add animations in React Native — including transitions, gestures, scroll-linked effects, layout animations, layout transitions, entering/exiting animations, CSS animations, CSS transitions, shared element transitions, color animations, parallax, fade, slide, scale, spring, timing, decay, keyframes, worklets, accordion, bottom sheet, flip card, collapsing header, or any motion effect using react-native-reanimated. Also use for integrating react-native-gesture-handler with Reanimated, understanding worklets, animating between screens, testing animations with Jest, or checking which properties are animatable.
---

# React Native Reanimated Code Generator

Generate performant animation code using React Native Reanimated. Supports both v3 and v4.

## Version Detection

Check the project's `package.json` to determine the version:
- **v4** (New Architecture only): requires `react-native-worklets` as separate dependency
- **v3** (supports Legacy and New Architecture): single package install

## Setup

### Reanimated v4 (latest)
```bash
npm install react-native-reanimated react-native-worklets
```
Babel plugin: `'react-native-worklets/plugin'` (must be **last** in plugins list).
For Expo: no Babel config needed. Run `npx expo prebuild` after install.

### Reanimated v3
```bash
npm install react-native-reanimated
```
Babel plugin: `'react-native-reanimated/plugin'` (must be **last** in plugins list).

## Core Pattern

Every animation follows three steps:

```tsx
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

function Component() {
  // 1. Create shared value (lives on UI thread)
  const offset = useSharedValue(0);

  // 2. Bind to style
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  // 3. Trigger animation
  const handlePress = () => {
    offset.value = withTiming(200, { duration: 500 });
  };

  return (
    <Animated.View style={[styles.box, animatedStyle]}>
      <Pressable onPress={handlePress}><Text>Move</Text></Pressable>
    </Animated.View>
  );
}
```

## Animation Selection

| User wants | Function | Key params |
|---|---|---|
| Smooth fixed-duration transition | `withTiming(to, {duration, easing})` | Default: 300ms, `Easing.inOut(Easing.quad)` |
| Natural bouncy feel | `withSpring(to, {mass, damping, stiffness})` | Default: mass=1, damping=10, stiffness=100 |
| Momentum after fling | `withDecay({velocity, clamp})` | Needs initial velocity from gesture |
| Clamp spring range | `withClamp({min, max}, withSpring(to))` | v4: limits spring overshoot |
| Loop/pulse/shake | `withRepeat(anim, reps, reverse)` | `reps=0` for infinite (v4), `reps=-1` (v3) |
| Multi-step choreography | `withSequence(anim1, anim2, ...)` | Runs in order |
| Delayed start | `withDelay(ms, anim)` | Delays any animation |

**Spring tuning:** lower `damping` (5–8) = more bounce, higher `stiffness` (150–200) = snappier, higher `mass` (2–3) = heavier.

## Quick Patterns

### Fade
```tsx
const opacity = useSharedValue(0);
const style = useAnimatedStyle(() => ({ opacity: opacity.value }));
// Show: opacity.value = withTiming(1);
// Hide: opacity.value = withTiming(0);
```

### Slide from side
```tsx
const translateX = useSharedValue(-SCREEN_WIDTH);
const style = useAnimatedStyle(() => ({
  transform: [{ translateX: translateX.value }],
}));
// Enter: translateX.value = withSpring(0);
```

### Scale on press
```tsx
const scale = useSharedValue(1);
const style = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }],
}));
// In:  scale.value = withSpring(0.95);
// Out: scale.value = withSpring(1);
```

### Interpolation
```tsx
import { interpolate, Extrapolation } from 'react-native-reanimated';

const style = useAnimatedStyle(() => ({
  opacity: interpolate(scrollY.value, [0, 100], [1, 0], Extrapolation.CLAMP),
  transform: [{
    scale: interpolate(scrollY.value, [0, 100], [1, 0.8], Extrapolation.CLAMP),
  }],
}));
```

### Scroll-linked animation
```tsx
const scrollY = useSharedValue(0);
const scrollHandler = useAnimatedScrollHandler({
  onScroll: (event) => { scrollY.value = event.contentOffset.y; },
});
<Animated.ScrollView onScroll={scrollHandler}>{children}</Animated.ScrollView>
```

Or simpler with `useScrollOffset` (v4) / `useScrollViewOffset` (v3):
```tsx
const ref = useAnimatedRef<Animated.ScrollView>();
const scrollOffset = useScrollOffset(ref); // auto-tracks scroll position
<Animated.ScrollView ref={ref}>{children}</Animated.ScrollView>
```

## Layout Animations (Mount/Unmount)

Built-in presets — no shared values needed:

```tsx
import Animated, { FadeIn, SlideInRight, SlideOutLeft } from 'react-native-reanimated';

<Animated.View entering={FadeIn.duration(400).delay(100)} exiting={SlideOutLeft.duration(300)}>
  {content}
</Animated.View>
```

Presets: `FadeIn/Out`, `SlideIn/OutLeft/Right/Up/Down`, `ZoomIn/Out`, `BounceIn/Out`, `FlipInEasyX/Y`, `LightSpeedIn/Out`, `PinwheelIn/Out`, `RollIn/Out`, `RotateIn/Out`, `StretchIn/Out`.

Modifiers: `.duration(ms)`, `.delay(ms)`, `.springify()`, `.damping(n)`, `.stiffness(n)`, `.randomDelay()`, `.reduceMotion()`, `.withCallback()`.

### Layout Transitions (position/size changes)

Animate when component position or size changes:

```tsx
import { LinearTransition, SequencedTransition } from 'react-native-reanimated';

<Animated.View layout={LinearTransition.springify().damping(15)} />
```

Transitions: `LinearTransition`, `SequencedTransition`, `FadingTransition`, `JumpingTransition`, `CurvedTransition`, `EntryExitTransition`.

### Keyframe Animations (complex entering/exiting)
```tsx
import { Keyframe } from 'react-native-reanimated';

const enteringAnimation = new Keyframe({
  0: { opacity: 0, transform: [{ translateY: -50 }] },
  50: { opacity: 0.5, transform: [{ translateY: -25 }], easing: Easing.out(Easing.quad) },
  100: { opacity: 1, transform: [{ translateY: 0 }] },
}).duration(500);

<Animated.View entering={enteringAnimation}>{content}</Animated.View>
```

For custom animations, layout transitions, and list animations, read `references/layout-animations.md`.

## CSS Animations (v4 only)

Declarative CSS-like animations using style props directly:

```tsx
<Animated.View style={{
  animationName: {
    from: { opacity: 0, transform: [{ translateY: -20 }] },
    to: { opacity: 1, transform: [{ translateY: 0 }] },
  },
  animationDuration: '500ms',
  animationTimingFunction: 'ease-out',
}} />
```

Supported props: `animationName`, `animationDuration`, `animationDelay`, `animationIterationCount`, `animationDirection`, `animationFillMode`, `animationPlayState`, `animationTimingFunction`.

## CSS Transitions (v4 only)

Automatic transitions when style values change:

```tsx
<Animated.View style={{
  width: isExpanded ? 200 : 100,
  transitionProperty: 'width',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-in-out',
}} />
```

Multiple properties: `transitionProperty: ['width', 'opacity', 'transform']` with matching `transitionDuration: ['300ms', '200ms', '500ms']`.

For detailed CSS animations/transitions reference (keyframes, timing functions, examples), read `references/css-animations-detailed.md`.

## Shared Element Transitions (Experimental)

Animate components between screens during navigation:

```tsx
// Screen A
<Animated.Image sharedTransitionTag={`photo-${id}`} source={...} />

// Screen B (same tag)
<Animated.Image sharedTransitionTag={`photo-${id}`} source={...} />
```

Requires `@react-navigation/native-stack` and feature flag. For setup and customization, read `references/shared-element-transitions.md`.

## Gesture Integration

For drag, pinch, fling, and other gesture-driven animations, read `references/gesture-patterns.md`.

Requires: `react-native-gesture-handler` + `<GestureHandlerRootView>` at app root.

## Full API Reference

For complete hook signatures, animation parameters, v3↔v4 differences, and advanced APIs, read `references/api-reference.md`.

## Worklets & Advanced APIs

For understanding worklets, `'worklet'` directive, `runOnJS`/`runOnUI`, `useAnimatedReaction`, `useFrameCallback`, `measure`, `dispatchCommand`, and performance tips, read `references/worklets-advanced.md`.

## Real-World Component Patterns

For full implementations of accordion, bottom sheet, flip card, and FAB, read `references/component-patterns.md`.

## Testing, Colors & Supported Properties

For testing animations with Jest, animating colors with `interpolateColor`, and the full list of animatable properties by platform, read `references/testing-and-properties.md`.

## Rules

- Always use `Animated.View/Text/Image/ScrollView/FlatList` — never animate plain RN components
- v4: use `runOnJS`/`runOnUI` (re-exported), or import `scheduleOnRN`/`scheduleOnUI` from `react-native-worklets`
- v3: use `runOnJS(fn)()` for heavy JS-thread logic
- Always use `Extrapolation.CLAMP` with `interpolate` unless you explicitly want extrapolation
- Combine: `withSequence(withTiming(1.2, {duration: 100}), withSpring(1))`
- Use `useReducedMotion()` to respect accessibility settings
- Test on real devices — simulator performance differs significantly
- v4: `useAnimatedKeyboard` is deprecated → use `react-native-keyboard-controller`

---

> Based on [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) by Software Mansion (MIT License)

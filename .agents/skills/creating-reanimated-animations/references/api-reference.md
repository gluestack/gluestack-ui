# Reanimated API Reference

## Table of Contents
- [Core Hooks](#core-hooks)
- [Animation Functions](#animation-functions)
- [Animation Modifiers](#animation-modifiers)
- [Easing Functions](#easing-functions)
- [Utilities](#utilities)
- [Animated Components](#animated-components)
- [Scroll Hooks](#scroll-hooks)
- [Device Hooks](#device-hooks)
- [Advanced Hooks](#advanced-hooks) → see `worklets-advanced.md`
- [v3 → v4 Migration](#v3--v4-migration)

---

## Core Hooks

### useSharedValue(initialValue)
Creates a reactive value on the UI thread.

```tsx
const sv = useSharedValue(0);
sv.value = 100;             // direct set
sv.value = withTiming(100); // animated set
```

- `.value` — read/write the current value
- `.get()` / `.set(val | fn)` — React Compiler compatible accessors
- `.modify(fn)` — mutate in-place (efficient for objects/arrays)
- Accepts: number, string, boolean, object, array

### useAnimatedStyle(updater, deps?)
Binds shared values to component styles. Returns animated style object.

```tsx
const style = useAnimatedStyle(() => ({
  opacity: opacity.value,
  transform: [{ translateX: x.value }, { scale: scale.value }],
}));
```

- `updater`: function returning style object (auto-worklet)
- `deps`: optional dependency array (only needed on web without Babel plugin)
- Re-runs whenever any captured shared value changes — does NOT trigger React re-renders
- Separate static styles from animated styles for performance

### useAnimatedProps(updater, deps?)
Like `useAnimatedStyle` but for non-style props (SVG attributes, etc.).

```tsx
const animatedProps = useAnimatedProps(() => ({ cx: x.value }));
<AnimatedCircle animatedProps={animatedProps} />
```

### useAnimatedRef()
Creates a ref for `measure()` and `scrollTo()`.

```tsx
const ref = useAnimatedRef<Animated.View>();
<Animated.View ref={ref} />
```

### useDerivedValue(updater, deps?)
Creates a read-only shared value derived from other shared values.

```tsx
const doubled = useDerivedValue(() => offset.value * 2);
```

---

## Animation Functions

### withTiming(toValue, config?, callback?)

| Param | Type | Default |
|---|---|---|
| `toValue` | number/string | required |
| `config.duration` | number (ms) | 300 |
| `config.easing` | EasingFunction | `Easing.inOut(Easing.quad)` |
| `callback` | (finished: boolean) => void | undefined |

```tsx
sv.value = withTiming(1, { duration: 500, easing: Easing.out(Easing.cubic) });
```

### withSpring(toValue, config?, callback?)

**v3 config:**

| Param | Type | Default |
|---|---|---|
| `mass` | number | 1 |
| `damping` | number | 10 |
| `stiffness` | number | 100 |
| `overshootClamping` | boolean | false |
| `restDisplacementThreshold` | number | 0.001 |
| `restSpeedThreshold` | number | 2 |

**v4 changes:** `restDisplacementThreshold`/`restSpeedThreshold` → `energyThreshold`. Duration-based config uses perceptual time (actual = 1.5× perceptual).

```tsx
sv.value = withSpring(100, { damping: 15, stiffness: 150 });
```

### withDecay(config, callback?)

| Param | Type | Default |
|---|---|---|
| `velocity` | number | required |
| `deceleration` | number | 0.998 |
| `clamp` | [min, max] | undefined |
| `rubberBandEffect` | boolean | false |
| `rubberBandFactor` | number | 0.6 |

```tsx
sv.value = withDecay({ velocity: e.velocityX, clamp: [0, MAX], rubberBandEffect: true });
```

### withRepeat(animation, reps?, reverse?, callback?)

| Param | Type | Default |
|---|---|---|
| `animation` | AnimationObject | required |
| `numberOfReps` | number | 2 (v3: `-1` = infinite, v4: `0` = infinite) |
| `reverse` | boolean | false |

```tsx
sv.value = withRepeat(withTiming(1.2, { duration: 600 }), -1, true); // v3
sv.value = withRepeat(withTiming(1.2, { duration: 600 }), 0, true);  // v4
```

### withSequence(...animations)
```tsx
sv.value = withSequence(withTiming(1.2, { duration: 100 }), withSpring(1));
```

### withDelay(delayMs, animation)
```tsx
sv.value = withDelay(500, withTiming(1));
```

### cancelAnimation(sharedValue)
```tsx
cancelAnimation(sv);
```

---

## Animation Modifiers

### withClamp(config, animation) — v4 only
Limits animation range. Useful to prevent spring overshoot.

```tsx
sv.value = withClamp({ min: 0, max: 100 }, withSpring(50));
```

---

## Easing Functions

Import: `import { Easing } from 'react-native-reanimated';`

| Function | Description |
|---|---|
| `Easing.linear` | Constant speed |
| `Easing.quad` | Quadratic |
| `Easing.cubic` | Cubic |
| `Easing.sin` | Sine curve |
| `Easing.circle` | Circular |
| `Easing.exp` | Exponential |
| `Easing.elastic(bounciness?)` | Elastic spring |
| `Easing.bounce` | Bouncing ball |
| `Easing.back(s?)` | Overshoots then returns |
| `Easing.poly(n)` | Polynomial of degree n |
| `Easing.bezier(x1, y1, x2, y2)` | Custom cubic bezier |

Wrappers: `Easing.in(fn)`, `Easing.out(fn)`, `Easing.inOut(fn)`.

---

## Utilities

### interpolate(value, inputRange, outputRange, extrapolation?)
```tsx
interpolate(sv.value, [0, 100, 200], [0, 1, 0.5], Extrapolation.CLAMP)
```

Extrapolation: `CLAMP`, `EXTEND` (default), `IDENTITY`. Per-edge: `{ extrapolateLeft: 'clamp', extrapolateRight: 'extend' }`.

### interpolateColor(value, inputRange, outputRange, colorSpace?)
```tsx
interpolateColor(progress.value, [0, 1], ['#FF0000', '#00FF00'])
```

### clamp(value, min, max)

### scrollTo(animatedRef, x, y, animated)

### getRelativeCoords(animatedRef, absoluteX, absoluteY)

For `runOnJS`, `runOnUI`, `measure`, `dispatchCommand`, `setNativeProps`, see `worklets-advanced.md`.

---

## Animated Components

Built-in: `Animated.View`, `Animated.Text`, `Animated.Image`, `Animated.ScrollView`, `Animated.FlatList`, `Animated.SectionList`.

Custom:
```tsx
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
```

---

## Scroll Hooks

### useAnimatedScrollHandler(handlers)
Full control over scroll events.

```tsx
const handler = useAnimatedScrollHandler({
  onScroll: (event) => { scrollY.value = event.contentOffset.y; },
  onBeginDrag: (event) => { /* ... */ },
  onEndDrag: (event) => { /* ... */ },
  onMomentumBegin: (event) => { /* ... */ },
  onMomentumEnd: (event) => { /* ... */ },
});
```

Supports context object for persisting state between events. Web: only `onScroll` is supported.

### useScrollOffset(animatedRef, existingSharedValue?) — v4
### useScrollViewOffset(animatedRef, existingSharedValue?) — v3
Simplified scroll tracking. Auto-detects horizontal/vertical.

```tsx
const ref = useAnimatedRef<Animated.ScrollView>();
const offset = useScrollOffset(ref);
```

---

## Device Hooks

### useReducedMotion()
Returns `boolean` — whether user has reduced motion enabled. Use to conditionally disable animations.

```tsx
const reducedMotion = useReducedMotion();
const entering = reducedMotion ? undefined : FadeIn.duration(400);
```

### useAnimatedSensor(sensorType, config?)
```tsx
const sensor = useAnimatedSensor(SensorType.ROTATION);
// sensor.sensor.value → { pitch, roll, yaw, qx, qy, qz, qw }
```

Types: `GYROSCOPE`, `ACCELEROMETER`, `ROTATION`, `GRAVITY`, `MAGNETIC_FIELD`.

### useAnimatedKeyboard(config?) — DEPRECATED in v4
Migrate to `react-native-keyboard-controller`.

---

## Advanced Hooks

For `useAnimatedReaction`, `useFrameCallback`, `useComposedEventHandler`, `useEvent`, `useHandler`, see `worklets-advanced.md`.

---

## v3 → v4 Migration

| v3 | v4 |
|---|---|
| `npm install react-native-reanimated` | `npm install react-native-reanimated react-native-worklets` |
| Babel: `'react-native-reanimated/plugin'` | Babel: `'react-native-worklets/plugin'` |
| Supports Legacy + New Architecture | New Architecture only |
| `withRepeat(anim, -1)` (infinite) | `withRepeat(anim, 0)` (infinite) |
| `restDisplacementThreshold` | `energyThreshold` |
| `useScrollViewOffset` | `useScrollOffset` |
| `useWorkletCallback` | `useCallback` + `'worklet'` directive |
| `useAnimatedGestureHandler` | Gesture Handler 2 API |
| `runOnJS` / `runOnUI` | Also available as `scheduleOnRN` / `scheduleOnUI` |

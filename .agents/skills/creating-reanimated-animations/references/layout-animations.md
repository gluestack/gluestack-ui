# Layout Animations Reference

Complete guide to Layout Transitions, Custom Animations, and List Animations.

## Table of Contents
- [Layout Transitions](#layout-transitions)
- [Custom Entering/Exiting Animations](#custom-enteringexiting-animations)
- [Custom Layout Transitions](#custom-layout-transitions)
- [List Layout Animations](#list-layout-animations)
- [Layout Animation Config](#layout-animation-config)

---

## Layout Transitions

Animate position and size changes when a component's layout changes. Apply via the `layout` prop.

```tsx
import Animated, { LinearTransition } from 'react-native-reanimated';

<Animated.View layout={LinearTransition.duration(300)} />
```

### Available Transitions

| Transition | Behavior |
|------------|----------|
| `LinearTransition` | Animates position and dimensions together |
| `SequencedTransition` | Animates X/width first, then Y/height |
| `FadingTransition` | Fades out at old position, fades in at new |
| `JumpingTransition` | Element "jumps" to new position |
| `CurvedTransition` | Different easing for each property |
| `EntryExitTransition` | Uses entering/exiting animations |

### LinearTransition

```tsx
import { LinearTransition, Easing } from 'react-native-reanimated';

// Timing-based
LinearTransition.duration(400).easing(Easing.out(Easing.quad))

// Spring-based
LinearTransition.springify().damping(15).stiffness(120)
```

**Modifiers:**
- `.duration(ms)` — animation length (default: 300)
- `.delay(ms)` — delay before start
- `.easing(fn)` — easing function (ignored with springify)
- `.springify()` — enable spring physics
- `.damping(n)` — spring damping (default: 10)
- `.stiffness(n)` — spring stiffness (default: 100)
- `.mass(n)` — spring mass (default: 1)
- `.overshootClamping(bool)` — prevent overshoot
- `.reduceMotion(ReduceMotion.Never)` — accessibility
- `.withCallback((finished) => {})` — completion callback

### SequencedTransition

Animates X and width first, then Y and height.

```tsx
SequencedTransition.duration(500).reverse()
```

- `.reverse()` — animate Y/height first instead

### FadingTransition

Component fades out at old position, then fades in at new position.

```tsx
FadingTransition.duration(600)
```

### JumpingTransition

Creates a "jumping" effect when moving to new position.

```tsx
JumpingTransition.duration(400)
```

### CurvedTransition

Different easing per property for curved movement paths.

```tsx
import { CurvedTransition, Easing } from 'react-native-reanimated';

CurvedTransition
  .duration(500)
  .easingX(Easing.in(Easing.exp))
  .easingY(Easing.out(Easing.quad))
  .easingWidth(Easing.in(Easing.ease))
  .easingHeight(Easing.out(Easing.exp))
```

### EntryExitTransition

Uses entering/exiting animations for layout changes.

```tsx
import { EntryExitTransition, FlipInEasyX, FlipOutEasyY } from 'react-native-reanimated';

EntryExitTransition
  .entering(FlipInEasyX)
  .exiting(FlipOutEasyY)
```

---

## Custom Entering/Exiting Animations

Create fully custom mount/unmount animations when presets aren't enough.

### Custom Entering

```tsx
function CustomEntering(targetValues) {
  'worklet';
  const animations = {
    opacity: withTiming(1, { duration: 500 }),
    transform: [
      { translateY: withSpring(0) },
      { scale: withTiming(1) },
    ],
  };
  const initialValues = {
    opacity: 0,
    transform: [
      { translateY: -targetValues.targetHeight },
      { scale: 0.5 },
    ],
  };
  return { initialValues, animations };
}

<Animated.View entering={CustomEntering} />
```

**Available targetValues:**
- `targetOriginX`, `targetOriginY` — position in parent
- `targetWidth`, `targetHeight` — dimensions
- `targetGlobalOriginX`, `targetGlobalOriginY` — global position
- `targetBorderRadius`
- `windowWidth`, `windowHeight`

### Custom Exiting

```tsx
function CustomExiting(currentValues) {
  'worklet';
  const animations = {
    opacity: withTiming(0, { duration: 300 }),
    transform: [{ translateX: withTiming(currentValues.windowWidth) }],
  };
  const initialValues = {
    opacity: 1,
    transform: [{ translateX: 0 }],
  };
  return { initialValues, animations };
}

<Animated.View exiting={CustomExiting} />
```

**Available currentValues:**
- `currentOriginX`, `currentOriginY` — position in parent
- `currentWidth`, `currentHeight` — dimensions
- `currentGlobalOriginX`, `currentGlobalOriginY` — global position
- `currentBorderRadius`
- `windowWidth`, `windowHeight`

### With Callback

```tsx
function CustomEntering(values) {
  'worklet';
  return {
    initialValues: { opacity: 0 },
    animations: { opacity: withTiming(1) },
    callback: (finished) => {
      if (finished) runOnJS(onAnimationComplete)();
    },
  };
}
```

---

## Custom Layout Transitions

For fully custom position/size change animations.

```tsx
function CustomLayoutTransition(values) {
  'worklet';
  const animations = {
    originX: withSpring(values.targetOriginX),
    originY: withSpring(values.targetOriginY),
    width: withTiming(values.targetWidth),
    height: withTiming(values.targetHeight),
  };
  const initialValues = {
    originX: values.currentOriginX,
    originY: values.currentOriginY,
    width: values.currentWidth,
    height: values.currentHeight,
  };
  return { initialValues, animations };
}

<Animated.View layout={CustomLayoutTransition} />
```

**Available values (both current and target):**
- `originX`, `originY` — position
- `width`, `height` — dimensions
- `globalOriginX`, `globalOriginY` — global position
- `borderRadius`
- `windowWidth`, `windowHeight`

---

## List Layout Animations

Animate items in lists (FlatList, map) when items are added, removed, or reordered.

### Basic Usage

```tsx
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';

function AnimatedList({ items }) {
  return (
    <View>
      {items.map((item) => (
        <Animated.View
          key={item.id}
          entering={FadeIn}
          exiting={FadeOut}
          layout={LinearTransition}
        >
          <Text>{item.title}</Text>
        </Animated.View>
      ))}
    </View>
  );
}
```

### With FlatList

```tsx
import Animated from 'react-native-reanimated';

const AnimatedFlatList = Animated.FlatList;

function List({ data }) {
  return (
    <AnimatedFlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Animated.View
          entering={SlideInRight.delay(100)}
          exiting={SlideOutLeft}
          layout={LinearTransition.springify()}
        >
          <ListItem item={item} />
        </Animated.View>
      )}
      itemLayoutAnimation={LinearTransition}
    />
  );
}
```

### Staggered Entry

```tsx
items.map((item, index) => (
  <Animated.View
    key={item.id}
    entering={FadeInDown.delay(index * 100)}
    layout={LinearTransition}
  >
    {/* content */}
  </Animated.View>
))
```

### Shuffle Animation

```tsx
function ShuffleList() {
  const [items, setItems] = useState(initialItems);

  const shuffle = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  return (
    <>
      <Button onPress={shuffle} title="Shuffle" />
      {items.map((item) => (
        <Animated.View key={item.id} layout={JumpingTransition.duration(400)}>
          <Text>{item.name}</Text>
        </Animated.View>
      ))}
    </>
  );
}
```

---

## Layout Animation Config

Global configuration for layout animations.

### LayoutAnimationConfig Component

```tsx
import { LayoutAnimationConfig } from 'react-native-reanimated';

// Disable all layout animations for children
<LayoutAnimationConfig skipEntering skipExiting>
  <Animated.View entering={FadeIn}> {/* won't animate */}
    {children}
  </Animated.View>
</LayoutAnimationConfig>
```

**Props:**
- `skipEntering` — skip entering animations
- `skipExiting` — skip exiting animations

### ReducedMotionConfig

```tsx
import { ReducedMotionConfig, ReduceMotion } from 'react-native-reanimated';

// Force animations on (ignore system preference)
<ReducedMotionConfig mode={ReduceMotion.Never}>
  {children}
</ReducedMotionConfig>

// Force animations off
<ReducedMotionConfig mode={ReduceMotion.Always}>
  {children}
</ReducedMotionConfig>
```

**ReduceMotion values:**
- `ReduceMotion.System` — respect device setting (default)
- `ReduceMotion.Always` — always reduce motion
- `ReduceMotion.Never` — never reduce motion

---

## Platform Compatibility

| Feature | Android | iOS | Web |
|---------|---------|-----|-----|
| Layout Transitions | Yes | Yes | Yes |
| Custom Entering/Exiting | Yes | Yes | No |
| Custom Layout | Yes | Yes | No |
| List Animations | Yes | Yes | Partial |

# Gesture + Animation Patterns

Integration patterns for `react-native-gesture-handler` with Reanimated.

## Setup

```bash
npm install react-native-gesture-handler
```

Wrap app root:
```tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {children}
    </GestureHandlerRootView>
  );
}
```

## Pattern: Draggable Element

```tsx
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

function Draggable() {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const savedX = useSharedValue(0);
  const savedY = useSharedValue(0);

  const pan = Gesture.Pan()
    .onStart(() => {
      savedX.value = x.value;
      savedY.value = y.value;
    })
    .onUpdate((e) => {
      x.value = savedX.value + e.translationX;
      y.value = savedY.value + e.translationY;
    })
    .onEnd(() => {
      // Snap back to origin
      x.value = withSpring(0);
      y.value = withSpring(0);
    });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.box, style]} />
    </GestureDetector>
  );
}
```

## Pattern: Pinch to Zoom

```tsx
function PinchableImage() {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinch = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
      // Optionally clamp
      if (scale.value < 1) {
        scale.value = withSpring(1);
        savedScale.value = 1;
      }
    });

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <GestureDetector gesture={pinch}>
      <Animated.Image source={src} style={[styles.image, style]} />
    </GestureDetector>
  );
}
```

## Pattern: Swipe to Dismiss

```tsx
import { withDecay } from 'react-native-reanimated';

function SwipeToDismiss({ onDismiss, children }) {
  const translateX = useSharedValue(0);
  const THRESHOLD = 150;

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
    })
    .onEnd((e) => {
      if (Math.abs(translateX.value) > THRESHOLD) {
        const direction = translateX.value > 0 ? 1 : -1;
        translateX.value = withTiming(direction * SCREEN_WIDTH, {}, () => {
          runOnJS(onDismiss)();
        });
      } else {
        translateX.value = withSpring(0);
      }
    });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: interpolate(
      Math.abs(translateX.value),
      [0, SCREEN_WIDTH],
      [1, 0.3],
      Extrapolation.CLAMP
    ),
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={style}>{children}</Animated.View>
    </GestureDetector>
  );
}
```

## Pattern: Tap with Scale Feedback

```tsx
function TapButton({ onPress, children }) {
  const scale = useSharedValue(1);

  const tap = Gesture.Tap()
    .onBegin(() => {
      scale.value = withTiming(0.92, { duration: 100 });
    })
    .onFinalize(() => {
      scale.value = withSpring(1);
    })
    .onEnd(() => {
      runOnJS(onPress)();
    });

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={style}>{children}</Animated.View>
    </GestureDetector>
  );
}
```

## Pattern: Fling with Momentum (Decay)

```tsx
function FlingableCard() {
  const x = useSharedValue(0);

  const fling = Gesture.Pan()
    .onUpdate((e) => {
      x.value = e.translationX;
    })
    .onEnd((e) => {
      x.value = withDecay({
        velocity: e.velocityX,
        clamp: [-SCREEN_WIDTH, SCREEN_WIDTH],
      });
    });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }],
  }));

  return (
    <GestureDetector gesture={fling}>
      <Animated.View style={[styles.card, style]} />
    </GestureDetector>
  );
}
```

## Composing Multiple Gestures

```tsx
// Simultaneous: both gestures active at same time
const composed = Gesture.Simultaneous(panGesture, pinchGesture);

// Exclusive: first matching gesture wins
const composed = Gesture.Exclusive(doubleTap, singleTap);

// Race: first gesture to activate wins, others cancel
const composed = Gesture.Race(swipe, longPress);
```

## Available Gesture Types

| Gesture | Events | Common use |
|---|---|---|
| `Gesture.Pan()` | onStart, onUpdate, onEnd | Drag, swipe, slide |
| `Gesture.Pinch()` | onStart, onUpdate, onEnd | Zoom, scale |
| `Gesture.Rotation()` | onStart, onUpdate, onEnd | Rotate elements |
| `Gesture.Tap()` | onBegin, onEnd, onFinalize | Tap feedback |
| `Gesture.LongPress()` | onStart, onEnd | Press-and-hold |
| `Gesture.Fling()` | onStart, onEnd | Quick directional swipes |

All gestures support: `.enabled(bool)`, `.shouldCancelWhenOutside(bool)`, `.hitSlop(n)`, `.minDistance(n)`.

# Real-World Component Patterns

Complete implementations of common animated components. Based on official Reanimated examples.

## Table of Contents
- [Accordion](#accordion)
- [Bottom Sheet](#bottom-sheet)
- [Flip Card](#flip-card)
- [Floating Action Button (FAB)](#floating-action-button-fab)
- [Collapsing Header](#collapsing-header)

---

## Accordion

Expandable/collapsible content sections.

```tsx
import Animated, { useSharedValue, useAnimatedStyle, withTiming, useDerivedValue } from 'react-native-reanimated';
import { View, Text, Pressable, StyleSheet } from 'react-native';

function AccordionItem({ title, children, isExpanded, onToggle, duration = 300 }) {
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isExpanded ? 1 : 0, { duration })
  );

  const bodyStyle = useAnimatedStyle(() => ({
    height: height.value * progress.value,
    opacity: progress.value,
  }));

  return (
    <View style={styles.item}>
      <Pressable onPress={onToggle} style={styles.header}>
        <Text>{title}</Text>
      </Pressable>
      <Animated.View style={[styles.body, bodyStyle]}>
        <View
          onLayout={(e) => { height.value = e.nativeEvent.layout.height; }}
          style={styles.bodyInner}>
          {children}
        </View>
      </Animated.View>
    </View>
  );
}
```

Key technique: measure content height with `onLayout`, then animate `height * progress` from 0→1.

---

## Bottom Sheet

Surface anchored to screen bottom with backdrop.

```tsx
import Animated, { useSharedValue, useAnimatedStyle, useDerivedValue, withTiming, interpolate } from 'react-native-reanimated';

function BottomSheet({ isOpen, toggleSheet, duration = 500, children }) {
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration })
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: progress.value * height.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0.5, 0]),
    pointerEvents: isOpen.value ? 'auto' : 'none',
  }));

  return (
    <>
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <Pressable style={{ flex: 1 }} onPress={toggleSheet} />
      </Animated.View>
      <Animated.View
        onLayout={(e) => { height.value = e.nativeEvent.layout.height; }}
        style={[styles.sheet, sheetStyle]}>
        {children}
      </Animated.View>
    </>
  );
}
```

Key technique: `isOpen` is a shared value, translate sheet off-screen by its height, interpolate backdrop opacity.

---

## Flip Card

Shows different content on front and back.

```tsx
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';

function FlipCard({ front, back, duration = 500, direction = 'y' }) {
  const isFlipped = useSharedValue(false);

  const regularStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
    return {
      transform: [{ [`rotate${direction.toUpperCase()}`]: `${rotateValue}deg` }],
      backfaceVisibility: 'hidden',
    };
  });

  const flippedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);
    return {
      transform: [{ [`rotate${direction.toUpperCase()}`]: `${rotateValue}deg` }],
      backfaceVisibility: 'hidden',
    };
  });

  const handleFlip = () => {
    isFlipped.value = !isFlipped.value;
  };

  return (
    <Pressable onPress={handleFlip}>
      <Animated.View style={[styles.card, regularStyle]}>{front}</Animated.View>
      <Animated.View style={[styles.card, styles.cardBack, flippedStyle]}>{back}</Animated.View>
    </Pressable>
  );
}
```

Key technique: two overlapping views, rotate in opposite ranges (0→180 and 180→360), `backfaceVisibility: 'hidden'`.

---

## Floating Action Button (FAB)

Expandable action menu.

```tsx
import Animated, { useSharedValue, useAnimatedStyle, withDelay, withSpring, withTiming, interpolate } from 'react-native-reanimated';

function FAB({ actions }) {
  const isExpanded = useSharedValue(false);

  const mainStyle = useAnimatedStyle(() => ({
    transform: [{
      rotate: withTiming(isExpanded.value ? '45deg' : '0deg', { duration: 200 }),
    }],
  }));

  return (
    <View style={styles.fabContainer}>
      {actions.map((action, index) => (
        <FABItem key={index} action={action} index={index} isExpanded={isExpanded} total={actions.length} />
      ))}
      <Pressable onPress={() => { isExpanded.value = !isExpanded.value; }}>
        <Animated.View style={[styles.fabMain, mainStyle]}>
          <Text style={styles.fabIcon}>+</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

function FABItem({ action, index, isExpanded, total }) {
  const style = useAnimatedStyle(() => {
    const moveValue = isExpanded.value ? -60 * (index + 1) : 0;
    return {
      transform: [{
        translateY: withDelay(index * 50, withSpring(moveValue)),
      }],
      opacity: withDelay(index * 50, withTiming(isExpanded.value ? 1 : 0)),
    };
  });

  return (
    <Animated.View style={[styles.fabItem, style]}>
      <Pressable onPress={action.onPress}>
        <Text>{action.icon}</Text>
      </Pressable>
    </Animated.View>
  );
}
```

Key technique: stagger child buttons with `withDelay(index * 50, ...)`, translateY upward from main button position.

---

## Collapsing Header

Header that shrinks on scroll.

```tsx
import Animated, { useAnimatedScrollHandler, useSharedValue, useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated';

const HEADER_MAX = 200;
const HEADER_MIN = 60;

function CollapsingHeader() {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => { scrollY.value = event.contentOffset.y; },
  });

  const headerStyle = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, HEADER_MAX - HEADER_MIN], [HEADER_MAX, HEADER_MIN], Extrapolation.CLAMP),
    opacity: interpolate(scrollY.value, [0, HEADER_MAX - HEADER_MIN], [1, 0.8], Extrapolation.CLAMP),
  }));

  const titleStyle = useAnimatedStyle(() => ({
    fontSize: interpolate(scrollY.value, [0, HEADER_MAX - HEADER_MIN], [28, 18], Extrapolation.CLAMP),
  }));

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.Text style={[styles.title, titleStyle]}>My App</Animated.Text>
      </Animated.View>
      <Animated.ScrollView onScroll={scrollHandler} contentContainerStyle={{ paddingTop: HEADER_MAX }}>
        {/* content */}
      </Animated.ScrollView>
    </View>
  );
}
```

Key technique: interpolate header height and title size based on scrollY, clamp to prevent over-shrinking.

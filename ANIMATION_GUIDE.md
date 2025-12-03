# Animation Guide: React Native Reanimated Patterns

This guide explains the animation techniques used in `usage-variant-flatlist.tsx` so you can create similar animations in the future.

## 📚 Core Concepts

### 1. **React Native Reanimated**
A library that runs animations on the UI thread (60fps), not the JavaScript thread. This makes animations smooth and performant.

**Key Difference:**
- Regular React Native animations → Run on JS thread → Can lag
- Reanimated → Runs on UI thread → Always smooth

---

## 🎯 Animation Pattern #1: Scroll-Based Interpolation

### What It Does
Animates elements based on scroll position. As you scroll, properties (opacity, scale, etc.) change smoothly.

### Code Example (Variant Names)

```typescript
const scrollX = useSharedValue(0); // Track scroll position

const rVariantNameStyle = useAnimatedStyle(() => {
  // Define input range: when scrollX is at these positions
  const inputRange = [
    (index - 1) * width,  // Previous item's position
    index * width,        // Current item's position  
    (index + 1) * width,  // Next item's position
  ];
  
  // Interpolate opacity: fade in/out based on scroll
  const opacity = interpolate(
    scrollX.value,        // Current scroll position
    inputRange,          // Input range (scroll positions)
    [0.3, 1, 0.3],      // Output range (opacity values)
    Extrapolation.CLAMP  // Don't go beyond these values
  );

  // Interpolate scale: grow/shrink based on scroll
  const scale = interpolate(
    scrollX.value,
    inputRange,
    [0.85, 1, 0.85],    // Scale from 85% to 100% to 85%
    Extrapolation.CLAMP
  );

  return {
    opacity,
    transform: [{ scale }],
  };
});
```

### How It Works

1. **Input Range**: Defines scroll positions where animation should change
   - `(index - 1) * width` = When previous item is centered
   - `index * width` = When current item is centered
   - `(index + 1) * width` = When next item is centered

2. **Output Range**: Defines what values to output
   - `[0.3, 1, 0.3]` = Fade from 30% → 100% → 30%
   - `[0.85, 1, 0.85]` = Scale from 85% → 100% → 85%

3. **Interpolation**: Maps scroll position to animation value
   - If scrollX is halfway between items, opacity will be halfway between 0.3 and 1

4. **Extrapolation.CLAMP**: Prevents values outside the range
   - Values stay between 0.3 and 1, never go negative or above 1

### Visual Example

```
Scroll Position:    0    100   200   300   400
                   |-----|-----|-----|-----|
Item Index:        0     1     2     3     4

When scrollX = 200 (item 2 centered):
- Item 2: opacity = 1.0, scale = 1.0  (fully visible)
- Item 1: opacity = 0.3, scale = 0.85 (faded)
- Item 3: opacity = 0.3, scale = 0.85 (faded)
```

---

## 🎯 Animation Pattern #2: Shared Values & Scroll Handler

### What It Does
Tracks scroll position in real-time and updates animations automatically.

### Code Example

```typescript
// 1. Create a shared value to track scroll position
const scrollX = useSharedValue(0);

// 2. Create scroll handler that updates shared value
const scrollHandler = useAnimatedScrollHandler({
  onScroll: (event) => {
    scrollX.set(event.contentOffset.x); // Update on every scroll
  },
});

// 3. Use in FlatList
<Animated.FlatList
  onScroll={scrollHandler}
  scrollEventThrottle={16} // Update 60 times per second (60fps)
/>
```

### How It Works

1. **useSharedValue**: Creates a value that can be read/written from UI thread
   - `scrollX.value` = current scroll position
   - Updates happen on UI thread (fast!)

2. **useAnimatedScrollHandler**: Handles scroll events on UI thread
   - Runs every frame (60fps)
   - Updates `scrollX` immediately

3. **scrollEventThrottle={16}**: Updates every 16ms (60fps)
   - Lower = smoother but more CPU
   - 16ms = 60fps (standard)

---

## 🎯 Animation Pattern #3: useAnimatedStyle Hook

### What It Does
Creates animated styles that update automatically when shared values change.

### Code Example (Variant Item Opacity)

```typescript
const VariantItem = ({ index, scrollY, itemHeight }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.get() / itemHeight,
        [index - 0.5, index, index + 0.5], // Input range
        [0, 1, 0],                          // Output range
        Extrapolation.CLAMP
      ),
      transform: [{
        scale: interpolate(
          scrollY.get() / itemHeight,
          [index - 0.5, index, index + 0.5],
          [0.9, 1, 0.9],
          Extrapolation.CLAMP
        ),
      }],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      {content}
    </Animated.View>
  );
};
```

### Key Points

1. **Must use `scrollY.get()`** inside `useAnimatedStyle`
   - `.get()` reads the shared value
   - `.value` only works outside animated functions

2. **Returns style object** that updates automatically
   - When `scrollY` changes → style updates → component re-renders

3. **Works with any style property**
   - `opacity`, `transform`, `backgroundColor`, `width`, `height`, etc.

---

## 🎯 Animation Pattern #4: Dynamic Blur Effect

### What It Does
Animates blur intensity based on scroll position (iOS only).

### Code Example

```typescript
const animatedProps = useAnimatedProps(() => {
  if (data.length === 1) {
    return { intensity: 0 }; // No blur if only one item
  }

  // Create input/output ranges dynamically
  const inputRange: number[] = [];
  const outputRange: number[] = [];

  for (let i = 0; i < data.length; i++) {
    inputRange.push(i);        // Item index
    outputRange.push(0);        // No blur when item is centered

    if (i < data.length - 1) {
      inputRange.push(i + 0.5); // Between items
      outputRange.push(30);      // Maximum blur between items
    }
  }

  return {
    intensity: interpolate(
      scrollX.get() / itemWidth, // Current scroll position
      inputRange,                 // Item positions
      outputRange                 // Blur intensities
    ),
  };
});

// Use with Animated component
<AnimatedBlurView animatedProps={animatedProps} />
```

### How It Works

1. **Dynamic Ranges**: Creates ranges based on number of items
   - More items = more blur points

2. **Blur Pattern**:
   - Item centered → `intensity: 0` (no blur)
   - Between items → `intensity: 30` (maximum blur)

3. **useAnimatedProps**: Animates component props (not styles)
   - Used for props like `intensity`, `progress`, etc.

---

## 🎯 Animation Pattern #5: Centering Active Item

### What It Does
Automatically scrolls a horizontal list to center the active item.

### Code Example

```typescript
// 1. Track item positions
const itemPositionsRef = useRef<number[]>([]);

// 2. Measure each item's position
<Animated.View
  onLayout={(event) => {
    const { x, width: itemWidth } = event.nativeEvent.layout;
    itemPositionsRef.current[index] = x + itemWidth / 2; // Store center position
  }}
/>

// 3. Scroll to center active item
const scrollVariantNamesToActive = useCallback((activeIndex: number) => {
  if (variantNamesScrollRef.current) {
    const itemCenter = itemPositionsRef.current[activeIndex];
    const scrollPosition = Math.max(0, itemCenter - width / 2);
    
    variantNamesScrollRef.current.scrollTo({
      x: scrollPosition,
      animated: true, // Smooth scroll
    });
  }
}, [width]);
```

### How It Works

1. **onLayout**: Measures each item's position after render
   - `x` = left position
   - `x + width/2` = center position

2. **Calculate Scroll Position**:
   - `itemCenter - width / 2` = Position to center item on screen
   - `Math.max(0, ...)` = Prevent negative scroll

3. **scrollTo**: Smoothly scrolls to calculated position
   - `animated: true` = Smooth animation
   - `animated: false` = Instant jump

---

## 📖 Common Animation Formulas

### Fade In/Out
```typescript
opacity: interpolate(
  scrollPosition,
  [start, center, end],
  [0, 1, 0],  // Fade in → Full → Fade out
  Extrapolation.CLAMP
)
```

### Scale Up/Down
```typescript
scale: interpolate(
  scrollPosition,
  [start, center, end],
  [0.8, 1, 0.8],  // Small → Normal → Small
  Extrapolation.CLAMP
)
```

### Slide In/Out
```typescript
translateX: interpolate(
  scrollPosition,
  [start, center, end],
  [-50, 0, 50],  // Left → Center → Right
  Extrapolation.CLAMP
)
```

### Color Transition
```typescript
backgroundColor: interpolateColor(
  scrollPosition,
  [start, end],
  ['#000000', '#FFFFFF']  // Black → White
)
```

---

## 🛠️ Step-by-Step: Creating Your Own Scroll Animation

### Step 1: Set Up Shared Value
```typescript
const scrollX = useSharedValue(0);
```

### Step 2: Create Scroll Handler
```typescript
const scrollHandler = useAnimatedScrollHandler({
  onScroll: (event) => {
    scrollX.set(event.contentOffset.x);
  },
});
```

### Step 3: Create Animated Style
```typescript
const animatedStyle = useAnimatedStyle(() => {
  return {
    opacity: interpolate(
      scrollX.value,
      [0, 100, 200],      // Input: scroll positions
      [0, 1, 0],          // Output: opacity values
      Extrapolation.CLAMP
    ),
  };
});
```

### Step 4: Apply to Component
```typescript
<Animated.View style={animatedStyle}>
  <YourContent />
</Animated.View>
```

### Step 5: Connect to ScrollView/FlatList
```typescript
<Animated.ScrollView
  onScroll={scrollHandler}
  scrollEventThrottle={16}
>
  {/* content */}
</Animated.ScrollView>
```

---

## 🎨 Advanced Tips

### 1. **Multiple Animations on Same Element**
```typescript
const animatedStyle = useAnimatedStyle(() => {
  return {
    opacity: interpolate(...),
    transform: [
      { scale: interpolate(...) },
      { translateX: interpolate(...) },
      { rotate: interpolate(...) },
    ],
  };
});
```

### 2. **Conditional Animations**
```typescript
const animatedStyle = useAnimatedStyle(() => {
  if (someCondition) {
    return { opacity: 1 };
  }
  return {
    opacity: interpolate(...),
  };
});
```

### 3. **Chained Animations**
```typescript
// Animate based on another animation
const scale = interpolate(opacity.value, [0, 1], [0.5, 1]);
```

### 4. **Performance Optimization**
- Use `memo()` for animated components
- Use `getItemLayout` for FlatList
- Keep interpolations simple
- Avoid complex calculations in `useAnimatedStyle`

---

## 🐛 Common Mistakes

### ❌ Wrong: Using `.value` inside `useAnimatedStyle`
```typescript
const style = useAnimatedStyle(() => {
  return { opacity: scrollX.value }; // ❌ Wrong!
});
```

### ✅ Correct: Use `.get()`
```typescript
const style = useAnimatedStyle(() => {
  return { opacity: scrollX.get() }; // ✅ Correct!
});
```

### ❌ Wrong: Using regular React state
```typescript
const [scrollX, setScrollX] = useState(0); // ❌ Won't animate smoothly
```

### ✅ Correct: Use SharedValue
```typescript
const scrollX = useSharedValue(0); // ✅ Smooth animations
```

---

## 📚 Resources

- **React Native Reanimated Docs**: https://docs.swmansion.com/react-native-reanimated/
- **Interpolation Guide**: https://docs.swmansion.com/react-native-reanimated/docs/utilities/interpolate
- **Shared Values**: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#shared-value

---

## 🎯 Quick Reference

| Hook | Purpose | When to Use |
|------|---------|-------------|
| `useSharedValue` | Store animated value | Track scroll position, progress, etc. |
| `useAnimatedStyle` | Create animated styles | Animate opacity, transform, colors |
| `useAnimatedProps` | Animate component props | Animate blur intensity, progress bars |
| `useAnimatedScrollHandler` | Handle scroll events | Track scroll position |
| `interpolate` | Map values | Convert scroll → opacity, scale, etc. |
| `Extrapolation.CLAMP` | Limit values | Keep values within range |

---

Happy animating! 🎨✨

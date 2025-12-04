# Accordion Animation Customization

The Accordion component now uses **React Native Reanimated** for smooth, performant animations that run on the UI thread.

## Features

✅ **Smooth 60fps animations** on native
✅ **Icon rotation** when accordion expands/collapses
✅ **Fully customizable** animation timings and behavior
✅ **No JS thread blocking** - animations run independently

## Customizing Animations

All animation configurations are located in `animation-config.ts`. Simply modify this file to customize the accordion's animation behavior.

### Available Options

```typescript
// src/components/ui/accordion/animation-config.ts

export const accordionAnimationConfig = {
  /**
   * Duration for content expand/collapse animation (in milliseconds)
   * @default 300
   */
  contentDuration: 300,

  /**
   * Duration for icon rotation animation (in milliseconds)
   * @default 300
   */
  iconDuration: 300,

  /**
   * Rotation angle for icon when accordion is expanded (in degrees)
   * @default 180 (upside down)
   * @example 90 (quarter turn), 270 (three-quarter turn), -180 (rotate counterclockwise)
   */
  iconRotation: 180,
};
```

### Example Customizations

#### Faster Animations
```typescript
export const accordionAnimationConfig = {
  contentDuration: 150,  // Faster expand/collapse
  iconDuration: 150,     // Faster icon rotation
  iconRotation: 180,
};
```

#### Slower, More Dramatic
```typescript
export const accordionAnimationConfig = {
  contentDuration: 500,  // Slower, more visible
  iconDuration: 400,     // Slightly faster icon
  iconRotation: 180,
};
```

#### Different Icon Rotation
```typescript
export const accordionAnimationConfig = {
  contentDuration: 300,
  iconDuration: 300,
  iconRotation: 90,      // Quarter turn instead of flip
};
```

#### No Icon Rotation
```typescript
export const accordionAnimationConfig = {
  contentDuration: 300,
  iconDuration: 0,       // Instant (no animation)
  iconRotation: 0,       // No rotation
};
```

## Advanced Customization

If you need more control over the animation (easing curves, spring physics, etc.), you can modify the components directly:

### Custom Easing for Content

Edit `AnimatedHeight.tsx`:

```typescript
// Change from timing to spring
height.value = withSpring(measurement.height, {
  damping: 15,
  stiffness: 150,
});
```

### Custom Icon Animation Curve

Edit `AnimatedIcon.tsx`:

```typescript
// Add custom easing
animatedValue.value = withTiming(isExpanded ? 1 : 0, {
  duration,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1), // Custom bezier curve
});
```

## Migration from Old Implementation

### What Changed

**Before (Old Animated API):**
- ❌ Ran on JS thread (could drop frames)
- ❌ Hardcoded 200ms duration in core
- ❌ No icon rotation
- ❌ Not customizable

**After (Reanimated):**
- ✅ Runs on UI thread (60fps always)
- ✅ Customizable durations
- ✅ Icon rotation included
- ✅ Fully customizable in style file

### Breaking Changes

None! The API remains the same. Your existing accordion code will work without changes.

## Why Reanimated?

**Performance:** Animations run on the UI thread, ensuring smooth 60fps even when:
- Fetching data
- Rendering lists
- Running heavy JavaScript operations
- Navigating between screens

**Better User Experience:** Users will notice the difference, especially on:
- Mid-range and low-end devices
- During app startup
- When multiple things are happening at once

## Files Overview

```
accordion/
├── index.tsx                    # Main component (imports animations)
├── AnimatedHeight.tsx          # Reanimated height animation
├── AnimatedIcon.tsx            # Reanimated icon rotation
├── animation-config.ts         # 👈 CUSTOMIZE HERE
└── ANIMATION_CUSTOMIZATION.md  # This file
```

## Need Help?

If you want to implement more complex animations:
1. Check the [Reanimated documentation](https://docs.swmansion.com/react-native-reanimated/)
2. Look at `AnimatedHeight.tsx` and `AnimatedIcon.tsx` for examples
3. All standard Reanimated APIs are available

---

**Note:** These animations are optimized for native platforms. On web, they still work but use JavaScript-based animations (consistent with Reanimated's web support).

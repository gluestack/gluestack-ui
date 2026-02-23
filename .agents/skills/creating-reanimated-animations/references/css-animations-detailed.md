# CSS Animations & Transitions (v4)

Reanimated v4 supports CSS-like declarative animations and transitions directly in styles.

## Table of Contents
- [CSS Animations](#css-animations)
- [CSS Transitions](#css-transitions)
- [Timing Functions](#timing-functions)
- [Complex Examples](#complex-examples)

---

## CSS Animations

Declarative keyframe-based animations using style props.

### Basic Syntax

```tsx
<Animated.View style={{
  animationName: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  animationDuration: '500ms',
}} />
```

### Animation Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animationName` | object/Keyframe | required | Keyframes definition |
| `animationDuration` | string | `'0s'` | Duration (`'500ms'`, `'1s'`) |
| `animationDelay` | string | `'0s'` | Delay before start |
| `animationIterationCount` | number/`'infinite'` | `1` | Repeat count |
| `animationDirection` | string | `'normal'` | Direction of play |
| `animationFillMode` | string | `'none'` | Style before/after animation |
| `animationPlayState` | string | `'running'` | Pause/resume |
| `animationTimingFunction` | string | `'ease'` | Easing function |

---

### animationName

Define keyframes using `from`/`to` or percentage keys:

```tsx
// from/to syntax
animationName: {
  from: { opacity: 0, transform: [{ translateY: -20 }] },
  to: { opacity: 1, transform: [{ translateY: 0 }] },
}

// Percentage syntax
animationName: {
  '0%': { opacity: 0, transform: [{ scale: 0.5 }] },
  '50%': { opacity: 0.5, transform: [{ scale: 1.2 }] },
  '100%': { opacity: 1, transform: [{ scale: 1 }] },
}
```

### animationDuration

```tsx
animationDuration: '300ms'  // milliseconds
animationDuration: '1.5s'   // seconds
animationDuration: '0.5s'   // half second
```

### animationDelay

```tsx
animationDelay: '200ms'     // start after 200ms
animationDelay: '-500ms'    // start 500ms into the animation (negative)
```

### animationIterationCount

```tsx
animationIterationCount: 1          // play once
animationIterationCount: 3          // play 3 times
animationIterationCount: 'infinite' // loop forever
```

### animationDirection

| Value | Description |
|-------|-------------|
| `'normal'` | Forward on each iteration |
| `'reverse'` | Backward on each iteration |
| `'alternate'` | Forward, then backward, alternating |
| `'alternate-reverse'` | Backward, then forward, alternating |

```tsx
// Pulse effect with alternate
style={{
  animationName: {
    from: { transform: [{ scale: 1 }] },
    to: { transform: [{ scale: 1.1 }] },
  },
  animationDuration: '500ms',
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
}}
```

### animationFillMode

Controls styles before and after animation:

| Value | Description |
|-------|-------------|
| `'none'` | No styles applied outside animation |
| `'forwards'` | Retain final keyframe styles after animation |
| `'backwards'` | Apply first keyframe styles during delay |
| `'both'` | Apply both forwards and backwards |

```tsx
// Keep final state after animation
animationFillMode: 'forwards'
```

### animationPlayState

```tsx
animationPlayState: 'running'  // animation plays
animationPlayState: 'paused'   // animation paused
```

Dynamic control:

```tsx
const [isPaused, setIsPaused] = useState(false);

<Animated.View style={{
  animationName: spinKeyframes,
  animationDuration: '2s',
  animationIterationCount: 'infinite',
  animationPlayState: isPaused ? 'paused' : 'running',
}} />
```

### animationTimingFunction

```tsx
animationTimingFunction: 'ease'        // default
animationTimingFunction: 'linear'
animationTimingFunction: 'ease-in'
animationTimingFunction: 'ease-out'
animationTimingFunction: 'ease-in-out'
animationTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' // custom
```

---

## CSS Transitions

Automatic animations when style values change.

### Basic Syntax

```tsx
const [isExpanded, setIsExpanded] = useState(false);

<Animated.View style={{
  width: isExpanded ? 200 : 100,
  height: isExpanded ? 200 : 100,
  transitionProperty: 'width, height',
  transitionDuration: '300ms',
}} />
```

### Transition Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `transitionProperty` | string/array | `'all'` | Properties to animate |
| `transitionDuration` | string/array | `'0s'` | Animation duration |
| `transitionDelay` | string/array | `'0s'` | Delay before transition |
| `transitionTimingFunction` | string/array | `'ease'` | Easing function |
| `transitionBehavior` | string | `'normal'` | Discrete property handling |

---

### transitionProperty

Specify which properties should animate:

```tsx
// Single property
transitionProperty: 'opacity'

// Multiple properties (comma-separated string)
transitionProperty: 'width, height, opacity'

// Array syntax
transitionProperty: ['width', 'height', 'backgroundColor']

// All properties
transitionProperty: 'all'
```

### transitionDuration

```tsx
// Single duration for all properties
transitionDuration: '500ms'

// Different durations per property
transitionProperty: ['width', 'opacity'],
transitionDuration: ['300ms', '500ms']
```

### transitionDelay

```tsx
// Single delay
transitionDelay: '100ms'

// Staggered delays
transitionProperty: ['opacity', 'transform'],
transitionDelay: ['0ms', '200ms']
```

### transitionTimingFunction

```tsx
transitionTimingFunction: 'ease'
transitionTimingFunction: 'linear'
transitionTimingFunction: 'ease-in'
transitionTimingFunction: 'ease-out'
transitionTimingFunction: 'ease-in-out'
transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'

// Per-property
transitionProperty: ['width', 'opacity'],
transitionTimingFunction: ['ease-out', 'linear']
```

### transitionBehavior

Handle discrete properties (like `display`):

```tsx
transitionBehavior: 'normal'        // default, discrete properties change instantly
transitionBehavior: 'allow-discrete' // attempt to transition discrete properties
```

---

## Timing Functions

### Predefined Functions

| Name | Cubic Bezier | Description |
|------|--------------|-------------|
| `'linear'` | `(0, 0, 1, 1)` | Constant speed |
| `'ease'` | `(0.25, 0.1, 0.25, 1)` | Slow start/end |
| `'ease-in'` | `(0.42, 0, 1, 1)` | Slow start |
| `'ease-out'` | `(0, 0, 0.58, 1)` | Slow end |
| `'ease-in-out'` | `(0.42, 0, 0.58, 1)` | Slow start and end |

### Custom Cubic Bezier

```tsx
// Format: cubic-bezier(x1, y1, x2, y2)
animationTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' // overshoot
animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'          // material design
animationTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)'        // expo out
```

### Steps

```tsx
animationTimingFunction: 'steps(4)'           // 4 discrete steps
animationTimingFunction: 'steps(10, end)'     // step at end of each interval
animationTimingFunction: 'steps(10, start)'   // step at start of each interval
```

---

## Complex Examples

### Loading Spinner

```tsx
<Animated.View style={{
  width: 40,
  height: 40,
  borderWidth: 4,
  borderColor: 'transparent',
  borderTopColor: 'blue',
  borderRadius: 20,
  animationName: {
    from: { transform: [{ rotate: '0deg' }] },
    to: { transform: [{ rotate: '360deg' }] },
  },
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
}} />
```

### Bounce In

```tsx
<Animated.View style={{
  animationName: {
    '0%': { opacity: 0, transform: [{ scale: 0.3 }, { translateY: -100 }] },
    '50%': { opacity: 1, transform: [{ scale: 1.05 }] },
    '70%': { transform: [{ scale: 0.9 }] },
    '100%': { transform: [{ scale: 1 }, { translateY: 0 }] },
  },
  animationDuration: '600ms',
  animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  animationFillMode: 'both',
}} />
```

### Expandable Card with Transitions

```tsx
function ExpandableCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Pressable onPress={() => setExpanded(!expanded)}>
      <Animated.View style={{
        width: expanded ? 300 : 150,
        height: expanded ? 200 : 100,
        backgroundColor: expanded ? '#3b82f6' : '#94a3b8',
        borderRadius: expanded ? 16 : 8,
        transitionProperty: 'width, height, backgroundColor, borderRadius',
        transitionDuration: '400ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <Animated.Text style={{
          fontSize: expanded ? 24 : 16,
          color: 'white',
          transitionProperty: 'fontSize',
          transitionDuration: '300ms',
        }}>
          {expanded ? 'Expanded!' : 'Tap me'}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
}
```

### Staggered List Entry

```tsx
function StaggeredList({ items }) {
  return items.map((item, index) => (
    <Animated.View
      key={item.id}
      style={{
        animationName: {
          from: { opacity: 0, transform: [{ translateX: -50 }] },
          to: { opacity: 1, transform: [{ translateX: 0 }] },
        },
        animationDuration: '400ms',
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'backwards',
        animationTimingFunction: 'ease-out',
      }}
    >
      <Text>{item.title}</Text>
    </Animated.View>
  ));
}
```

### Shake Animation

```tsx
<Animated.View style={{
  animationName: {
    '0%, 100%': { transform: [{ translateX: 0 }] },
    '10%, 30%, 50%, 70%, 90%': { transform: [{ translateX: -10 }] },
    '20%, 40%, 60%, 80%': { transform: [{ translateX: 10 }] },
  },
  animationDuration: '500ms',
}} />
```

---

## Platform Compatibility

| Feature | Android | iOS | Web |
|---------|---------|-----|-----|
| CSS Animations | v4 only | v4 only | v4 only |
| CSS Transitions | v4 only | v4 only | v4 only |
| Cubic Bezier | Yes | Yes | Yes |
| Steps | Yes | Yes | Yes |

**Note:** CSS Animations and Transitions are exclusive to Reanimated v4 (New Architecture only).

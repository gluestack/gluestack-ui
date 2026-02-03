# Tabs Component Updates - Starter Kit Expo

## Changes Made

### 1. **Two Variants Only** ✅
Removed 'enclosed' variant. Now only:
- **`underlined`** - Border bottom indicator
- **`filled`** - Background color indicator

### 2. **FlatList in All Cases** ✅
TabsList always uses FlatList for better performance (already implemented by user)

### 3. **Indicator Styling with tva** ✅
Updated `tabsIndicatorStyle` to use parent variants properly:

```tsx
const tabsIndicatorStyle = tva({
  base: 'pointer-events-none rounded-full',
  parentVariants: {
    variant: {
      underlined: 'border-b-2 border-primary',  // ← Border bottom
      filled: 'bg-primary/20',                    // ← Background color
    },
  },
});
```

### 4. **Indicator Receives Parent Variants** ✅
The TabsIndicator component now gets parent variants from context:

```tsx
const TabsIndicator = React.forwardRef((props) => {
  const { variant } = useStyleContext(SCOPE);  // ← Gets parent variant

  return (
    <TabsAnimatedIndicator
      className={tabsIndicatorStyle({
        parentVariants: { variant },  // ← Applies parent variant
        class: className,              // ← Plus external className
      })}
    />
  );
});
```

### 5. **External className Support** ✅
Users can pass custom className to TabsIndicator:

```tsx
<TabsIndicator className="opacity-50 rounded-sm" />
```

Both parent variants AND external className are merged together.

### 6. **cssInterop for Animated.View** ✅
Added cssInterop to enable className on Animated.View:

```tsx
cssInterop(Animated.View, {
  className: {
    target: 'style',
  },
});
```

### 7. **Proper Positioning** ✅
Indicator is absolutely positioned with proper animation:

```tsx
<Animated.View
  className={className}  // ← tva styles with parent variants
  style={[
    animatedStyle,       // ← Animation (translate, width, height)
    {
      position: 'absolute',  // ← Absolute positioning
    },
    style,               // ← Additional custom styles
  ]}
/>
```

## Usage Examples

### Underlined Variant (Border Bottom)
```tsx
<Tabs defaultValue="tab1" variant="underlined">
  <TabsList>
    <TabsTrigger value="tab1">
      <TabsTriggerText>Tab 1</TabsTriggerText>
    </TabsTrigger>
    <TabsTrigger value="tab2">
      <TabsTriggerText>Tab 2</TabsTriggerText>
    </TabsTrigger>
    <TabsIndicator />  {/* ← Shows as border-bottom */}
  </TabsList>

  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

**Result:** Indicator appears as a 2px border bottom with primary color.

### Filled Variant (Background)
```tsx
<Tabs defaultValue="tab1" variant="filled">
  <TabsList>
    <TabsTrigger value="tab1">
      <TabsTriggerText>Tab 1</TabsTriggerText>
    </TabsTrigger>
    <TabsTrigger value="tab2">
      <TabsTriggerText>Tab 2</TabsTriggerText>
    </TabsTrigger>
    <TabsIndicator />  {/* ← Shows as filled background */}
  </TabsList>

  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

**Result:** Indicator appears as a filled background with primary color at 20% opacity.

### With Custom className
```tsx
<Tabs defaultValue="tab1" variant="filled">
  <TabsList>
    {/* tabs */}
    <TabsIndicator className="h-1 rounded-none bg-red-500" />
    {/* ↑ Overrides default styles */}
  </TabsList>
</Tabs>
```

**Result:** Indicator uses custom className merged with parent variant styles.

## How It Works

### Style Resolution Flow:
1. **Tabs** component receives `variant` prop → stores in context
2. **TabsIndicator** reads `variant` from context via `useStyleContext(SCOPE)`
3. **tva** applies parent variant styles:
   - `underlined` → `border-b-2 border-primary`
   - `filled` → `bg-primary/20`
4. External `className` prop is merged with parent variant styles
5. **cssInterop** converts className to React Native styles
6. **TabsAnimatedIndicator** receives final className
7. Animated.View applies both className styles and animation styles

### Animation:
- Uses `react-native-reanimated` for smooth 200ms transitions
- Animates `translateX`, `translateY`, `width`, and `height`
- Position is absolutely positioned within TabsList
- No animation on first render (duration: 0)
- Smooth animation on tab changes (duration: 200ms)

## Files Modified

1. ✅ **index.tsx**
   - Removed 'enclosed' variant
   - Updated tabsIndicatorStyle with parent variants
   - Indicator receives variant from context
   - Type updated to only allow 'underlined' | 'filled'

2. ✅ **TabsAnimatedIndicator.tsx**
   - Added cssInterop for Animated.View
   - className applied to Animated.View
   - Proper style merging: animated + position + custom

## Testing

### Test Underlined Variant:
```tsx
<Tabs variant="underlined">
  <TabsList>
    <TabsTrigger value="tab1"><TabsTriggerText>Tab 1</TabsTriggerText></TabsTrigger>
    <TabsTrigger value="tab2"><TabsTriggerText>Tab 2</TabsTriggerText></TabsTrigger>
    <TabsIndicator />
  </TabsList>
</Tabs>
```

**Expected:**
- ✅ 2px border bottom under selected tab
- ✅ Primary color
- ✅ Smooth animation when switching tabs
- ✅ Rounded corners

### Test Filled Variant:
```tsx
<Tabs variant="filled">
  <TabsList>
    <TabsTrigger value="tab1"><TabsTriggerText>Tab 1</TabsTriggerText></TabsTrigger>
    <TabsTrigger value="tab2"><TabsTriggerText>Tab 2</TabsTriggerText></TabsTrigger>
    <TabsIndicator />
  </TabsList>
</Tabs>
```

**Expected:**
- ✅ Filled background under selected tab
- ✅ Primary color at 20% opacity
- ✅ Smooth animation when switching tabs
- ✅ Matches tab width and height

### Test Custom className:
```tsx
<Tabs variant="underlined">
  <TabsList>
    <TabsTrigger value="tab1"><TabsTriggerText>Tab 1</TabsTriggerText></TabsTrigger>
    <TabsTrigger value="tab2"><TabsTriggerText>Tab 2</TabsTriggerText></TabsTrigger>
    <TabsIndicator className="border-red-500 h-1" />
  </TabsList>
</Tabs>
```

**Expected:**
- ✅ Red border color (instead of primary)
- ✅ 4px height (instead of default)
- ✅ Still animates smoothly

## Summary

✅ **Two variants only**: `underlined` (border) and `filled` (background)
✅ **FlatList**: Always used for better performance
✅ **tva styling**: Indicator gets parent variants via tva
✅ **External className**: Users can override with custom className
✅ **Proper positioning**: Absolute positioning with smooth animation
✅ **cssInterop**: Enables className on Animated.View
✅ **Type-safe**: TypeScript only allows 'underlined' | 'filled'

The indicator now properly receives parent variants from the Tabs component and can be customized with external className!

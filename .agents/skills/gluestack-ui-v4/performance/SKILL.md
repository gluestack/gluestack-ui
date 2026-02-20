---
name: gluestack-ui-v4:performance
description: Performance optimization and cross-platform patterns for gluestack-ui v4 - covers native/web compatibility, TypeScript, memoization, animations, and best practices.
---

# Gluestack UI v4 - Performance & Cross-Platform

This sub-skill focuses on performance optimization, cross-platform compatibility, and React Native best practices for gluestack-ui v4.

## Rule 12: Cross-Platform Rendering (Native & Web)

Gluestack UI v4 components are designed to work seamlessly on both React Native (iOS/Android) and Web platforms. Always use Gluestack wrapper components instead of direct React Native imports to ensure cross-platform compatibility.

### Critical Rule: Always Use Gluestack Wrappers

**NEVER import components directly from `react-native`** when a Gluestack wrapper exists. Gluestack wrappers handle platform-specific differences automatically.

### Platform-Specific Component Mapping

| React Native Import | Gluestack Wrapper | Notes |
|---------------------|-------------------|-------|
| `KeyboardAvoidingView` from `react-native` | `KeyboardAvoidingView` from `@/components/ui/keyboard-avoiding-view` | Required for web compatibility |
| `Platform` from `react-native` | Use only when absolutely necessary | Prefer Gluestack's built-in platform handling |
| `View`, `Text`, etc. | `Box`, `Text` from `@/components/ui/*` | Always use Gluestack components |

### Correct Pattern: Cross-Platform Components

```tsx
// ✅ CORRECT: Using Gluestack KeyboardAvoidingView wrapper
import { KeyboardAvoidingView } from '@/components/ui/keyboard-avoiding-view';
import { Platform } from 'react-native'; // Only when needed for platform-specific logic

<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  className="flex-1"
>
  <ScrollView>
    {/* Content */}
  </ScrollView>
</KeyboardAvoidingView>
```

### Incorrect Pattern: Direct React Native Imports

```tsx
// ❌ INCORRECT: Direct import from react-native
import { KeyboardAvoidingView, Platform } from 'react-native';

<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
  {/* This may not work correctly on web */}
</KeyboardAvoidingView>
```

### Web-Specific Considerations

1. **KeyboardAvoidingView**: The Gluestack wrapper handles web gracefully (web doesn't need keyboard avoidance)
2. **SafeAreaView**: Works on both native and web (web treats it as a regular View)
3. **ScrollView**: Works identically on both platforms
4. **Platform.select**: Only use when absolutely necessary; prefer Gluestack's built-in handling

### Testing Cross-Platform Compatibility

Always test components on both platforms:

1. **Native**: Run `npm run ios` or `npm run android`
2. **Web**: Run `npm run web` and verify in browser
3. **Verify**: Check that all components render correctly and interactions work on both platforms

### Platform-Specific Code (When Necessary)

If you must use platform-specific code, use it sparingly and document why:

```tsx
// Acceptable: Platform-specific behavior when Gluestack doesn't cover it
import { Platform } from 'react-native';

const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

<KeyboardAvoidingView behavior={keyboardBehavior} className="flex-1">
  {/* Content */}
</KeyboardAvoidingView>
```

### Common Cross-Platform Issues to Avoid

1. **Direct React Native imports** - Always use Gluestack wrappers
2. **Platform-specific styling without fallbacks** - Ensure web has equivalent styles
3. **Native-only APIs** - Check if web alternatives exist
4. **Missing web polyfills** - Gluestack handles most of these automatically

### Verification Checklist for Cross-Platform

- [ ] All components imported from `@/components/ui/*` wrappers
- [ ] No direct imports from `react-native` for wrapped components
- [ ] KeyboardAvoidingView uses Gluestack wrapper
- [ ] Tested on both native (iOS/Android) and web platforms
- [ ] All interactions work on both platforms
- [ ] Styling renders correctly on both platforms
- [ ] No platform-specific code without documentation

## Rule 13: Performance & Best Practices

Follow these best practices to ensure optimal performance, type safety, and maintainability in React Native/Expo applications.

### Use TypeScript

Define navigation and prop types for type safety. This catches errors at compile time and improves developer experience.

#### Correct Pattern

```tsx
// ✅ CORRECT: Typed component props
interface LoginFormProps {
  readonly onSubmit: (email: string, password: string) => void;
  readonly isLoading?: boolean;
}

const LoginForm = ({ onSubmit, isLoading = false }: LoginFormProps) => {
  // Component implementation
};

// ✅ CORRECT: Typed navigation
import { useRouter } from 'expo-router';

const router = useRouter();
router.push('/login' as any); // Type-safe navigation
```

#### Incorrect Pattern

```tsx
// ❌ INCORRECT: No type definitions
const LoginForm = ({ onSubmit, isLoading }) => {
  // No type safety
};
```

### Memoize Components

Use `React.memo` and `useCallback` to prevent unnecessary rerenders, especially for expensive components or frequently re-rendered parent components.

#### Correct Pattern

```tsx
// ✅ CORRECT: Memoized component
import React, { useCallback, useState } from 'react';

const ExpensiveComponent = React.memo(({ data, onUpdate }: Props) => {
  // Expensive rendering logic
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoized callback prevents child rerenders
  const handleUpdate = useCallback((value: string) => {
    // Update logic
  }, []);

  return (
    <>
      <Button onPress={() => setCount(count + 1)}>
        <ButtonText>Count: {count}</ButtonText>
      </Button>
      <ExpensiveComponent data={data} onUpdate={handleUpdate} />
    </>
  );
};
```

#### When to Memoize

- Components that receive stable props but parent rerenders frequently
- Callbacks passed to child components
- Expensive computations (use `useMemo`)

### Run Animations on UI Thread

Use Reanimated worklets for 60fps animations. This keeps animations smooth by running on the native UI thread instead of the JavaScript thread.

#### Correct Pattern

```tsx
// ✅ CORRECT: Using Reanimated worklets
import { useSharedValue, withTiming } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const AnimatedBox = Animated.createAnimatedComponent(Box);

const Component = () => {
  const translateX = useSharedValue(0);

  const handlePress = () => {
    // Animation runs on UI thread
    translateX.value = withTiming(100, { duration: 300 });
  };

  return (
    <AnimatedBox
      style={{
        transform: [{ translateX }],
      }}
    >
      <Pressable onPress={handlePress}>
        <Text>Animate</Text>
      </Pressable>
    </AnimatedBox>
  );
};
```

#### Incorrect Pattern

```tsx
// ❌ INCORRECT: Using Animated API (runs on JS thread)
import { Animated } from 'react-native';

const Component = () => {
  const translateX = new Animated.Value(0);
  // This runs on JavaScript thread, can cause jank
};
```

### Handle Safe Areas

Use `SafeAreaView` or `useSafeAreaInsets` to handle device notches, status bars, and home indicators properly.

#### Correct Pattern

```tsx
// ✅ CORRECT: Using SafeAreaView
import { SafeAreaView } from '@/components/ui/safe-area-view';

const Screen = () => (
  <SafeAreaView className="flex-1 bg-background">
    <VStack className="p-4">
      {/* Content */}
    </VStack>
  </SafeAreaView>
);

// ✅ CORRECT: Using useSafeAreaInsets for custom layouts
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Box style={{ paddingTop: insets.top }}>
      {/* Content */}
    </Box>
  );
};
```

### Test on Real Devices

Simulator/emulator performance differs from real devices. Always test on physical devices before releasing.

#### Testing Checklist

- [ ] Test on real iOS device (iPhone/iPad)
- [ ] Test on real Android device
- [ ] Test on different screen sizes
- [ ] Test with different OS versions
- [ ] Test performance under load
- [ ] Test with slow network conditions

### Use FlatList for Lists

Never use `ScrollView` with `map` for long lists. `FlatList` provides virtualization, which only renders visible items.

#### Correct Pattern

```tsx
// ✅ CORRECT: Using FlatList
import { FlatList } from '@/components/ui/flat-list';

const ItemList = ({ items }: { items: Item[] }) => (
  <FlatList
    data={items}
    renderItem={({ item }) => (
      <Box className="p-4 border-b border-border">
        <Text>{item.name}</Text>
      </Box>
    )}
    keyExtractor={(item) => item.id}
    ListEmptyComponent={<Text>No items found</Text>}
  />
);
```

#### Incorrect Pattern

```tsx
// ❌ INCORRECT: Using ScrollView with map (no virtualization)
import { ScrollView } from '@/components/ui/scroll-view';

const ItemList = ({ items }: { items: Item[] }) => (
  <ScrollView>
    {items.map((item) => (
      <Box key={item.id} className="p-4">
        <Text>{item.name}</Text>
      </Box>
    ))}
  </ScrollView>
);
```

**Why this is bad**: All items are rendered at once, causing performance issues with long lists.

### Platform-Specific Code

Use `Platform.select` for iOS/Android differences. This provides a clean, declarative way to handle platform-specific code.

#### Correct Pattern

```tsx
// ✅ CORRECT: Using Platform.select
import { Platform } from 'react-native';

const styles = Platform.select({
  ios: {
    paddingTop: 20,
  },
  android: {
    paddingTop: 0,
  },
  default: {
    paddingTop: 0,
  },
});

<Box style={styles}>
  {/* Content */}
</Box>

// ✅ CORRECT: Platform.select for values
const keyboardBehavior = Platform.select({
  ios: 'padding',
  android: 'height',
  default: 'padding',
});
```

#### Incorrect Pattern

```tsx
// ❌ INCORRECT: Using if/else for platform checks
import { Platform } from 'react-native';

let styles;
if (Platform.OS === 'ios') {
  styles = { paddingTop: 20 };
} else {
  styles = { paddingTop: 0 };
}
```

## Best Practices Summary

| Practice | Why It Matters | When to Use |
|----------|---------------|-------------|
| **TypeScript** | Type safety, catch errors early | Always |
| **React.memo** | Prevent unnecessary rerenders | Components with stable props |
| **useCallback** | Stable function references | Callbacks passed to children |
| **Reanimated worklets** | 60fps animations | All animations |
| **SafeAreaView** | Handle device notches/bars | All screens |
| **FlatList** | Virtualization for performance | Lists with 10+ items |
| **Platform.select** | Clean platform-specific code | iOS/Android differences |
| **Real device testing** | Accurate performance metrics | Before release |

## Performance Optimization Patterns

### Memoized List Item

```tsx
// ✅ CORRECT: Memoized list item component
interface ItemProps {
  readonly item: Item;
  readonly onPress: (id: string) => void;
}

const ListItem = React.memo(({ item, onPress }: ItemProps) => {
  const handlePress = useCallback(() => {
    onPress(item.id);
  }, [item.id, onPress]);

  return (
    <Pressable onPress={handlePress}>
      <Box className="p-4 border-b border-border">
        <Text>{item.name}</Text>
      </Box>
    </Pressable>
  );
});

// Parent component
const ItemList = ({ items }: { items: Item[] }) => {
  const handlePress = useCallback((id: string) => {
    // Handle press
  }, []);

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <ListItem item={item} onPress={handlePress} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
```

### Animated Component

```tsx
// ✅ CORRECT: Using Reanimated for smooth animations
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const AnimatedBox = Animated.createAnimatedComponent(Box);

const AnimatedCard = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSpring(1.1);
  };

  return (
    <AnimatedBox style={animatedStyle} className="bg-card p-4 rounded-lg">
      <Pressable onPress={handlePress}>
        <Text>Press to animate</Text>
      </Pressable>
    </AnimatedBox>
  );
};
```

### Safe Area Handling

```tsx
// ✅ CORRECT: Proper safe area handling
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Screen = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <VStack className="flex-1">
        {/* Header */}
        <Box className="p-4 border-b border-border">
          <Heading size="xl">Title</Heading>
        </Box>

        {/* Content */}
        <ScrollView className="flex-1">
          {/* Content */}
        </ScrollView>

        {/* Footer with safe bottom padding */}
        <Box
          style={{ paddingBottom: insets.bottom }}
          className="p-4 border-t border-border"
        >
          <Button>
            <ButtonText>Submit</ButtonText>
          </Button>
        </Box>
      </VStack>
    </SafeAreaView>
  );
};
```

## Performance Checklist

- [ ] TypeScript types defined for all components and props
- [ ] Expensive components wrapped with `React.memo`
- [ ] Callbacks memoized with `useCallback`
- [ ] Animations use Reanimated worklets
- [ ] Safe areas handled with `SafeAreaView` or `useSafeAreaInsets`
- [ ] Long lists use `FlatList` instead of `ScrollView` + `map`
- [ ] Platform-specific code uses `Platform.select`
- [ ] Tested on real devices (not just simulators)
- [ ] Performance profiled and optimized
- [ ] Cross-platform compatibility verified (native + web)

## Common Performance Pitfalls

### ❌ Don't: Use ScrollView for Long Lists

```tsx
// ❌ INCORRECT: No virtualization
<ScrollView>
  {items.map(item => <Item key={item.id} {...item} />)}
</ScrollView>

// ✅ CORRECT: Use FlatList
<FlatList
  data={items}
  renderItem={({ item }) => <Item {...item} />}
  keyExtractor={(item) => item.id}
/>
```

### ❌ Don't: Create Callbacks Without useCallback

```tsx
// ❌ INCORRECT: New function on every render
<Button onPress={() => handlePress(id)}>
  <ButtonText>Press</ButtonText>
</Button>

// ✅ CORRECT: Memoized callback
const memoizedPress = useCallback(() => {
  handlePress(id);
}, [id, handlePress]);

<Button onPress={memoizedPress}>
  <ButtonText>Press</ButtonText>
</Button>
```

### ❌ Don't: Use Animated API for Complex Animations

```tsx
// ❌ INCORRECT: Runs on JavaScript thread
import { Animated } from 'react-native';
const animValue = new Animated.Value(0);

// ✅ CORRECT: Use Reanimated (runs on UI thread)
import { useSharedValue } from 'react-native-reanimated';
const animValue = useSharedValue(0);
```

## Reference

- **Reanimated Documentation**: https://docs.swmansion.com/react-native-reanimated/
- **React Native Performance**: https://reactnative.dev/docs/performance
- **Expo Router**: https://docs.expo.dev/router/introduction/

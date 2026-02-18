# Shared Element Transitions

Smoothly animate components between screens during navigation.

> **Experimental:** This feature requires a [feature flag](https://docs.swmansion.com/react-native-reanimated/docs/guides/feature-flags#enable_shared_element_transitions) and is not recommended for production yet.

## Table of Contents
- [Setup](#setup)
- [Basic Usage](#basic-usage)
- [Custom Animations](#custom-animations)
- [Multiple Shared Elements](#multiple-shared-elements)
- [Limitations](#limitations)

---

## Setup

### 1. Enable Feature Flag

```tsx
// app.json or app.config.js (Expo)
{
  "expo": {
    "plugins": [
      ["react-native-reanimated", {
        "enableSharedElementTransitions": true
      }]
    ]
  }
}
```

Or for bare React Native, in your entry file:

```tsx
import { enableLayoutAnimations } from 'react-native-reanimated';
enableLayoutAnimations(true);
```

### 2. Use Native Stack Navigator

Shared Element Transitions only work with `@react-navigation/native-stack`:

```tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
```

---

## Basic Usage

Assign the same `sharedTransitionTag` to matching components on different screens:

**Screen A (List)**

```tsx
import Animated from 'react-native-reanimated';

function ListScreen({ navigation }) {
  return (
    <Pressable onPress={() => navigation.navigate('Detail', { id: item.id })}>
      <Animated.Image
        source={{ uri: item.image }}
        sharedTransitionTag={`image-${item.id}`}
        style={styles.thumbnail}
      />
      <Text>{item.title}</Text>
    </Pressable>
  );
}
```

**Screen B (Detail)**

```tsx
function DetailScreen({ route }) {
  const { id } = route.params;

  return (
    <View>
      <Animated.Image
        source={{ uri: item.image }}
        sharedTransitionTag={`image-${id}`}
        style={styles.hero}
      />
      <Text>{item.title}</Text>
    </View>
  );
}
```

When navigating between screens, the image will smoothly transform from thumbnail to hero size.

---

## Custom Animations

Customize the transition using `SharedTransition` builder:

```tsx
import Animated, { SharedTransition } from 'react-native-reanimated';

// Timing-based
const customTransition = SharedTransition.duration(800);

// Spring-based
const springTransition = SharedTransition.duration(500).springify();

// With damping
const bouncyTransition = SharedTransition
  .duration(600)
  .springify()
  .damping(12);

function Screen() {
  return (
    <Animated.View
      sharedTransitionTag="myTag"
      sharedTransitionStyle={customTransition}
      style={styles.box}
    />
  );
}
```

### Available Modifiers

| Modifier | Description |
|----------|-------------|
| `.duration(ms)` | Animation duration (default: 500) |
| `.springify()` | Use spring physics |
| `.damping(n)` | Spring damping |
| `.stiffness(n)` | Spring stiffness |
| `.mass(n)` | Spring mass |

---

## Multiple Shared Elements

Use unique tags for each shared element pair:

```tsx
// Screen A
<Animated.Image
  sharedTransitionTag={`image-${item.id}`}
  source={{ uri: item.image }}
/>
<Animated.Text
  sharedTransitionTag={`title-${item.id}`}
  style={styles.title}
>
  {item.title}
</Animated.Text>

// Screen B
<Animated.Image
  sharedTransitionTag={`image-${item.id}`}
  source={{ uri: item.image }}
/>
<Animated.Text
  sharedTransitionTag={`title-${item.id}`}
  style={styles.largeTitle}
>
  {item.title}
</Animated.Text>
```

Both image and title will animate together.

---

## Complete Example

```tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Animated, { SharedTransition } from 'react-native-reanimated';

const Stack = createNativeStackNavigator();
const transition = SharedTransition.duration(400).springify();

const items = [
  { id: '1', title: 'Mountains', image: 'https://...' },
  { id: '2', title: 'Beach', image: 'https://...' },
];

function ListScreen({ navigation }) {
  return (
    <ScrollView>
      {items.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => navigation.navigate('Detail', { item })}
          style={styles.card}
        >
          <Animated.Image
            source={{ uri: item.image }}
            sharedTransitionTag={`photo-${item.id}`}
            sharedTransitionStyle={transition}
            style={styles.thumbnail}
          />
          <Text style={styles.cardTitle}>{item.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.detail}>
      <Animated.Image
        source={{ uri: item.image }}
        sharedTransitionTag={`photo-${item.id}`}
        sharedTransitionStyle={transition}
        style={styles.hero}
      />
      <Text style={styles.detailTitle}>{item.title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 16 },
  thumbnail: { width: 80, height: 80, borderRadius: 8 },
  cardTitle: { marginLeft: 16, fontSize: 18 },
  detail: { flex: 1 },
  hero: { width: '100%', height: 300 },
  detailTitle: { fontSize: 24, padding: 16 },
});
```

---

## Animated Properties

The following properties are automatically animated during transitions:
- `width`, `height`
- `originX`, `originY`
- `transform`
- `backgroundColor`
- `opacity`

---

## Limitations

| Limitation | Description |
|------------|-------------|
| Navigator | Only `@react-navigation/native-stack` supported |
| Tab Navigator | Not supported on path with shared transitions |
| Modals | `transparentModal` doesn't work properly on iOS |
| Custom functions | Can't define fully custom animation functions |
| Progress-based | `backgroundColor` not supported in progress transitions |
| iOS positioning | Some vertical positioning issues with headers |
| Performance | Transforms recalculated too eagerly |

### Swipe-back Behavior (iOS)

On iOS, when triggered by swipe gesture or back button, the transition is progress-based (follows finger position). This allows for:
- Transition that follows gesture
- Cancellation if swipe is incomplete

---

## Platform Compatibility

| Platform | Support |
|----------|---------|
| Android | Yes |
| iOS | Yes |
| Web | No |

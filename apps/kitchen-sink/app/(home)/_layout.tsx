import { View, Pressable } from 'react-native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { useRouter, Slot, useSegments } from 'expo-router';
import { LayoutGrid, Sparkles } from 'lucide-react-native';
import { useState, createContext, useContext, useEffect } from 'react';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

/* -------------------------------------------------------------------------- */
/*                             TAB VISIBILITY CONTEXT                         */
/* -------------------------------------------------------------------------- */

type TabBarContextValue = {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
};

const TabBarContext = createContext<TabBarContextValue>({
  hidden: false,
  setHidden: () => {},
});

export const useTabBar = () => useContext(TabBarContext);

/* -------------------------------------------------------------------------- */
/*                                   LAYOUT                                   */
/* -------------------------------------------------------------------------- */

export default function HomeLayout() {
  const supportsLiquidGlass = isLiquidGlassAvailable();
  const segments = useSegments();
  const [hidden, setHidden] = useState(false);

  // Auto-hide native tabs on detail screens based on route depth
  // Show tabs only on root tab screens (e.g., /components or /showcases)
  // Hide tabs on detail screens (e.g., /components/button or /showcases/showcase-1)
  const shouldHideTabs = segments.length > 2;

  // ✅ Native iOS Liquid Glass with automatic tab visibility control
  if (supportsLiquidGlass) {
    return (
      <TabBarContext.Provider value={{ hidden: shouldHideTabs, setHidden }}>
        <NativeTabs hidden={shouldHideTabs}>
          <NativeTabs.Trigger name="components">
            <NativeTabs.Trigger.Label>Components</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon sf="square.grid.2x2" md="view_module" />
          </NativeTabs.Trigger>

          <NativeTabs.Trigger name="showcases">
            <NativeTabs.Trigger.Label>Showcases</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon sf="sparkles" md="auto_awesome" />
          </NativeTabs.Trigger>
        </NativeTabs>
      </TabBarContext.Provider>
    );
  }

  // ✅ Custom Tabs with route-based visibility
  return (
    <TabBarContext.Provider value={{ hidden: shouldHideTabs, setHidden }}>
      <View className="flex-1">
        <Slot />
        <CustomTabs />
      </View>
    </TabBarContext.Provider>
  );
}

function CustomTabs() {
  const router = useRouter();
  const segments = useSegments();

  // Determine current active tab from route segments
  const currentTab = (segments[1] as 'components' | 'showcases') || 'components';

  // Animated value for sliding indicator
  const translateX = useSharedValue(0);

  // Update animation when tab changes
  useEffect(() => {
    // Approximate tab width + gap (adjust these values based on your actual measurements)
    const TAB_WIDTH = 100; // Width of each tab item
    const GAP = 0; // Gap between tabs

    if (currentTab === 'components') {
      translateX.value = withTiming(0, {
        duration: 150,
        easing: Easing.linear, // Ease-in-out cubic
      });
    } else {
      translateX.value = withTiming(TAB_WIDTH + GAP, {
        duration: 150,
        easing: Easing.linear, // Ease-in-out cubic
      });
    }
  }, [currentTab]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  function onTabPress(tab: 'components' | 'showcases') {
    // Only navigate if we're not already on this tab
    if (currentTab !== tab) {
      router.replace(`/(home)/${tab}`);
    }
  }

  // Hide tabs on detail screens (e.g., /components/button or /showcases/showcase-1)
  // Show tabs only on root tab screens (e.g., /components or /showcases)
  const shouldHideTabs = segments.length > 2; // ['(home)', 'components'] = 2, ['(home)', 'components', 'button'] = 3

  if (shouldHideTabs) {
    return null;
  }

  return (
    <View className="absolute web:bottom-4 bottom-safe left-0 right-0 items-center">
      <View
        style={{
          shadowColor: 'rgba(0, 0, 0, 0.4)',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.3,
          shadowRadius: 16.0,

          elevation: 30,
        }}
        className="flex-row  p-1 rounded-full bg-white dark:bg-muted justify-center "
      >
        {/* Animated Background Indicator */}
        <Animated.View
          style={[animatedStyle]}
          className="absolute left-1 top-1 bottom-1 w-[100px] dark:bg-white/15 bg-black/10  rounded-full"
        />

        <TabItem
          active={currentTab === 'components'}
          label="Components"
          IconComponent={LayoutGrid}
          onPress={() => onTabPress('components')}
        />

        <TabItem
          active={currentTab === 'showcases'}
          label="Showcases"
          IconComponent={Sparkles}
          onPress={() => onTabPress('showcases')}
        />
      </View>
    </View>
  );
}

function TabItem({
  active,
  label,
  IconComponent,
  onPress,
}: {
  active: boolean;
  label: string;
  IconComponent: React.ComponentType<any>;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View className=" py-2 rounded-full flex-col items-center gap-0.5 w-[100px]">
        <Icon
          as={IconComponent}
          size="xl"
          className={`stroke-[1.5] ${IconComponent === Sparkles && active ? 'fill-blue-400 stroke-blue-400' : IconComponent === Sparkles ? 'fill-foreground stroke-foreground' : IconComponent===LayoutGrid&&active ? 'fill-none stroke-blue-400' : IconComponent===LayoutGrid ? 'fill-none stroke-foreground' : ''}`}
        />

        <Text
          className={`text-[10px] font-medium  ${active ? 'text-blue-400' : 'text-foreground/60'}`}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

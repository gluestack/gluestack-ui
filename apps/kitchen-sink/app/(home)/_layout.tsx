import { View, Pressable, Text } from 'react-native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { useRouter, Slot, useSegments } from 'expo-router';
import { Grid, Sparkles } from 'lucide-react-native';
import { useState, createContext, useContext } from 'react';

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
    <View className="absolute bottom-6 left-0 right-0 z-10 items-center">
      <View className="flex-row gap-2 p-2 rounded-full bg-black/90 justify-center">
        <TabItem
          active={currentTab === 'components'}
          label="Components"
          Icon={Grid}
          onPress={() => onTabPress('components')}
        />

        <TabItem
          active={currentTab === 'showcases'}
          label="Showcases"
          Icon={Sparkles}
          onPress={() => onTabPress('showcases')}
        />
      </View>
    </View>
  );
}
function TabItem({
  active,
  label,
  Icon,
  onPress,
}: {
  active: boolean;
  label: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View
        className={`h-11 px-4 rounded-full flex-col items-center gap-2 ${
          active ? 'bg-white/15' : ''
        }`}
      >
        <Icon size={18} color="white" />

        <Text className="text-white text-sm font-medium">{label}</Text>
      </View>
    </Pressable>
  );
}

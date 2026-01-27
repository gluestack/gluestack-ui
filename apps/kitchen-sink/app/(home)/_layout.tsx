import { View, Pressable, Text } from 'react-native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { useRouter, Slot } from 'expo-router';
import { Grid, Sparkles } from 'lucide-react-native';
import { useState } from 'react';

/* -------------------------------------------------------------------------- */
/*                                   LAYOUT                                   */
/* -------------------------------------------------------------------------- */

export default function HomeLayout() {
  const supportsLiquidGlass = isLiquidGlassAvailable();

  // ✅ Native iOS Liquid Glass (UNCHANGED)
  if (supportsLiquidGlass) {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="components">
          <NativeTabs.Trigger.Label>Components</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="square.grid.2x2" md="view_module" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="showcases">
          <NativeTabs.Trigger.Label>Showcases</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="sparkles" md="auto_awesome" />
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  // ❌ No Liquid Glass → Docs-style Custom Tabs
  return (
    <View className="flex-1">
      <Slot />
      <CustomTabs />
    </View>
  );
}

function CustomTabs() {
  const router = useRouter();
  const [active, setActive] = useState<'components' | 'showcases'>(
    'components'
  );

  function onTabPress(tab: 'components' | 'showcases') {
    setActive(tab);
    router.replace(`/(home)/${tab}`);
  }

  return (
    <View className="absolute bottom-6 left-4 right-4 flex-row gap-2 p-2 rounded-full bg-black/90 justify-between">
      <TabItem
        active={active === 'components'}
        label="Components"
        Icon={Grid}
        onPress={() => onTabPress('components')}
      />

      <TabItem
        active={active === 'showcases'}
        label="Showcases"
        Icon={Sparkles}
        onPress={() => onTabPress('showcases')}
      />
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
        className={`h-11 px-4 rounded-full flex-row items-center gap-2 ${
          active ? 'bg-white/15' : ''
        }`}
      >
        <Icon size={18} color="white" />

        {active && (
          <Text className="text-white text-sm font-medium">{label}</Text>
        )}
      </View>
    </Pressable>
  );
}

import { View, Pressable, StyleSheet } from 'react-native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import Animated, { Layout, FadeIn, FadeOut } from 'react-native-reanimated';
import { useRouter, Slot } from 'expo-router';
import { Icon } from '@/components/ui/icon';
import { useState } from 'react';

export default function HomeLayout() {
  const supportsLiquidGlass = isLiquidGlassAvailable();

  // ✅ Native iOS Liquid Glass tabs
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

  // ❌ Fallback → Custom Reanimated Tabs
  return (
    <View style={{ flex: 1 }}>
      <Slot />

      <CustomTabs />
    </View>
  );
}

/* -------------------------------------------------------------------------- */
/*                               CUSTOM TABS                                  */
/* -------------------------------------------------------------------------- */

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
    <View style={styles.container}>
      <TabItem
        active={active === 'components'}
        label="Components"
        icon={{ sf: 'square.grid.2x2', md: 'view_module' }}
        onPress={() => onTabPress('components')}
      />

      <TabItem
        active={active === 'showcases'}
        label="Showcases"
        icon={{ sf: 'sparkles', md: 'auto_awesome' }}
        onPress={() => onTabPress('showcases')}
      />
    </View>
  );
}

function TabItem({
  active,
  label,
  icon,
  onPress,
}: {
  active: boolean;
  label: string;
  icon: { sf?: string; md?: string };
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <Animated.View
        layout={Layout.springify().damping(22)}
        style={[styles.tab, active && styles.activeTab]}
      >
        <Icon sf={icon.sf} md={icon.md} size="sm" />

        {active && (
          <Animated.Text
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.label}
          >
            {label}
          </Animated.Text>
        )}
      </Animated.View>
    </Pressable>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    flexDirection: 'row',
    gap: 8,
    padding: 6,
    borderRadius: 32,
    backgroundColor: 'rgba(20,20,20,0.9)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  activeTab: {
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  label: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
  },
});

import { StateTabs, type Tab } from '@/components/custom/state-tabs';
import { useAppTheme } from '@/contexts/app-theme-context';
import { StatusBar } from 'expo-status-bar';
import React, { useMemo } from 'react';
import { View } from 'react-native';

// Import tab content components
import ComponentsTab from './_tabs/components-tab';
import ShowcasesTab from './_tabs/showcases-tab';

export default function HomeScreen() {
  const { isDark } = useAppTheme();

  const tabs: Tab[] = useMemo(
    () => [
      {
        key: 'components',
        title: 'Components',
        component: <ComponentsTab />,
      },
      {
        key: 'showcases',
        title: 'Showcases',
        component: <ShowcasesTab />,
      },
    ],
    []
  );

  return (
    <View className="flex-1 bg-background py-safe">
      <StateTabs tabs={tabs} initialIndex={0} />
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </View>
  );
}

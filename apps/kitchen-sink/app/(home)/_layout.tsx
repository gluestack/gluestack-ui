import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function HomeLayout() {
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

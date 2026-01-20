import { Stack } from 'expo-router';

function ShowcasesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        fullScreenGestureEnabled: true,
        animation: 'slide_from_right',
      }}
    />
  );
}

ShowcasesLayout.displayName = 'ShowcasesLayout';

export default ShowcasesLayout;

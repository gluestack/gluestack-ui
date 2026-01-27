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
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

ShowcasesLayout.displayName = 'ShowcasesLayout';

export default ShowcasesLayout;

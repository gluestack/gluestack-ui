import { Stack } from "expo-router";

export default function HomeLayout() {

  return (
    <Stack>
      {/* Home tabs screen - no header */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Components group - header managed by nested layout */}
      <Stack.Screen
        name="components"
        options={{
          headerShown: false,
        }}
      />

      {/* Showcases group - header managed by nested layout */}
      <Stack.Screen
        name="showcases"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

import { Stack } from "expo-router";
import { Platform } from "react-native";
import { useAppTheme } from "@/contexts/app-theme-context";

export default function HomeLayout() {
  const { isDark } = useAppTheme();

  const themeColorForeground = isDark ? "#ffffff" : "#000000";
  const themeColorBackground = isDark ? "#000000" : "#ffffff";

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
    </Stack>
  );
}

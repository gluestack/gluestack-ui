import { Stack, useRouter } from "expo-router";
import { Platform, Pressable } from "react-native";
import { useAppTheme } from "@/contexts/app-theme-context";
import { Icon, ChevronLeftIcon } from "@/components/ui/icon";

export default function ComponentsLayout() {
  const { isDark } = useAppTheme();
  const router = useRouter();

  const themeColorForeground = isDark ? "#ffffff" : "#000000";
  const themeColorBackground = isDark ? "#000000" : "#ffffff";

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTransparent: true,
        headerBlurEffect: isDark ? "dark" : "light",
        headerTintColor: themeColorForeground,
        headerStyle: {
          backgroundColor: Platform.select({
            ios: undefined,
            android: themeColorBackground,
          }),
        },
        headerTitleStyle: {
          fontFamily: "Outfit_600SemiBold",
        },
        gestureEnabled: true,
        gestureDirection: "horizontal",
        fullScreenGestureEnabled: true,
        contentStyle: {
          backgroundColor: themeColorBackground,
        },
        headerLeft: () => (
          <Pressable
            onPress={() => router.back()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={{ marginLeft: Platform.OS === "ios" ? 0 : 8 }}
          >
            <Icon
              as={ChevronLeftIcon}
              size="xl"
              style={{ color: themeColorForeground }}
            />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen name="accordion" options={{ title: "Accordion" }} />
      <Stack.Screen name="alert" options={{ title: "Alert" }} />
      <Stack.Screen name="alert-dialog" options={{ title: "Alert Dialog" }} />
      <Stack.Screen name="avatar" options={{ title: "Avatar" }} />
    </Stack>
  );
}

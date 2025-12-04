import { SwipeableTabs, Tab } from "@/components/custom/swipeable-tabs";
import { useAppTheme } from "@/contexts/app-theme-context";
import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { View } from "react-native";

// Import tab content components
import ComponentsTab from "./_tabs/components-tab";
import ShowcasesTab from "./_tabs/showcases-tab";
import ThemesTab from "./_tabs/themes-tab";

export default function HomeScreen() {
  const { isDark } = useAppTheme();

  const tabs: Tab[] = useMemo(
    () => [
      {
        key: "showcases",
        title: "Showcases",
        component: <ShowcasesTab />,
      },
      {
        key: "components",
        title: "Components",
        component: <ComponentsTab />,
      },
      {
        key: "themes",
        title: "Themes",
        component: <ThemesTab />,
      },
    ],
    []
  );

  return (
    <View className="flex-1 bg-background-0">
      <SwipeableTabs tabs={tabs} initialIndex={1} />
      <StatusBar style={isDark ? "light" : "dark"} />
    </View>
  );
}

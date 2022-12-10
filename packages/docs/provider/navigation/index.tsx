import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import React, { useMemo } from "react";

export function NavigationProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL("/")],
          config: {
            initialRouteName: "landing",
            screens: {
              landing: "",
              button2: "button2",
              heading: "heading",
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  );
}

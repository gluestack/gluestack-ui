import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DocsLanding } from "../../docs/landing";
import { DocsButton2 } from "../../docs/button/button";
import { DocsHeading } from "../../docs/heading";

const Stack = createNativeStackNavigator<{
  landing: any;
  button2: any;
  heading: any;
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="landing"
        component={DocsLanding}
        options={{
          title: "Landing",
        }}
      />
      <Stack.Screen
        name="button2"
        component={DocsButton2}
        options={{
          title: "Button2",
        }}
      />
      <Stack.Screen
        name="heading"
        component={DocsHeading}
        options={{
          title: "Heading",
        }}
      />
    </Stack.Navigator>
  );
}

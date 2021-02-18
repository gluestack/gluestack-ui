import React from "react";
import { SafeAreaView } from "react-native";
import { OverlayProvider } from "@react-native-aria/overlays";

export function Wrapper({ children }) {
  return (
    <OverlayProvider>
      <SafeAreaView>{children}</SafeAreaView>
    </OverlayProvider>
  );
}

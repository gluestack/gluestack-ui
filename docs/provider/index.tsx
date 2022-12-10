import React from "react";
import { NavigationProvider } from "./navigation";
import { SafeArea } from "./safe-area";

export function Provider({ children }: { children: any }) {
  return (
    <NavigationProvider>
      <SafeArea>{children}</SafeArea>
    </NavigationProvider>
  );
}

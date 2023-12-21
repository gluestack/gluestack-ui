import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import React from "react";

export const Wrapper = ({ children }: any) => {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
};

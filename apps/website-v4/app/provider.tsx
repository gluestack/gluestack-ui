"use client";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import StyledJsxRegistry from "./registry";
import { useMode } from "@/utils/theme-context";



function ProviderWithTheme({ children }: { children: React.ReactNode }) {
  const { colorMode } = useMode();
  return (
    <GluestackUIProvider mode={colorMode}>
      <div className="h-screen w-screen overflow-hidden overflow-y-scroll">
        {children}
      </div>
    </GluestackUIProvider>
  );
}

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <StyledJsxRegistry>
      <ProviderWithTheme>{children}</ProviderWithTheme>
    </StyledJsxRegistry>
  );
}
"use client";
import {
  Inter,
  Roboto,
  Plus_Jakarta_Sans,
  Source_Code_Pro,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "@/utils/context/theme-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { colorMode } = useContext(ThemeContext);
  return (
    <GluestackUIProvider mode={colorMode}>
      {children}
    </GluestackUIProvider>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${roboto.variable} ${sourceCodePro.variable} ${inter.className} ${spaceMono.variable}`}
    >
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

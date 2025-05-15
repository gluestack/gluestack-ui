"use client";
import {
  Inter,
  Roboto,
  Plus_Jakarta_Sans,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/header";
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

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { colorMode } = useContext(ThemeContext);
  return <GluestackUIProvider mode={colorMode}>{children}</GluestackUIProvider>;
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
      className={`${plusJakartaSans.variable} ${roboto.variable} ${sourceCodePro.variable} ${inter.className}`}
    >
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeWrapper>
            <div className="flex flex-col w-full h-full">
              <Header
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
              />
              <div className="w-4/5 h-[calc(100vh-64px)]">{children}</div>
            </div>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

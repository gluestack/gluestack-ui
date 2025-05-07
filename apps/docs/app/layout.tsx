"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GluestackUIProvider mode="light">
          <div className="flex flex-col w-full h-full">
            <Header />
            <div className="w-4/5 h-[calc(100vh-64px)]">{children}</div>
          </div>
        </GluestackUIProvider>
      </body>
    </html>
  );
}

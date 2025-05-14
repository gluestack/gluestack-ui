"use client";
import { Inter, Roboto, Plus_Jakarta_Sans, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${roboto.variable} ${sourceCodePro.variable} ${inter.className}`}>
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

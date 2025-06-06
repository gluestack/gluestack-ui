'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
const inter = Inter({ subsets: ['latin'] });
import StyledJsxRegistry from './registry';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ flex: 1 }}>
        <StyledJsxRegistry>
          <GluestackUIProvider mode="light">
            <div className="h-screen w-screen overflow-hidden overflow-y-scroll">
              {children}
            </div>
          </GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { GluestackUIProvider } from '@repo/ui/gluestack-ui-provider';
import StyledJsxRegistry from './registry';

export const metadata: Metadata = {
  title: 'Gluestack Monorepo — Next.js',
  description: 'Gluestack UI v4 monorepo starter — Next.js app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ flex: 1 }}>
        <StyledJsxRegistry>
          <GluestackUIProvider mode="dark">
            <div className="h-screen w-screen overflow-hidden overflow-y-scroll">
              {children}
            </div>
          </GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

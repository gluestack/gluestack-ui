import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Provider from './provider';
import { cookies } from 'next/headers';
import { ThemeProvider } from '@/utils/theme-provider';

export const metadata: Metadata = {
  title:
    'gluestack-ui v4: React & React Native UI components library for Web & Mobile App',
  description:
    'A powerful React & React Native component library with customizable Tailwind UI components & patterns. Works seamlessly with shadcn React Native for web & mobile apps!',
  openGraph: {
    title:
      'gluestack-ui v4: React & React Native UI components library for Web & Mobile App',
    description:
      'A powerful React & React Native component library with customizable Tailwind UI components & patterns. Works seamlessly with shadcn React Native for web & mobile apps!',
    siteName: 'gluestack-ui v4',
    url: 'https://v4.gluestack.io/',
    images: [
      {
        url: 'https://v4.gluestack.io/images/og-image.png',
        alt: 'gluestack-ui v4: React & React Native Components & Patterns',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gluestack',
    title: 'gluestack-ui v4: React & React Native Components & Patterns',
    description:
      'Copy-paste universal, accessible and beautifully designed components & patterns crafted with Tailwind CSS (NativeWind) for React Native, Next.js, Expo & React.',
    images: [
      {
        url: 'https://v4.gluestack.io/images/og-image.png',
        alt: 'Copy-paste universal, accessible and beautifully designed components & patterns crafted with Tailwind CSS (NativeWind) for React Native, Next.js, Expo & React.',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon/apple-touch-icon.png',
  },
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read theme from cookies
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get('theme') as
    | {
        name: string;
        value: 'light' | 'dark' | 'system';
      }
    | undefined;

  const theme = cookieTheme?.value || 'dark';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>
          gluestack-ui v4 - React & React Native UI components library for Web &
          Mobile App
        </title>
      </head>
      <body className={`${geistSans.className} flex-1`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

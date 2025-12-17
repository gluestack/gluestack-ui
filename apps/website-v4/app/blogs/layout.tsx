import WebsiteLayout from '@/components/page-components/landing-page/website-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'gluestack: React & React Native UI components library for Web & Mobile App',
  description:
    'A powerful React & React Native component library with customizable Tailwind UI components & patterns. Works seamlessly with shadcn React Native for web & mobile apps!',
  openGraph: {
    title:
      'gluestack: React & React Native UI components library for Web & Mobile App',
    description:
      'A powerful React & React Native component library with customizable Tailwind UI components & patterns. Works seamlessly with shadcn React Native for web & mobile apps!',
    siteName: 'gluestack',
    url: 'https://gluestack.io/',
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        alt: 'gluestack: React & React Native Components & Patterns',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gluestack',
    title: 'gluestack: React & React Native Components & Patterns',
    description:
      'Copy-paste universal, accessible and beautifully designed components & patterns crafted with Tailwind CSS (NativeWind) for React Native, Next.js, Expo & React.',
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        alt: 'Copy-paste universal, accessible and beautifully designed components & patterns crafted with Tailwind CSS (NativeWind) for React Native, Next.js, Expo & React.',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon/apple-touch-icon.png',
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WebsiteLayout>{children}</WebsiteLayout>;
}

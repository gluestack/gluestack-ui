import App from '@/components/page-components/landing-page';
import { Metadata } from 'next';
import { headers } from 'next/headers';

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
        url: 'https://nightly.gluestack.io/images/og-image.png',
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
        url: 'https://nightly.gluestack.io/images/og-image.png',
        alt: 'Copy-paste universal, accessible and beautifully designed components & patterns crafted with Tailwind CSS (NativeWind) for React Native, Next.js, Expo & React.',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon/apple-touch-icon.png',
  },
};

export default function Home() {
  const headersList = headers();
  const referrer =
    headersList.get('referer') || headersList.get('referrer') || '';
  return <App referrer={referrer} />;
}

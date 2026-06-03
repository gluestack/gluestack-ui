import App from '@/components/page-components/landing-page';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'gluestack - React & React Native Components for Web & Mobile Apps',
  description:
    'Copy-paste universal, accessible and beautifully designed components & patterns crafted with Tailwind CSS (NativeWind) for React Native, Next.js, Expo & React.',
  openGraph: {
    title: 'gluestack — React & React Native UI Component Library',
    description:
      'Copy-paste universal, accessible and beautifully designed components & patterns crafted with Tailwind CSS (NativeWind) for React Native, Next.js, Expo & React.',
    siteName: 'gluestack',
    url: 'https://gluestack.io/',
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        alt: 'gluestack — React & React Native Components & Patterns',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gluestack',
    title: 'gluestack — React & React Native UI Component Library',
    description:
      'Copy-paste universal, accessible and beautifully designed components & patterns crafted with Tailwind CSS (NativeWind) for React Native, Next.js, Expo & React.',
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        alt: 'gluestack — React & React Native Components & Patterns',
      },
    ],
  },
};

export default async function Home() {
  const headersList = await headers();
  const referrer =
    headersList.get('referer') || headersList.get('referrer') || '';
  return <App referrer={referrer} />;
}

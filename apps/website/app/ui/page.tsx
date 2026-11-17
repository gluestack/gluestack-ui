import App from '@/components/page-components/landing-page';
import { Metadata } from 'next';
import { headers } from 'next/headers';

// The component library's home (this was gluestack.io/ before patterns became the front page).
export const metadata: Metadata = {
  title: 'gluestack-ui: React & React Native UI components library for Web & Mobile',
  description:
    'A powerful React & React Native component library with customizable Tailwind UI components & patterns. Copy-paste universal, accessible components for Expo, React Native, Next.js and React.',
  alternates: { canonical: 'https://gluestack.io/ui' },
  openGraph: {
    title: 'gluestack-ui: React & React Native UI components library',
    description:
      'Copy-paste universal, accessible and beautifully designed components crafted with Tailwind CSS (NativeWind) for React Native, Next.js, Expo & React.',
    siteName: 'gluestack',
    url: 'https://gluestack.io/ui',
    images: [{ url: 'https://gluestack.io/images/og-image.png', alt: 'gluestack-ui: React & React Native Components' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gluestack',
    title: 'gluestack-ui: React & React Native Components',
    images: [{ url: 'https://gluestack.io/images/og-image.png' }],
  },
};

export default async function UiHome() {
  const headersList = await headers();
  const referrer = headersList.get('referer') || headersList.get('referrer') || '';
  return <App referrer={referrer} />;
}

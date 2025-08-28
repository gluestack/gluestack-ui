import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | gluestack',
  description:
    'Understand how and why cookies and other technologies may be stored on and accessed from your device when you use our services.',
  openGraph: {
    title: 'Cookie Policy | gluestack',
    description:
      'Understand how and why cookies and other technologies may be stored on and accessed from your device when you use our services.',
    siteName: 'gluestack',
    url: 'https://gluestack.io/cookie-policy',
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        alt: 'Understand how and why cookies and other technologies may be stored on and accessed from your device when you use our services.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gluestackio',
    title: 'Cookie Policy | gluestack',
    description:
      'Understand how and why cookies and other technologies may be stored on and accessed from your device when you use our services.',
    images: [
      {
        url: 'https://gluestack.io/images/og-image.png',
        alt: 'Understand how and why cookies and other technologies may be stored on and accessed from your device when you use our services.',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon/apple-touch-icon.png',
  },
};

const CookiePolicyLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default CookiePolicyLayout;

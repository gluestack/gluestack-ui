import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | gluestack',
  description:
    'Explore our Privacy Policy to understand how we prioritize and protect your data while providing an exceptional user experience.',
  openGraph: {
    title: 'Privacy Policy | gluestack',
    description:
      'Explore our Privacy Policy to understand how we prioritize and protect your data while providing an exceptional user experience.',
    siteName: 'Privacy Policy | gluestack',
    url: 'https://gluestack.io/privacy-policy',
    images: [
      {
        url: 'https://nightly.gluestack.io/images/og-image.png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gluestack',
    title: 'Privacy Policy | gluestack',
    description:
      'Explore our Privacy Policy to understand how we prioritize and protect your data while providing an exceptional user experience.',
    images: [
      {
        url: 'https://nightly.gluestack.io/images/og-image.png',
        alt: 'Explore our Privacy Policy to understand how we prioritize and protect your data while providing an exceptional user experience.',
      },
    ],
  },
  alternates: {
    canonical: 'https://gluestack.io/privacy-policy',
  },
  icons: {
    icon: 'https://gluestack.io/images/logo.png',
  },
};

const PrivacyPolicyLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default PrivacyPolicyLayout;

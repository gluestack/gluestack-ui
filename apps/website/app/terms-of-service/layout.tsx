import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | gluestack',
  description: 'Terms of Service for gluestack',
  openGraph: {
    title: 'Terms of Service | gluestack',
    description: 'Terms of Service for gluestack',
    siteName: 'gluestack',
    url: 'https://gluestack.io/terms-of-service',
    images: [
      {
        url: 'https://nightly.gluestack.io/images/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gluestack',
    title: 'Terms of Service | gluestack',
    description: 'Terms of Service for gluestack',
    images: [
      {
        url: 'https://nightly.gluestack.io/images/og-image.png',
        alt: 'Terms of Service for gluestack',
      },
    ],
  },
  alternates: {
    canonical: 'https://gluestack.io/terms-of-service',
  },
};

const TermsAndServicesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default TermsAndServicesLayout;

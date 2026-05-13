import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Contact | gluestack',
  description:
    'Get in touch for enterprise licensing, custom development, team training, and consulting solutions built on gluestack.',
  openGraph: {
    title: 'Enterprise Contact | gluestack',
    description:
      'Get in touch for enterprise licensing, custom development, team training, and consulting solutions built on gluestack.',
    url: 'https://gluestack.io/contact',
    siteName: 'gluestack',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Contact | gluestack',
    description:
      'Get in touch for enterprise licensing, custom development, team training, and consulting solutions built on gluestack.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Enterprise Contact | gluestack',
            url: 'https://gluestack.io/contact',
            description:
              'Get in touch for enterprise licensing, custom development, team training, and consulting solutions built on gluestack.',
            mainEntity: {
              '@type': 'Organization',
              name: 'gluestack',
              url: 'https://gluestack.io',
            },
          }),
        }}
      />
      {children}
    </>
  );
}

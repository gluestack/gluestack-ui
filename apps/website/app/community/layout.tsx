import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community: Interns & Call for Proposals | gluestack',
  description:
    'Join the gluestack community. Apply for our internship program or submit a proposal for talks, workshops, and project contributions.',
  openGraph: {
    title: 'Community: Interns & Call for Proposals | gluestack',
    description:
      'Join the gluestack community. Apply for our internship program or submit a proposal for talks, workshops, and project contributions.',
    url: 'https://gluestack.io/community',
    siteName: 'gluestack',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community: Interns & Call for Proposals | gluestack',
    description:
      'Join the gluestack community. Apply for our internship program or submit a proposal for talks, workshops, and project contributions.',
  },
};

export default function CommunityLayout({
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
            '@type': 'WebPage',
            name: 'Community: Interns & Call for Proposals | gluestack',
            url: 'https://gluestack.io/community',
            description:
              'Join the gluestack community. Apply for our internship program or submit a proposal for talks, workshops, and project contributions.',
          }),
        }}
      />
      {children}
    </>
  );
}

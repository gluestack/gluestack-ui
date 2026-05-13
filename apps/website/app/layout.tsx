import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import CanonicalLink from '@/components/custom/canonical/CanonicalLink';
import { cookies } from 'next/headers';

import { Provider } from './provider';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialColorMode = (cookieStore.get('colorMode')?.value || 'dark') as
    | 'light'
    | 'dark'
    | 'system';

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'gluestack',
              url: 'https://gluestack.io',
              logo: 'https://gluestack.io/svg/gluestack_logo.svg',
              sameAs: [
                'https://github.com/gluestack/gluestack-ui',
                'https://twitter.com/gluestack',
                'https://discord.com/invite/V5SU7HZSAQ',
                'https://www.linkedin.com/company/gluestackio/',
                'https://bsky.app/profile/gluestack.io',
              ],
            }),
          }}
        />

        <CanonicalLink />

        {/* Google Tag Manager - moved to async script */}
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
            `,
          }}
        />
      </head>
      <body className={GeistSans.className}>
        <Provider initialColorMode={initialColorMode}>{children}</Provider>
      </body>
    </html>
  );
}

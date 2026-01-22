import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Source_Code_Pro } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import { Roboto } from 'next/font/google';
import './globals.css';
import CanonicalLink from '@/components/custom/canonical/CanonicalLink';
import { cookies } from 'next/headers';

import { Provider } from './provider';
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});
const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
});
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${plusJakartaSans.variable} ${sourceCodePro.variable} ${inter.variable} ${spaceMono.variable} ${roboto.variable}`} suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow" />

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

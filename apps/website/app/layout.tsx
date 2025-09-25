import {
  Inter,
  Roboto,
  Plus_Jakarta_Sans,
  Source_Code_Pro,
  Space_Mono,
} from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import CanonicalLink from '@/components/custom/canonical/CanonicalLink';
import Provider from './provider';

// Configure fonts with local fallbacks and optimized loading
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  adjustFontFallback: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
  preload: false,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  adjustFontFallback: true,
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: false,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  adjustFontFallback: true,
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
  preload: false,
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'SF Mono',
    'Menlo',
    'Consolas',
    'Liberation Mono',
    'monospace',
  ],
  adjustFontFallback: true,
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-space-mono',
  preload: false,
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'SF Mono',
    'Menlo',
    'Consolas',
    'Liberation Mono',
    'monospace',
  ],
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${roboto.variable} ${sourceCodePro.variable} ${inter.className} ${spaceMono.variable} ${GeistMono.className} ${GeistSans.className}`}
    >
      <head>
        <meta name="robots" content="index, follow" />
        {/* Preconnect to Google Fonts domains with higher priority */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Optimize resource loading hints */}
        <meta name="resource-preload-policy" content="conservative" />
        <CanonicalLink />
        {/* Google Tag Manager */}
        <script
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
        {/* End Google Tag Manager */}
      </head>
      <body className={GeistSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

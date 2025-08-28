import Head from 'next/head';
import { usePathname } from 'next/navigation';

export function Meta({ pageTitle, description, ogImgUrl, ogUrl }: any) {
  const pathname = usePathname();
  const canonical = `https://gluestack.io${pathname}`; // change for your project

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="robots" content="index,follow" />

      <link rel="manifest" href="/manifest.json" />

      <link rel="canonical" href={canonical} />

      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <title>{pageTitle || 'gluestack-ui'}</title>

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/icon/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/icon/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/icon/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/icon/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/icon/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/icon/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icon/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icon/apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icon/apple-touch-icon-180x180.png"
      />
      <meta
        key="description"
        name="description"
        content={
          description ||
          'gluestack - One stack for web, mobile & backend. 100% open source full-stack framework that takes away the complexities of building modern web & mobile apps.'
        }
      />
      <meta key="og:type" property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        key="og:title"
        property="og:title"
        content={pageTitle || 'gluestack-ui: Universal headless components'}
      />
      <meta
        name="twitter:title"
        content={pageTitle || 'gluestack-ui: Universal headless components'}
      />

      <meta
        key="og:description"
        property="og:description"
        content={
          description ||
          'Customizable Components for React Native, Next.js, Expo & React with Optional Styling'
        }
      />
      <meta
        name="og:image"
        content={ogImgUrl || 'https://gluestack.io/images/og-image.png'}
      />

      <meta name="twitter:site" content="@gluestackio" />

      <meta
        property="twitter:description"
        content="Customizable Components for React Native, Next.js, Expo & React with Optional Styling"
      />
      <meta
        name="twitter:image"
        content="https://gluestack.io/images/og-image.png"
      />

      <meta
        name="twitter:image:alt"
        content="Customizable Components for React Native, Next.js, Expo & React with Optional Styling"
      />

      <meta property="og:url" content={ogUrl || 'https://gluestack.io'} />

      <meta property="twitter:url" content={ogUrl || 'https://gluestack.io'} />
    </Head>
  );
}

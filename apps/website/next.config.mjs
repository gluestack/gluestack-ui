import { withSentryConfig } from '@sentry/nextjs';
import withPlugins from 'next-compose-plugins';
import createMDX from '@next/mdx';
import { withExpo } from '@expo/next-adapter';
import { withGluestackUI } from '@gluestack/ui-next-adapter';
import remarkPrism from 'remark-prism';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import { redirects, oldRedirects } from './redirects.js';

// Base config that will be enhanced by withGluestackUI
const baseNextConfig = {
  async redirects() {
    return [...redirects, ...oldRedirects];
  },
  async headers() {
    return [
      {
        source: '/(.*)', // apply to all routes
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow', // same options as meta tag
          },
        ],
      },
    ];
  },
  webpack: (config, context) => {
    // Add Expo-specific asset registry alias
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native/Libraries/Image/AssetRegistry':
        'react-native-web/dist/cjs/modules/AssetRegistry', // Fix for loading images in web builds with Expo-Image
    };
    return config;
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    instrumentationHook: true,
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'qr.expo.dev',
      },
      {
        hostname: 'i.imgur.com',
      },
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'gluestack.github.io',
      },
      {
        hostname: 'pbs.twimg.com',
      },
    ],
  },
};

// Apply withGluestackUI to auto-configure transpilePackages and React Native Web setup
// Then apply withExpo for Expo-specific configuration
const nextConfig = withExpo(withGluestackUI(baseNextConfig));

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkPrism, remarkToc],
    rehypePlugins: [rehypeSlug],
  },
});

const config = withPlugins([withMDX], {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  ...nextConfig,
});

export default withSentryConfig(config, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: 'gluestack',
  project: 'gluestack-website',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});

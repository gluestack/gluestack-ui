import { withSentryConfig } from '@sentry/nextjs';
import withPlugins from 'next-compose-plugins';
import createMDX from '@next/mdx';
import { withExpo } from '@expo/next-adapter';
import remarkPrism from 'remark-prism';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import { redirects, oldRedirects } from './redirects.js';

const nextConfig = withExpo({
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
          {
            key: 'Permissions-Policy',
            value: 'compute-pressure=()', // Explicitly disable compute-pressure API
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      'react-native/Libraries/Image/AssetRegistry':
        'react-native-web/dist/cjs/modules/AssetRegistry', // Fix for loading images in web builds with Expo-Image
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
  },
  transpilePackages: [
    // you need to list `react-native` because `react-native-web` `@gluestack-ui/utils-v4-experimental` is aliased to `react-native`.
    'react-native',
    'react-native-web',
    'ui',
    'nativewind',
    'react-native-css-interop',
    '@expo/html-elements',
    'react-native-safe-area-context',
    '@gluestack-ui/utils-v4-experimental',
    '@gluestack-ui/core-v4-experimental',
    // Add other packages that need transpiling
  ],
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
});

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

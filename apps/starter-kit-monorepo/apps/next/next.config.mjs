import { withGluestackUI } from '@gluestack/ui-next-adapter';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    '@repo/ui',
    'nativewind',
    '@gluestack-ui/core',
    '@gluestack-ui/utils',
    'react-native',
    'react-native-web',
    'react-native-svg',
    'react-native-reanimated',
    'react-native-safe-area-context',
    '@expo/html-elements',
    '@legendapp/motion',
    '@gorhom/bottom-sheet',
    'lucide-react-native',
  ],
  turbopack: {
    root: '/Users/ujjwalaggarwal/Desktop/gluestack/gluestack-ui/apps/starter-kit-monorepo',
  },
};

export default withGluestackUI(nextConfig);

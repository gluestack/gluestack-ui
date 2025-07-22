# UI Next.js Adapter

A streamlined Next.js configuration adapter for Gluestack-ui component library that provides React Native Web support, optimized webpack settings, and Turbopack compatibility out of the box.

## Installation

```bash
npm install @gluestack-nightly/ui-next-adapter
# or
yarn add @gluestack-nightly/ui-next-adapter
# or
pnpm add @gluestack-nightly/ui-next-adapter
```

## Quick Start

Replace your complex `next.config.js` with a simple:

```javascript
import { withGluestackUI } from "@gluestack-nightly/ui-next-adapter";
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: []
};

export default withGluestackUI(nextConfig);
```

## Usage with Existing Config

If you have an existing Next.js configuration, just wrap it:

```javascript
import { withGluestackUI } from '@gluestack-nightly/ui-next-adapter';

const nextConfig = {
  // Your existing Next.js config
  images: {
    domains: ['example.com'],
  },
  env: {
    CUSTOM_KEY: 'my-value',
  },
};

export default withGluestackUI(nextConfig);
```

## TypeScript Support

The adapter includes full TypeScript support:

```typescript
import { withGluestackUI } from '@gluestack-nightly/ui-next-adapter';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Your config with full type safety
};

export default withGluestackUI(nextConfig);
```

## What's Included

The adapter automatically configures:

- **React Native Web**: Seamless React Native component support
- **NativeWind**: Tailwind CSS for React Native
- **CSS Interop**: Advanced styling capabilities
- **Webpack Optimization**: Proper module resolution and aliasing
- **Turbopack Support**: Next.js 13+ Turbopack compatibility
- **File Resolution**: Prioritizes `.web.js`, `.web.tsx` files for web-specific implementations

## Advanced Usage

### Custom Webpack Configuration

Your custom webpack config will be merged with the UI adapter:

```javascript
import { withGluestackUI } from '@gluestack-nightly/ui-next-adapter';

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Your custom webpack modifications
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    });
    
    return config;
  },
};

export default withGluestackUI(nextConfig);
```

### Validation

Check if your config is properly set up:

```javascript
import { withGluestackUI, validateUIConfig } from '@gluestack-nightly/ui-next-adapter';

const nextConfig = {
  // your config
};

const config = withGluestackUI(nextConfig);

if (!validateUIConfig(config)) {
  console.log('Configuration needs attention');
}

export default config;
```

## Configuration Details

The adapter handles these configurations automatically:

### Webpack Extensions Priority
1. `.next15.js`, `.next15.jsx`, `.next15.ts`, `.next15.tsx`
2. `.web.js`, `.web.jsx`, `.web.ts`, `.web.tsx`
3. `.js`, `.jsx`, `.ts`, `.tsx`
4. `.json`, `.mjs`

### Transpiled Packages
- `react-native-web`
- `nativewind`
- `react-native-css-interop`

### Aliases
- `react-native` → `react-native-web`

## Troubleshooting

### Build Errors
The adapter sets `ignoreBuildErrors: true` for TypeScript and ESLint by default. If you want stricter builds:

```javascript
module.exports = withUIAdapter({
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
});
```

### Missing Dependencies
Make sure you have the required peer dependencies:

```bash
npm install react-native-web nativewind react-native-css-interop
```

## Migration from Manual Config

**Before:**
```javascript
const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
    };
    // ... lots more config
    return config;
  },
  transpilePackages: ['react-native-web', 'nativewind', 'react-native-css-interop'],
  // ... even more config
};
```

**After:**
```javascript
import { withGluestackUI } from '@gluestack-nightly/ui-next-adapter';

const nextConfig = {
  transpilePackages: []
};

export default withGluestackUI(nextConfig);
```


## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## License

MIT License - see LICENSE file for details.

#### test
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

Replace your complex `next.config.js` with a simple one-liner:

```javascript
const { withUIAdapter } = require('@gluestack-nightly/ui-next-adapter');

module.exports = withUIAdapter();
```

## Usage with Existing Config

If you have an existing Next.js configuration, just wrap it:

```javascript
const { withUIAdapter } = require('@gluestack-nightly/ui-next-adapter');

module.exports = withUIAdapter({
  // Your existing Next.js config
  images: {
    domains: ['example.com'],
  },
  env: {
    CUSTOM_KEY: 'my-value',
  },
});
```

## TypeScript Support

The adapter includes full TypeScript support:

```typescript
import { withUIAdapter } from '@gluestack-nightly/ui-next-adapter';
import type { NextConfig } from 'next';

const config: NextConfig = withUIAdapter({
  // Your config with full type safety
});

export default config;
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
const { withUIAdapter } = require('@gluestack-nightly/ui-next-adapter');

module.exports = withUIAdapter({
  webpack: (config, { isServer }) => {
    // Your custom webpack modifications
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    });
    
    return config;
  },
});
```

### Validation

Check if your config is properly set up:

```javascript
const { withUIAdapter, validateUIConfig } = require('@gluestack-nightly/ui-next-adapter');

const config = withUIAdapter({
  // your config
});

if (!validateUIConfig(config)) {
  console.log('Configuration needs attention');
}

module.exports = config;
```

### Alternative API

For users who prefer a more explicit approach:

```javascript
const { createUIConfig } = require('@gluestack-nightly/ui-next-adapter');

module.exports = createUIConfig({
  // your Next.js config
});
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
const { withUIAdapter } = require('@gluestack-nightly/ui-next-adapter');

module.exports = withUIAdapter();
```

## API Reference

### `withUIAdapter(userConfig?: NextConfig): NextConfig`
Main function that wraps your Next.js config with UI optimizations.

### `createUIConfig(userConfig?: NextConfig): NextConfig`
Alternative function with the same functionality as `withUIAdapter`.

### `validateUIConfig(config: NextConfig): boolean`
Validates that the configuration includes all required settings.

### `defaultUIConfig`
The default configuration object used by the adapter.

### `uiWebpackConfig`
The webpack configuration function for advanced users.

### `uiTurbopackConfig`
The Turbopack configuration object for advanced users.

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## License

MIT License - see LICENSE file for details.
//
// See: https://kentcdodds.com/blog/profile-a-react-app-for-performance#build-and-measure-the-production-app
// See: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
const { TerserPlugin } = require('next/dist/compiled/terser');
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-native-web', '@gluestack-style/react', 'native-base']);
const path = require('path');

const nextConfig = {
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    //
    // Use profiler-enabled React builds
    //
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    };

    //
    // Disable mangling for easier profiling
    // WARNING: This increases bundle size, DO NOT DO THIS in production!
    //
    const terser = config.optimization.minimizer.find(
      (plugin) => typeof plugin.options !== 'undefined' && typeof plugin.options.terserOptions !== 'undefined'
    );
    if (terser) {
      terser.options.terserOptions = {
        ...terser.options.terserOptions,
        keep_classnames: true,
        keep_fnames: true,
      };
    }

    return config;
  },
};

module.exports = withPlugins(
  [
    withTM,
    [withFonts, { projectRoot: __dirname }],
    [withExpo, { projectRoot: __dirname }],
    // your plugins go here.
  ],
  nextConfig
);

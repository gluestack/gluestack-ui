import { defineConfig } from './././cypress/*';
import webpackConfig from './webpack.config';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react', // or vue
      bundler: 'webpack',
      webpackConfig,
    },
  },
});

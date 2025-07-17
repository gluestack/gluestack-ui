import { withUIAdapter } from '@gluestack-nightly/ui-next-adapter';

const config = withUIAdapter({
  // Your config with full type safety
  transpilePackages: ['@gluestack-ui-nightly/core', '@gluestack-ui-nightly/utils'],
});

export default config;
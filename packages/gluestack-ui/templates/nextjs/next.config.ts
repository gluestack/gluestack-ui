import { withUIAdapter } from '@gluestack-nightly/ui-next-adapter';
import type { NextConfig } from 'next';

const config: NextConfig = withUIAdapter({
  // Your config with full type safety
});

export default config;
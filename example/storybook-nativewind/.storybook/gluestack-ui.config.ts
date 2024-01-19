// gluestack-ui.config.ts
import { LinearGradient } from 'expo-linear-gradient';
import { createConfig } from '@custom-ui/themed';
import { config as defaultConfig } from '@custom-ui/config';

export const config = createConfig({
  ...defaultConfig,
  components: {
    LinearGradient: {
      theme: {
        props: {
          // @ts-ignore
          as: LinearGradient,
        },
      },
    },
  },
});

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal ui config
declare module '@custom-ui/themed' {
  interface UIConfig extends ConfigType {}
}

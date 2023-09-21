// gluestack-ui.config.ts
import { LinearGradient } from 'expo-linear-gradient';
import { createConfig, config as defaultConfig } from '@gluestack-ui/themed';

export const config = createConfig({
  ...defaultConfig.theme,
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
declare module '@gluestack-ui/themed' {
  interface UIConfig extends ConfigType {}
}

// gluestack-ui.config.ts
import { LinearGradient } from 'expo-linear-gradient';
import { createComponents, createConfig } from '@gluestack-ui/themed';
import { config as defaultConfig } from '@gluestack-ui/config';
export const config = createConfig({
  ...defaultConfig,
  components: createComponents({
    ...defaultConfig.components,
    LinearGradient: {
      theme: {
        props: {
          // @ts-ignore
          as: LinearGradient,
        },
      },
    },
  }),
});

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal ui config
declare module '@gluestack-ui/themed' {
  interface UIConfig extends ConfigType {}
}

import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'App Launch Kit',
  slug: 'app-launch-kit',
  extra: {
    ...config?.extra,
    // Add extra config here
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});

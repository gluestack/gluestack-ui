import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'gluestack storybook',
  slug: 'gluestack-storybook',
  extra: {
    ...config?.extra,
  },
});

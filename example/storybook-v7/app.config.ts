import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'gluestack storybook',
  slug: 'gluestack-nativewind-storybook',
  extra: {
    ...config?.extra,
  },
  updates: {
    url: 'https://u.expo.dev/46cc2b6b-d237-419f-b683-e7b9f451a2e6',
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
});

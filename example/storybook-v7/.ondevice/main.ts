import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: [
    '../../storybook-nativewind/src/components/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
};

export default main;

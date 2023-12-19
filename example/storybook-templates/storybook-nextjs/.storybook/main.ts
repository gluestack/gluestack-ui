// @ts-nocheck
import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
// import { webpackFinal as webpack } from "@gluestack/storybook-preset";
// console.log(webpack(), ">>>>>>>>>>");
const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@gluestack/storybook-addon',
  ],
  framework: {
    name: '@storybook/nextjs',
  },

  docs: {
    autodocs: 'tag',
  },
};
export default config;

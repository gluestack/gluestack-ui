import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import { DocsContainer } from '@storybook/addon-docs';
import { GroupedExample } from './ButtonGroup';

const ButtonGroup: ComponentMeta<any> = {
  title: 'stories/FORMS/Button',
  component: GroupedExample,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default ButtonGroup;
export { GroupedExample as ButtonGroup };

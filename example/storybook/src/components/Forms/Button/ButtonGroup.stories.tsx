import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import { DocsContainer } from '@storybook/addon-docs';
import { GroupedExample } from './ButtonGroup';

const ButtonGroup: ComponentMeta<any> = {
  title: 'stories/FORMS/Button',
  component: GroupedExample,
  args: {
    space: 'md',
    isAttached: true,
    direction: 'row',
  },
  argTypes: {
    space: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The space between the buttons.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    isAttached: {
      control: 'boolean',
      options: [true, false],
    },
    direction: {
      control: 'select',
      options: ['row', 'column'],
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

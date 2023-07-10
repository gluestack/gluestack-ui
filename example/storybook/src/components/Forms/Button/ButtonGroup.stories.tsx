import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import { DocsContainer } from '@storybook/addon-docs';
import { ButtonGroupStory } from './ButtonGroup';

const ButtonGroupMeta: ComponentMeta<any> = {
  title: 'stories/FORMS/Button',
  component: ButtonGroupStory,
  args: {
    space: 'md',
    isAttached: true,
    direction: 'row',
  },
  argTypes: {
    space: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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

export default ButtonGroupMeta;
export { ButtonGroupStory as ButtonGroup };

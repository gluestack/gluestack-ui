import type { ComponentMeta } from '@storybook/react-native';
import ButtonGroupStory from './ButtonGroup';

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
    },
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    isAttached: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isReversed: {
      control: 'boolean',
      options: [true, false],
    },
  },
};

export default ButtonGroupMeta;
export { ButtonGroupStory as ButtonGroup };

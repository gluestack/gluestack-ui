import type { ComponentMeta } from '@storybook/react-native';
import ButtonGroup from './ButtonGroup';

const ButtonGroupMeta: ComponentMeta<any> = {
  title: 'components/PRIMITIVES/Button',
  component: ButtonGroup,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Buttons can be grouped together as individual segments of related actions.`,
  },
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
export { ButtonGroup };

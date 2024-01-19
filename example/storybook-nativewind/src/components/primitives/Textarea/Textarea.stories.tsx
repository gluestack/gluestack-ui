import type { ComponentMeta } from '@storybook/react-native';
import Textarea from './Textarea';

const TextareaMeta: ComponentMeta<typeof Textarea> = {
  title: 'components/PRIMITIVES/Textarea',
  component: Textarea,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Textarea component is designed to accommodate larger amounts of text input. It allows multi-line input and can be easily customized to fit the user's needs.`,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isHovered: {
      control: 'boolean',
      options: [true, false],
    },
    isFocused: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isInvalid: false,
    isHovered: false,
    isFocused: false,
    isDisabled: false,
  },
};

export default TextareaMeta;

export { Textarea };

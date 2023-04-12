import type { ComponentMeta } from '@storybook/react-native';
import { TextAreaStory as TextArea } from './TextArea';

const TextAreaMeta: ComponentMeta<typeof TextArea> = {
  title: 'stories/FORMS/TextArea',
  component: TextArea,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    // variant: {
    //   control: 'select',
    //   options: ['outline', 'filled', 'underlined', 'unstyled', 'rounded'],
    // },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: { size: 'md', isInvalid: false, isDisabled: false },
  parameters: {
    docs: {
      description: {
        component:
          'The **Textarea** component helps create multi-line text inputs.',
      },
    },
  },
};

export default TextAreaMeta;

export { TextArea };

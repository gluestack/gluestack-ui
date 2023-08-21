import type { ComponentMeta } from '@storybook/react-native';
import TextareaStory from './Textarea';

const TextareaMeta: ComponentMeta<typeof TextareaStory> = {
  title: 'stories/FORMS/Textarea',
  component: TextareaStory,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
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

export default TextareaMeta;

export { TextareaStory };

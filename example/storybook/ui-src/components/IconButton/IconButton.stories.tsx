import type { ComponentMeta } from '@storybook/react-native';
import { IconButtonStory as IconButton } from './IconButton';

const IconButtonMeta: ComponentMeta<typeof IconButton> = {
  title: 'stories/FORMS/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary'],
    },
  },
  args: {
    text: 'PRESS',
    variant: 'primary',
    isLoading: false,
    showText: false,
  },
};

export default IconButtonMeta;

export { IconButton };

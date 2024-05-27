import type { ComponentMeta } from '@storybook/react-native';
import Icon from './Icon';

const IconMeta: ComponentMeta<typeof Icon> = {
  title: 'stories/Icon',
  component: Icon,
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs', '2xs'],
    },
  },
  args: {
    size: 'md',
  },
};

export default IconMeta;

export { Icon };

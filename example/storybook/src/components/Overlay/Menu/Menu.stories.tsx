import type { ComponentMeta } from '@storybook/react-native';
import { MenuStory as Menu } from './Menu';

const MenuMeta: ComponentMeta<typeof Menu> = {
  title: 'stories/OVERLAY/Menu',
  component: Menu,
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'bottom',
        'bottom end',
        'bottom start',
        'top',
        'top end',
        'top start',
        'left',
        'left end',
        'left start',
        'right',
        'right end',
        'right start',
      ],
    },
  },
  args: {
    placement: 'bottom',
  },
};

export default MenuMeta;
export { Menu };

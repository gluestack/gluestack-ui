import type { ComponentMeta } from '@storybook/react-native';
import Menu from './Menu';

const MenuMeta: ComponentMeta<typeof Menu> = {
  title: 'stories/Menu',
  component: Menu,
  argTypes: {
    placement: {
      control: 'select',
      figmaIgnore: true,
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
    showMenu: {
      control: 'boolean',
      figmaIgnore: true,
      options: [true, false],
    },
  },
  args: {
    placement: 'bottom',
    showMenu: true,
  },
};

export default MenuMeta;
export { Menu };

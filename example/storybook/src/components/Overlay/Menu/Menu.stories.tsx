import type { ComponentMeta } from '@storybook/react-native';
import { MenuStory as Menu } from './Menu';
// import { MenuStory as Menu } from './MenuDefault';
// import { MenuStory as Menu } from './MyMenuNative';
// import { MenuStory as Menu } from './FreshMenu';

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

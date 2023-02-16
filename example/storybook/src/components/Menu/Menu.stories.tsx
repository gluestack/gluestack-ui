import type { ComponentMeta } from '@storybook/react-native';
import { MenuStory as Menu } from './Menu';
import { MenuGroupStory as Group } from './MenuGroup';
import { ComplexMenuGroup } from './ComplexMenuGroup';

// var st = document.createElement('style');
// var st2 = document.createElement('style');

// st.innerHTML = `#story--menu--basic{ height: 400px }`;
// st2.innerHTML = `#story--menu--grouped{ height: 400px }`;

// document.body.append(st);
// document.body.append(st2);

const MenuMeta: ComponentMeta<typeof Menu> = {
  title: 'stories/OVERLAY/Menu',
  component: Menu,
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'bottom',
        'bottom-end',
        'bottom-start',
        'top',
        'top-end',
        'top-start',
        'left',
        'left-end',
        'left-start',
        'right',
        'right-end',
        'right-start',
      ],
    },
  },
  args: {
    placement: 'bottom',
  },
};

export default MenuMeta;

export { Menu };
export { Group };
export { ComplexMenuGroup };

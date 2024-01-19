import type { ComponentMeta } from '@storybook/react-native';
import Menu from './Menu';

const MenuMeta: ComponentMeta<typeof Menu> = {
  title: 'components/COMPOSITES/Menu',
  component: Menu,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Menu component creates a user-friendly dropdown interface that can be utilized to present a range of options or actions. This feature ensures accessibility and ease of use for the user.`,
  },
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

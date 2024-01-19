import type { ComponentMeta } from '@storybook/react-native';
import Fab from './Fab';

const FabMeta: ComponentMeta<typeof Fab> = {
  title: 'components/COMPOSITES/Fab',
  component: Fab,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Floating Action Button (FAB) is a dynamic button that stays visible and provides access to a primary action throughout the user's journey in the application. It is a powerful UI element that adds a touch of elegance and convenience to the user experience.`,
  },
  argTypes: {
    placement: {
      control: 'select',
      figmaIgnore: true,
      options: [
        'top right',
        'top left',
        'bottom right',
        'bottom left',
        'top center',
        'bottom center',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showLabel: {
      control: 'boolean',
      options: [true, false],
    },
    showIcon: {
      control: 'boolean',
      figmaIgnore: true,
      options: [true, false],
    },
  },
  args: {
    placement: 'bottom right',
    showLabel: true,
    showIcon: true,
    size: 'md',
  },
};

export default FabMeta;

export { Fab };

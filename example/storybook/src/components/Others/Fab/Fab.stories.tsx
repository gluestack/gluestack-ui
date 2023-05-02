import type { ComponentMeta } from '@storybook/react-native';
import { FabStory as Fab } from './Fab';

// var st = document.createElement('style');
// st.innerHTML = `#story--fab--basic { height: 350px }`;
// document.body.append(st);

const FabMeta: ComponentMeta<typeof Fab> = {
  title: 'stories/OTHERS/Fab',
  component: Fab,
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top-right',
        'top-left',
        'bottom-right',
        'bottom-left',
        'top-center',
        'bottom-center',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showLabel: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
  },
  args: {
    placement: 'bottom-right',
    showLabel: true,
    showIcon: true,
    size: 'md',
  },
};

export default FabMeta;

export { Fab };

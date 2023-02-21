import type { ComponentMeta } from '@storybook/react-native';
import { FabStory as Fab } from './Fab';

// var st = document.createElement('style');
// st.innerHTML = `#story--fab--basic { height: 350px }`;
// document.body.append(st);

const FabMeta: ComponentMeta<typeof Fab> = {
  title: 'stories/OTHERS/Fab',
  component: Fab,
  argTypes: {
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    showLabel: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
  },
  args: {
    position: 'top-right',
    showLabel: true,
    showIcon: true,
  },
};

export default FabMeta;

export { Fab };

import type { ComponentMeta } from '@storybook/react-native';
import { ActionsheetExample as Actionsheet } from './Actionsheet';

// // Hack for now
// var st = document.createElement('style');
// st.innerHTML = `#story--actionsheet--basic{ height: 350px }`;
// document.body.append(st);

const ActionsheetMeta: ComponentMeta<typeof Actionsheet> = {
  title: 'stories/DISCLOSURE/Actionsheet',
  component: Actionsheet,
  argTypes: {
    showActionsheet: {
      control: 'boolean',
    },
  },
  args: {
    showActionsheet: true,
  },
  parameters: {
    docs: {
      description: {
        component: '**markdown** description goes here',
      },
    },
  },
};

export default ActionsheetMeta;

export { Actionsheet };

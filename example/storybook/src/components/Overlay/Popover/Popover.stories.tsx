import type { ComponentMeta } from '@storybook/react-native';
import { PopoverStory as Popover } from './Popover';

// var st = document.createElement('style');
// var st2 = document.createElement('style');

// st.innerHTML = `#story--Popover--basic{ height: 400px }`;
// st2.innerHTML = `#story--Popover--grouped{ height: 400px }`;

// document.body.append(st);
// document.body.append(st2);

const PopoverMeta: ComponentMeta<typeof Popover> = {
  title: 'stories/OVERLAY/Popover',
  component: Popover,
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

export default PopoverMeta;

export { Popover };

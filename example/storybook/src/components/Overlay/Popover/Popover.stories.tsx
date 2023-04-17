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
        'bottom left',
        'bottom right',
        'top',
        'top left',
        'top right',
        'left',
        'left bottom',
        'left right',
        'right',
        'right bottom',
        'right top',
      ],
    },
  },
  args: {
    placement: 'bottom',
  },
};

export default PopoverMeta;

export { Popover };

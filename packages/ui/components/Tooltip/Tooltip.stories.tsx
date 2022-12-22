import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example } from './Tooltip';
// import { CustomButtonBasicExample } from './CustomButton';

const MyTooltipMeta: ComponentMeta<typeof Example> = {
  title: 'Tooltip',
  component: Example,
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
    text: 'Hello world',
    placement: 'bottom',
  },
};

export default MyTooltipMeta;

type MyTooltipStory = ComponentStory<typeof Example>;

export const Basic: MyTooltipStory = (args) => <Example {...args} />;

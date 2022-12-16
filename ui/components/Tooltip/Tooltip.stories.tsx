import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example } from './Tooltip';
// import { CustomButtonBasicExample } from './CustomButton';

const MyTooltipMeta: ComponentMeta<typeof Example> = {
  title: 'Tooltip',
  component: Example,
  argTypes: {
    onPress: { action: 'pressed the Tooltip' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyTooltipMeta;

type MyTooltipStory = ComponentStory<typeof Example>;
// type MyCustomButtonStory = ComponentStory<typeof CustomButtonBasicExample>;

export const Basic: MyTooltipStory = (args) => <Example {...args} />;
// export const Basic1: MyCustomButtonStory = (args) => (
//   <CustomButtonBasicExample {...args} />
// );

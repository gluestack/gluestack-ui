import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ModalComponent } from './Modal';

const ModalMeta: ComponentMeta<typeof ModalComponent> = {
  title: 'Modal',
  component: ModalComponent,
  argTypes: {
    // onPress: { action: 'pressed the button' },
  },
  args: {
    // text: 'Hello world',
  },
};

export default ModalMeta;

type ModalStory = ComponentStory<typeof ModalComponent>;

export const Basic: ModalStory = (args) => <ModalComponent {...args} />;
// export const Basic1: MyCustomButtonStory = (args) => (
//   <CustomButtonBasicExample {...args} />
// );

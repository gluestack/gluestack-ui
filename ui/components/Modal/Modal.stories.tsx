import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ModalComponent } from './Modal';
import { ModalComponent as MultipleModalexample } from './MultipleModal';

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
type MultipleModalStory = ComponentStory<typeof MultipleModalexample>;

export const Basic: ModalStory = (args) => <ModalComponent {...args} />;
export const MultipleModal: MultipleModalStory = (args) => (
  <MultipleModalexample {...args} />
);

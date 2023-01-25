import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Modal } from './Modal';
export const ModalStory = () => {
  return (
    <Wrapper>
      <Modal />
    </Wrapper>
  );
};
const MyModalVariantMeta: ComponentMeta<typeof ModalStory> = {
  title: 'components/stories/Modal',
  component: ModalStory,
};

export default MyModalVariantMeta;

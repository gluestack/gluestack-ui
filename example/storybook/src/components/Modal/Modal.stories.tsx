import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Modal } from './Modal';
export const ModalStory = () => {
  return <Modal />;
};
const MyModalVariantMeta: ComponentMeta<typeof ModalStory> = {
  title: 'components/stories/Modal',
  component: ModalStory,
};

export default MyModalVariantMeta;

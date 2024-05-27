import type { ComponentMeta } from '@storybook/react-native';
import Modal from './Modal';

const ModalMeta: ComponentMeta<typeof Modal> = {
  title: 'stories/Modal',
  component: Modal,
  args: {
    size: 'md',
    showModal: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      description: 'The width of modal.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    showModal: {
      control: 'boolean',
      options: [true, false],
    },
  },
};

export default ModalMeta;

export { Modal };

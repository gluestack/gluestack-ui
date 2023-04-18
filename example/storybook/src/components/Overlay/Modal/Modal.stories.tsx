import type { ComponentMeta } from '@storybook/react-native';
import { ModalStory as Modal } from './Modal';
import { MultipleModalStory as MultipleModal } from './MultipleModal';

const ModalMeta: ComponentMeta<typeof Modal> = {
  title: 'stories/OVERLAY/Modal',
  component: Modal,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  args: { size: 'md' },
};

export default ModalMeta;
export { MultipleModal };
export { Modal };

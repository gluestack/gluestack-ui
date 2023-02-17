import type { ComponentMeta } from '@storybook/react-native';
import { ModalStory as Modal } from './Modal';
import { MultipleModalStory as MultipleModal } from './MultipleModal';

// var st = document.createElement('style');
// var st2 = document.createElement('style');

// st.innerHTML = `#story--modal--basic{ height: 350px }`;
// st2.innerHTML = `#story--modal--multiple-modal{ height: 350px }`;

// document.body.append(st);
// document.body.append(st2);

const ModalMeta: ComponentMeta<typeof Modal> = {
  title: 'stories/OVERLAY/Modal',
  component: Modal,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
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

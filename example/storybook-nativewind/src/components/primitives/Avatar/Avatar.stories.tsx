import type { ComponentMeta } from '@storybook/react-native';
import Avatar from './Avatar';
import AvatarGroupExample from './AvatarGroup';
import AvatarSizeExample from './AvatarSizes';

const AvatarMeta: ComponentMeta<typeof Avatar> = {
  title: 'components/PRIMITIVES/Avatar',
  component: Avatar,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Avatar component is a versatile UI element representing a user with profile pictures, initials, or a fallback icon. It adds a personal touch to the user interface, making it more engaging.`,
  },
  args: {
    size: 'md',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    fallbackText: 'John Doe',
    badge: true,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    badge: {
      control: 'boolean',
      options: [true, false],
    },
    uri: {
      control: 'select',
      options: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://broken.link',
      ],
    },
  },
};

export default AvatarMeta;
export { Avatar };
export { AvatarSizeExample as AvatarSizes };
export { AvatarGroupExample as AvatarGroup };

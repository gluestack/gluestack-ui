import type { ComponentMeta } from '@storybook/react-native';
import { AvatarStory as Avatar } from './Avatar';
import { AvatarGroupExample } from './AvatarGroup';
import { AvatarSizeExample } from './AvatarSizes';

// var st = document.createElement('style');
// st.innerHTML = `#story--avatar--group { height: 50px }`;
// document.body.append(st);

const AvatarMeta: ComponentMeta<any> = {
  title: 'stories/MEDIA AND ICONS/Avatar',
  component: Avatar,
  args: {
    size: 'md',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    fallbackText: 'AB',
    badge: true,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    badge: {
      control: 'boolean',
    },
  },
};

// const AvatarGroup: ComponentMeta<any> = {
//   title: 'stories/MEDIA AND ICONS/Avatar Group',
//   component: AvatarGroupExample,
//   args: {
//     size: 'md',
//     badge: true,
//   },
//   argTypes: {
//     size: {
//       control: 'select',
//       options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
//     },
//     badge: {
//       control: 'boolean',
//     },
//   },
// };

// AvatarGroup.parameters = {
//   controls: {
//     exclude: /.*/g,
//   },
// };

export default AvatarMeta;
export { Avatar };
export { AvatarSizeExample as AvatarSizes };
export { AvatarGroupExample as AvatarGroup };

import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Avatar } from './Avatar';
export const AvatarStory = () => {
  return <Avatar />;
};
const MyAvatarVariantMeta: ComponentMeta<typeof AvatarStory> = {
  title: 'components/stories/Avatar',
  component: AvatarStory,
};

export default MyAvatarVariantMeta;

import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Avatar } from './Avatar';
export const AvatarStory = () => {
  return (
    <Wrapper>
      <Avatar />
    </Wrapper>
  );
};
const MyAvatarVariantMeta: ComponentMeta<typeof AvatarStory> = {
  title: 'recipes/stories/Avatar',
  component: AvatarStory,
};

export default MyAvatarVariantMeta;

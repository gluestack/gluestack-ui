import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Avatar, HStack } from '@gluestack/ui';
import { Example as Grouped } from './Group';

const AvatarMeta: ComponentMeta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
  args: {
    size: 'md',
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    fallbackText: 'AB',
    badge: false,
  },
};

export default AvatarMeta;

type CustomAvatarStory = ComponentStory<typeof Avatar>;
type CustomAvatarGroupStory = ComponentStory<typeof Grouped>;

export const Basic: CustomAvatarStory = ({
  size,
  uri,
  fallbackText,
  badge,
  ...props
}) => {
  return (
    <HStack space="md">
      <Avatar size={size}>
        <Avatar.Image
          source={{
            uri: uri,
          }}
        />
        <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
        {badge && <Avatar.Badge />}
      </Avatar>
      <Avatar size={size}>
        <Avatar.Image
          source={{
            uri: 'https://broken.link',
          }}
        />
        <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
        {badge && <Avatar.Badge />}
      </Avatar>
    </HStack>
  );
};

export const Group: CustomAvatarGroupStory = (args) => <Grouped {...args} />;

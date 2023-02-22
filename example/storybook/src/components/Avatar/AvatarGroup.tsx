// @ts-nocheck
import type { ComponentStory } from '@storybook/react-native';
import { Avatar } from './Avatar';
import { HStack } from '@gluestack/design-system';
import React from 'react';
import Wrapper from '../Wrapper';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

export const AvatarGroupExample: CustomAvatarStory = ({
  size = 'md',
  badge,
}: any) => {
  const sx = {
    // position: 'absolute',
    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: '$white',
  };

  return (
    <Wrapper>
      <HStack
        space="md"
        // mb="$12"
        h="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar.Group>
          <Avatar size={size} {...sx}>
            <Avatar.FallbackText>AB</Avatar.FallbackText>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}
            />
            {badge && <Avatar.Badge />}
          </Avatar>
          <Avatar size={size} {...sx}>
            <Avatar.FallbackText>AB</Avatar.FallbackText>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
            />
            {badge && <Avatar.Badge />}
          </Avatar>
          <Avatar size={size} {...sx}>
            <Avatar.FallbackText>AB</Avatar.FallbackText>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}
            />
            {badge && <Avatar.Badge />}
          </Avatar>
          <Avatar size={size} {...sx}>
            <Avatar.FallbackText>AB</Avatar.FallbackText>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
            />
            {badge && <Avatar.Badge />}
          </Avatar>
        </Avatar.Group>
      </HStack>
    </Wrapper>
  );
};

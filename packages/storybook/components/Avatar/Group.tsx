import { ComponentStory } from '@storybook/react-native';
import { Avatar, HStack } from '@gluestack/ui';
import React from 'react';
import Wrapper from '../Wrapper';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

const ExampleGroup: CustomAvatarStory = ({
  size,
  uri,
  fallbackText,
  badge,
}) => {
  const sx = {
    position: 'absolute',
    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: '$white',
  };

  return (
    <Wrapper>
      <HStack space="md" mb="$12">
        <Avatar.Group>
          <Avatar size={size} {...sx} left={0}>
            <Avatar.Image
              source={{
                uri: uri,
              }}
            />
            <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
            {badge && <Avatar.Badge />}
          </Avatar>
          <Avatar size={size} {...sx} left={40}>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
            />
            <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
            {badge && <Avatar.Badge />}
          </Avatar>
          <Avatar size={size} {...sx} left={80}>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}
            />
            <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
            {badge && <Avatar.Badge />}
          </Avatar>
          <Avatar size={size} {...sx} left={120}>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
            />
            <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
            {badge && <Avatar.Badge />}
          </Avatar>
        </Avatar.Group>
      </HStack>
    </Wrapper>
  );
};

export const Group = ExampleGroup.bind({});

Group.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

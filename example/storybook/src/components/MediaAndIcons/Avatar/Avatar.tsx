import type { ComponentStory } from '@storybook/react-native';

import React from 'react';
import Wrapper from '../../Wrapper';
import { VStack, Avatar, HStack, Icon, Heading } from '../../../ui-components';
import { Path, G } from 'react-native-svg';
import { createIcon } from '@gluestack-ui/icon';
import { styled, AsForwarder } from '@dank-style/react';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

const IconRoot: any = styled(
  AsForwarder,
  {},
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

const AvatarIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 48 48',
  path: (
    <G
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M29.8337 31.5V29.8333C29.8337 28.9493 29.4825 28.1014 28.8573 27.4763C28.2322 26.8512 27.3844 26.5 26.5003 26.5H21.5003C20.6163 26.5 19.7684 26.8512 19.1433 27.4763C18.5182 28.1014 18.167 28.9493 18.167 29.8333V31.5"
        stroke="currentColor"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M24.0003 23.1667C25.8413 23.1667 27.3337 21.6743 27.3337 19.8333C27.3337 17.9924 25.8413 16.5 24.0003 16.5C22.1594 16.5 20.667 17.9924 20.667 19.8333C20.667 21.6743 22.1594 23.1667 24.0003 23.1667Z"
        stroke="currentColor"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
  ),
});

export const AvatarStory: CustomAvatarStory = ({
  size = 'md',
  uri = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  badge = true,
  fallbackText = 'John Doe',
}: any) => {
  return (
    <Wrapper>
      <HStack space="md" h="100%" justifyContent="center" alignItems="center">
        <Avatar size={size}>
          <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: uri,
            }}
          />
          {badge && <Avatar.Badge />}
        </Avatar>
        <Avatar size={size}>
          <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: 'https://broken.link',
            }}
          />
          {badge && <Avatar.Badge />}
        </Avatar>
      </HStack>
    </Wrapper>
  );
};

export { HStack, VStack, Avatar, AvatarIcon, Icon, Heading };

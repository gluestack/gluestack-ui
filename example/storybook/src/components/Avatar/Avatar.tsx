import { Root, FallbackText, Image, Badge, Group } from './styled-component';
import { createAvatar } from '@universa11y/avatar';
import React from 'react';
import { Wrapper } from '../Wrapper';

const AvatarTemp = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});

export const Avatar = () => {
  return (
    <Wrapper>
      <AvatarTemp.Group>
        <AvatarTemp size="sm">
          <AvatarTemp.FallbackText>AB</AvatarTemp.FallbackText>
          <AvatarTemp.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          <AvatarTemp.Badge />
        </AvatarTemp>
        <AvatarTemp size="sm">
          <AvatarTemp.FallbackText>AB</AvatarTemp.FallbackText>
          <AvatarTemp.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          <AvatarTemp.Badge />
        </AvatarTemp>
        <AvatarTemp size="sm">
          <AvatarTemp.FallbackText>AB</AvatarTemp.FallbackText>
          <AvatarTemp.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          <AvatarTemp.Badge />
        </AvatarTemp>
        <AvatarTemp size="sm">
          <AvatarTemp.FallbackText>AB</AvatarTemp.FallbackText>
          <AvatarTemp.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          <AvatarTemp.Badge />
        </AvatarTemp>
      </AvatarTemp.Group>
    </Wrapper>
  );
};

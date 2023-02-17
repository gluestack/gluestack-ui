import { Root, FallbackText, Image, Badge, Group } from './styled-component';
import { createAvatar } from '@universa11y/avatar';
import React from 'react';
import { Wrapper } from '../Wrapper';

export const AccessibleAvatar: any = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});

export const Avatar = () => {
  return (
    <Wrapper>
      <AccessibleAvatar.Group>
        <AccessibleAvatar size="md">
          <AccessibleAvatar.FallbackText>AB</AccessibleAvatar.FallbackText>
          <AccessibleAvatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          <AccessibleAvatar.Badge />
        </AccessibleAvatar>
        <AccessibleAvatar size="sm">
          <AccessibleAvatar.FallbackText>AB</AccessibleAvatar.FallbackText>
          <AccessibleAvatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          <AccessibleAvatar.Badge />
        </AccessibleAvatar>
        <AccessibleAvatar size="sm">
          <AccessibleAvatar.FallbackText>AB</AccessibleAvatar.FallbackText>
          <AccessibleAvatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          <AccessibleAvatar.Badge />
        </AccessibleAvatar>
        <AccessibleAvatar size="sm">
          <AccessibleAvatar.FallbackText>AB</AccessibleAvatar.FallbackText>
          <AccessibleAvatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          <AccessibleAvatar.Badge />
        </AccessibleAvatar>
      </AccessibleAvatar.Group>
    </Wrapper>
  );
};

export default Avatar;

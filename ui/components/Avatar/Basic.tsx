import { Avatar, HStack } from '@gluestack/ui';
import React from 'react';

export const Example = ({ size, uri, fallbackText, badge }: any) => {
  return (
    <HStack space="sm">
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

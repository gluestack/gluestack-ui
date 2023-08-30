import React from 'react';
import { Avatar, AvatarFallbackText } from '@gluestack-ui/themed';

const AvatarDemo = () => {
  return (
    <Avatar
      bgColor="$amber600"
      size="md"
      borderRadius="$full"
      style={{ margin: 'auto' }}
    >
      <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
    </Avatar>
  );
};

export default AvatarDemo;

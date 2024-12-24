import { Avatar, AvatarFallbackText } from '@gluestack-ui/themed';
import React from 'react';
const Avatardemo = () => {
  return (
    <Avatar bgColor="$indigo600" size="md" borderRadius="$full">
      <AvatarFallbackText>Richard Bay</AvatarFallbackText>
    </Avatar>
  );
};

export default Avatardemo;

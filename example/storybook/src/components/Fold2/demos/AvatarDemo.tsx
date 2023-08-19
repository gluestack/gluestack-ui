import React from 'react';
import { Avatar } from '../../../ui-components';

const AvatarDemo = () => {
  return (
    <Avatar
      bgColor="$amber600"
      size="md"
      borderRadius="$full"
      style={{ margin: 'auto' }}
    >
      <Avatar.FallbackText>Sandeep Srivastava</Avatar.FallbackText>
    </Avatar>
  );
};

export default AvatarDemo;

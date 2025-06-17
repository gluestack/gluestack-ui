import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
} from '@/components/ui/avatar';
import React from 'react';

const AvatarDemo = () => {
  return (
    <Avatar size="md">
      <AvatarFallbackText>Jane Doe</AvatarFallbackText>
      <AvatarBadge />
    </Avatar>
  );
};

export default AvatarDemo;

import { Badge, BadgeText } from '@gluestack-ui/themed';
import React from 'react';
const BadgeDemo = () => {
  return (
    <Badge size="md" variant="solid" borderRadius="$none" action="info">
      <BadgeText>Verified</BadgeText>
    </Badge>
  );
};

export default BadgeDemo;

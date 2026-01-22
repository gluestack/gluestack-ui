import { StarIcon } from '@/components/ui/icon';
import { Badge, BadgeText, BadgeIcon } from '@/components/ui/badge';
import React from 'react';

const BadgeDemo = () => {
  return (
    <Badge size="md" variant="default">
      <BadgeText>New</BadgeText>
      <BadgeIcon as={StarIcon} className="ml-2" />
    </Badge>
  );
};

export default BadgeDemo;

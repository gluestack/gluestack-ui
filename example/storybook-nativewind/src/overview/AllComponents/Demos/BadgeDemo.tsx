import React from 'react';
import { Badge, BadgeText, BadgeIcon } from '@/components/ui/badge';
import { GlobeIcon } from '@/components/ui/icon';
const BadgeDemo = () => {
  return (
    <Badge>
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  );
};

export default BadgeDemo;

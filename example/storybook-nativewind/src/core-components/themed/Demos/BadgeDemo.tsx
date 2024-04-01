import React from 'react';
import { Badge, BadgeText, BadgeIcon } from '..//badge';
import { GlobeIcon } from '..//icon';
const BadgeDemo = () => {
  return (
    <Badge>
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  );
};

export default BadgeDemo;

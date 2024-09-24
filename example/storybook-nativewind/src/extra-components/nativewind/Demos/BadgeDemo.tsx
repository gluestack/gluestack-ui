import React from 'react';
import {
  Badge,
  BadgeText,
  BadgeIcon,
  GlobeIcon,
} from '../../../core-components/nativewind';

const BadgeDemo = () => {
  return (
    <Badge>
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  );
};

export default BadgeDemo;

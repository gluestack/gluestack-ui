import React from 'react';
import {
  Badge,
  BadgeText,
  BadgeIcon,
} from '../../../core-components/nativewind/badge';
import { GlobeIcon } from '../../../core-components/nativewind/icon';
const BadgeDemo = () => {
  return (
    <Badge>
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  );
};

export default BadgeDemo;

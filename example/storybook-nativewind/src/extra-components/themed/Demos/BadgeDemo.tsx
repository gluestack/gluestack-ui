import React from 'react';
import {
  Badge,
  BadgeText,
  BadgeIcon,
} from '../../../core-components/themed/badge';
import { GlobeIcon } from '../../../core-components/themed/icon';
const BadgeDemo = () => {
  return (
    <Badge>
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} ml="$2" />
    </Badge>
  );
};

export default BadgeDemo;

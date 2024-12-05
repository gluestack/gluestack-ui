import { GlobeIcon } from '@/components/ui/icon';
import { Badge, BadgeText, BadgeIcon } from '@/components/ui/badge';
import React from 'react';

const BadgeDemo = () => {
  return (
    <Badge size="md" variant="solid" action="muted">
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  );
};

export default BadgeDemo;

// BadgesGrid.tsx

import React from 'react';
import { Badge, BadgeText } from '../components/ui/badge';
const BadgesGrid = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 my-4">
      <Badge size="lg" variant="solid" action="success">
        <BadgeText>Success</BadgeText>
      </Badge>
      <Badge size="lg" variant="solid" action="info">
        <BadgeText>Information</BadgeText>
      </Badge>
      <Badge size="lg" variant="solid" action="warning">
        <BadgeText>Warning</BadgeText>
      </Badge>
      <Badge size="lg" variant="solid" action="muted">
        <BadgeText>Muted</BadgeText>
      </Badge>
      <Badge size="lg" variant="solid" action="error">
        <BadgeText>Error</BadgeText>
      </Badge>
    </div>
  );
};

export default BadgesGrid;

import { Root, Text, Icon } from './styled-component';
import { createBadge } from '@universa11y/badge';
import React from 'react';

const BadgeTemp = createBadge({
  Root,
  Text,
  Icon,
});

export const Badge = () => {
  return (
    <>
      <BadgeTemp>
        <BadgeTemp.Text>Badge Text</BadgeTemp.Text>
        <BadgeTemp.Icon sx={{ style: { pl: 4 } }}></BadgeTemp.Icon>
      </BadgeTemp>
    </>
  );
};

import React from 'react';
import { Badge, GlobeIcon, HStack } from '../../../ui-components';

const BadgeDemo = () => {
  return (
    <HStack style={{ margin: 'auto' }}>
      <Badge size="md" variant="solid" borderRadius="$none" action="success">
        <Badge.Text>New feature</Badge.Text>
        <Badge.Icon as={GlobeIcon} ml="$2" />
      </Badge>
    </HStack>
  );
};

export default BadgeDemo;

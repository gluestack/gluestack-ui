import React from 'react';
import {
  Badge,
  GlobeIcon,
  HStack,
  BadgeText,
  BadgeIcon,
} from '@gluestack-ui/themed';

const BadgeDemo = () => {
  return (
    <HStack mx="auto">
      <Badge size="md" variant="solid" borderRadius="$none" action="success">
        <BadgeText>New feature</BadgeText>
        <BadgeIcon as={GlobeIcon} ml="$2" />
      </Badge>
    </HStack>
  );
};

export default BadgeDemo;

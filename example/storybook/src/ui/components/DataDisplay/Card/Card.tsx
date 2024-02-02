import React from 'react';
import {
  Card,
  Heading,
  Text,
  Image,
  Link,
  LinkText,
  HStack,
  Icon,
  ArrowRightIcon,
  Avatar,
  Box,
  VStack,
  AvatarFallbackText,
  AvatarImage,
  Button,
  ButtonText,
  Divider,
} from '@gluestack-ui/themed';

const CardBasic = ({ ...props }: any) => {
  return (
    <Card {...props}>
      <Heading mb="$1" size="md">
        Quick Start
      </Heading>
      <Text size="sm">Start building your next project in minutes</Text>
    </Card>
  );
};

CardBasic.description =
  'This is a basic Card component example. A Card component serves as a visual container that groups related content and actions.';

export default CardBasic;
export {
  Card,
  Heading,
  Text,
  Image,
  Link,
  LinkText,
  HStack,
  Icon,
  ArrowRightIcon,
  Avatar,
  Box,
  VStack,
  AvatarFallbackText,
  AvatarImage,
  Button,
  ButtonText,
  Divider,
};

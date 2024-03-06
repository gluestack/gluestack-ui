import React from 'react';
import {
  Avatar,
  AvatarGroup,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';
import { User } from 'lucide-react-native';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Icon } from '@/components/ui/icon';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

const AvatarBasic = (props: any) => {
  return (
    <Avatar {...props}>
      <AvatarFallbackText>{props.fallbackText}</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: props.uri,
        }}
      />
      {props.badge && <AvatarBadge />}
    </Avatar>
  );
};

AvatarBasic.description =
  'This is a basic Avatar component example. An avatar is a graphical representation of a user.';

export default AvatarBasic;

export {
  HStack,
  VStack,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Icon,
  Heading,
  User,
  Text,
};

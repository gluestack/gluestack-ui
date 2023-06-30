import React from 'react';
import {
  Center,
  Badge,
  GlobeIcon,
  Icon,
  Box,
  Text,
  VStack,
  HStack,
  SettingsIcon,
  Divider,
  AddIcon,
  Image,
  CheckIcon,
  Heading,
} from '../../../ui-components';
import Wrapper from '../../Wrapper';
import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

export const MyBadgeExample = ({
  // variant = 'subtle',
  text = 'Badge',
  ...props
}: any) => {
  return (
    <Wrapper>
      <Center>
        <Badge {...props}>
          <Badge.Text>{text}</Badge.Text>
          <Badge.Icon ml="$1" as={GlobeIcon} />
        </Badge>
      </Center>
    </Wrapper>
  );
};

export {
  Center,
  Badge,
  GlobeIcon,
  Icon,
  Box,
  Text,
  VStack,
  HStack,
  PuzzleIcon,
  SettingsIcon,
  AddIcon,
  PaintBucket,
  Divider,
  Image,
  CheckIcon,
  Heading,
};

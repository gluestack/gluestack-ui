import type { ComponentStory } from '@storybook/react-native';
import { Box, Center } from '../../../ui-components';
import React from 'react';

import {
  Button,
  Icon,
  AddIcon,
  InfoIcon,
  Spinner,
  ArrowUpIcon,
  Heading,
  Text,
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
} from '../../../ui-components';

import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';

type MyButtonStory = ComponentStory<typeof Button>;

export const ButtonStory: MyButtonStory = ({
  text = 'Button',
  ...props
}: any) => {
  return (
    <Center>
      <Button {...props}>
        <Button.Text>{text}</Button.Text>
      </Button>
    </Center>
  );
};

export {
  Button,
  Icon,
  AddIcon,
  InfoIcon,
  Spinner,
  EditIcon,
  ArrowUpIcon,
  Heading,
  Text,
  Box,
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
  ArrowLeftIcon,
  Center,
};

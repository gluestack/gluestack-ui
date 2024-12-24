import type { ComponentStory } from '@storybook/react-native';
import { Box, Center } from '../../../ui-components';
import React from 'react';

import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
  Icon,
  AddIcon,
  InfoIcon,
  ButtonSpinner,
  ArrowUpIcon,
  Heading,
  Text,
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
  InputInput,
} from '../../../ui-components';

import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonStory: MyButtonStory = ({ text = 'Button', ...props }: any) => {
  return (
    <Button {...props}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default ButtonStory;

export {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
  Icon,
  AddIcon,
  InfoIcon,
  ButtonSpinner,
  EditIcon,
  ArrowUpIcon,
  Heading,
  Text,
  Box,
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
  InputInput,
  ArrowLeftIcon,
  Center,
};

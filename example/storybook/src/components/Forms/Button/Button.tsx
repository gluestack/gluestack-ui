import { Box, Center } from '@gluestack-ui/themed';
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
  InputField,
} from '@gluestack-ui/themed';

import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';

const ButtonBasic = ({ text = 'Button', ...props }: any) => {
  return (
    <Button {...props}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default ButtonBasic;

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
  InputField,
  ArrowLeftIcon,
  Center,
};

import React from 'react';
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
} from '@/components/ui/Button';
import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';
import {
  Icon,
  ArrowUpIcon,
  AddIcon,
  InfoIcon,
  ThreeDotsIcon,
} from '@/components/ui/Icon';
import { Input, InputField } from '@/components/ui/Input';
import { HStack } from '@/components/ui/HStack';
import { VStack } from '@/components/ui/VStack';
import { Text } from '@/components/ui/Text';
import { Heading } from '@/components/ui/Heading';
import { Box } from '@/components/ui/Box';
import { Center } from '@/components/ui/Center';

export const ButtonBasic = (props: any) => {
  return (
    <Button {...props}>
      <ButtonText>Hello World 22</ButtonText>
    </Button>
  );
};

ButtonBasic.description =
  'This is a basic Button component example.  A button is a component that users can tap to trigger an action.';

export default ButtonBasic;

export {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  EditIcon,
  ArrowLeftIcon,
  Icon,
  ArrowUpIcon,
  AddIcon,
  InfoIcon,
  ThreeDotsIcon,
  Input,
  InputField,
  HStack,
  VStack,
  Text,
  Heading,
  Box,
  Center,
};

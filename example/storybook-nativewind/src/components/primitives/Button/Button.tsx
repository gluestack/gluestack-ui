import { Box, Center } from '@custom-ui/themed';
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
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
  InputField,
} from '@custom-ui/themed';

import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';
import { TouchableOpacity, StyleSheet, Pressable, Text } from 'react-native';

// export const ButtonBasic = () => {
//   return (
//     <div
//       className="w-10 h-10 bg-red-500"
//       // style={{
//       //   width: 100,
//       //   height: 100,
//       //   background: 'red',
//       // }}
//     />
//   );
// };
export const ButtonBasic = () => {
  return (
    <Pressable className="w-100 h-100 bg-red-500 ">
      <Text>Hello world</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: { color: 'white' },
});

// const ButtonBasic = ({ ...props }: any) => {
//   return (
//     <Button {...props}>
//       <ButtonText>Button</ButtonText>
//     </Button>
//   );
// };

ButtonBasic.description =
  'This is a basic Button component example.  A button is a component that users can tap to trigger an action.';

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

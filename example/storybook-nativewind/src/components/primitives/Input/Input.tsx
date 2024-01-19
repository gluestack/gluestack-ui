import React from 'react';
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Center,
  Button,
  ButtonText,
  Box,
  VStack,
  Text,
  Heading,
  Icon,
  SearchIcon,
  FormControl,
} from '@custom-ui/themed';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { useState } from 'react';

const InputBasic = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Input {...props}>
      <InputField
        onChange={(e: any) => {
          setValue(e.nativeEvent.text);
        }}
        value={value}
        placeholder="Enter Text here"
      />
      <InputSlot pr={props.variant === 'underlined' ? '$0' : '$4'}>
        <InputIcon as={SearchIcon} />
      </InputSlot>
    </Input>
  );
};

InputBasic.description =
  'This is a basic Input component example. Inputs are used to capture data from users.';

export default InputBasic;

export {
  Input,
  InputField,
  InputIcon,
  Center,
  Button,
  ButtonText,
  Box,
  VStack,
  Text,
  Heading,
  useState,
  Icon,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  InputSlot,
};

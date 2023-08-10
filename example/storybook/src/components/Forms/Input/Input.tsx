import React from 'react';
import {
  Input,
  InputInput,
  InputIcon,
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
} from '../../../ui-components';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { useState } from 'react';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Input {...props}>
      <InputInput
        onChange={(e: any) => {
          setValue(e.nativeEvent.text);
        }}
        value={value}
        placeholder="Enter Text here"
      />
      <InputIcon pr="$4">
        <Icon as={SearchIcon} />
      </InputIcon>
    </Input>
  );
};

export default InputStory;

export {
  Input,
  InputInput,
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
};

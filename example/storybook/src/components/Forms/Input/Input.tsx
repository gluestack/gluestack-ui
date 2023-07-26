import React from 'react';
import {
  Input,
  Center,
  Button,
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

  let inputIconSize = '';
  switch (props.size) {
    case 'sm':
      inputIconSize = 'xs';
      break;
    case 'md':
      inputIconSize = 'sm';
      break;
    case 'lg':
      inputIconSize = 'lg';
      break;
    case 'xl':
      inputIconSize = 'xl';
      break;
  }

  return (
    <Input {...props}>
      <Input.Input
        onChange={(e: any) => {
          setValue(e.nativeEvent.text);
        }}
        value={value}
        placeholder="Enter Text here"
      />
      <Input.Icon pr="$4">
        <Icon
          as={SearchIcon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'SearchIcon',
              'size': inputIconSize,
            }),
          }}
        />
      </Input.Icon>
    </Input>
  );
};

export default InputStory;

export {
  Input,
  Center,
  Button,
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

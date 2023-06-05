import React from 'react';
import Wrapper from '../../Wrapper';
import {
  Input,
  Center,
  Button,
  Box,
  VStack,
  Text,
  Heading,
  Icon,
} from '../../../ui-components';

import { useState } from 'react';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Wrapper>
      <Input {...props}>
        <Input.Input
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <Input.Icon pr="$4">
          <Icon as={SearchIcon} />
        </Input.Icon>
      </Input>
    </Wrapper>
  );
};

export {
  InputStory,
  Input,
  Center,
  Button,
  Box,
  VStack,
  Text,
  Heading,
  useState,
  Icon,
};

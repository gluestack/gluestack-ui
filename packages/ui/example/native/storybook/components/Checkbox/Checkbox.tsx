import {
  Box,
  Text,
  Heading,
  UIProvider,
  Center,
  Checkbox,
  Button,
  ButtonText,
} from '@gluestack/ui';
import React from 'react';
import Wrapper from '../Wrapper';

export const MyCheckbox = () => {
  return (
    <Wrapper>
      <Checkbox
        // sx={{
        //   style: {
        //     bg: '$green.400',
        //   },
        // }}
        // variant="blueBox"
        size="medium"
      >
        <ButtonText>Click me</ButtonText>
      </Checkbox>
    </Wrapper>
  );
};

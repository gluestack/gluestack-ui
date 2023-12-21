import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonText, Center } from '@gluestack-ui/themed';
import { Wrapper } from './Wrapper';

export const MyButton = () => (
  <Wrapper>
    <Center>
      <Button>
        <ButtonText>Hello</ButtonText>
      </Button>
    </Center>
  </Wrapper>
);

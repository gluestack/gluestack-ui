import React from 'react';
import { TextInput } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledInputProps = styled(
  TextInput,
  {
    p: '$4',
  },
  { resolveProps: ['placeholderTextColor'] },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);

export function ResolveProps() {
  return (
    <Wrapper>
      <StyledInputProps
        placeholder="Enter here"
        placeholderTextColor="$green500"
      ></StyledInputProps>
    </Wrapper>
  );
}

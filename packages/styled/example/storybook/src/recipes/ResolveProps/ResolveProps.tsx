import React from 'react';
import { TextInput } from 'react-native';
import { styled } from 'dank-style';
import { Wrapper } from '../../components/Wrapper';

const StyledInputProps = styled(
  TextInput,
  {
    baseStyle: {
      style: { p: '$4' },
    },
  },
  { resolveProps: ['placeholderTextColor'] },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);

export function ResolveProps({ ...args }) {
  return (
    <Wrapper>
      <StyledInputProps
        placeholder="Enter here"
        placeholderTextColor="$green500"
      ></StyledInputProps>
    </Wrapper>
  );
}

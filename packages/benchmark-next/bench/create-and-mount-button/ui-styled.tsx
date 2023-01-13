import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Text, Pressable } from 'react-native';
import { styled, StyledProvider } from '@dank-style/react';
import { config } from '../../dank.config';

const StyledButton = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$red100',
      },
    },
  },
  {},
  {}
);
const StyledText = styled(
  Text,
  {
    baseStyle: {
      style: {
        color: '$blue500',
      },
    },
  },
  {},
  {}
);

const Test = ({}: //  testIndex
TestComponentProps) => {
  return (
    <StyledProvider config={config}>
      <StyledButton>
        <StyledText>Hello styled button</StyledText>
      </StyledButton>
    </StyledProvider>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

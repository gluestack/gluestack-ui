import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Text, Pressable } from 'react-native';
import { styled } from 'dank-style';
import { config } from '../../nb.config';

const StyledButton = styled(Pressable, {}, {}, config);
const StyledText = styled(Text, {}, {}, config);

const Test = ({}: //  testIndex
TestComponentProps) => {
  return (
    <StyledButton>
      <StyledText>Hello styled button</StyledText>
    </StyledButton>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

const StyledText = styled(Text, {}, {}, {});

const Test = ({}: //  testIndex
TestComponentProps) => {
  return <StyledText>Hello styled button</StyledText>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

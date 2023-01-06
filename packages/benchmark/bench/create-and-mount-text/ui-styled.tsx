import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { config } from '../../nb.config';

const StyledText = styled(Text, {}, {}, config);

const Test = ({}: //  testIndex
TestComponentProps) => {
  return <StyledText>Hello styled button</StyledText>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

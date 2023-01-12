import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Text } from 'react-native';

const Test = ({}: // testIndex
TestComponentProps) => {
  return <Text>Hello styled button</Text>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

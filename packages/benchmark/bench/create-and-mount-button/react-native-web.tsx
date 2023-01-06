import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Text, Pressable } from 'react-native';

const Test = ({}: // testIndex
TestComponentProps) => {
  return (
    <Pressable>
      <Text>Hello styled button</Text>
    </Pressable>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

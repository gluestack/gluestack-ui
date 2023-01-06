import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { NativeBaseProvider, Text } from 'native-base';

const Test = ({}: // testIndex
TestComponentProps) => {
  return (
    <NativeBaseProvider>
      <Text>Hello nbv3 text</Text>
    </NativeBaseProvider>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

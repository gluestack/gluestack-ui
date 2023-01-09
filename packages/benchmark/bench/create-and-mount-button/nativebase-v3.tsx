import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
// import { css } from '../utils/stitches-core-v025.config';
// import { buttonStyles } from '../utils/buttonStyles';
import { NativeBaseProvider, Text } from 'native-base';
import { Pressable } from 'packages/ui/lib/commonjs';

const Test = ({}: // testIndex
TestComponentProps) => {
  return (
    <NativeBaseProvider>
      <Pressable>
        <Text>Hello nbv3 button</Text>
      </Pressable>
    </NativeBaseProvider>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

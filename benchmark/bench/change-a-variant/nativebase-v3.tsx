import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Pressable, extendTheme, NativeBaseProvider } from 'native-base';

const theme = extendTheme({
  components: {
    Pressable: {
      variants: {
        mySubtle: {
          bg: 'primary.800',
        },
        mySolid: { bg: 'primary.700' },
      },
    },
  },
});

const Test = ({ testIndex }: TestComponentProps) => {
  const variants = {
    variant: testIndex % 2 === 0 ? 'mySolid' : 'mySubtle',
  };
  return (
    <NativeBaseProvider theme={theme}>
      <Pressable {...variants}>Hello</Pressable>
    </NativeBaseProvider>
  );
};

const StitchesTest = () => {
  return (
    <>
      <NativeBaseProvider>
        <Pressable style={{ opacity: 0, pointerEvents: 'none' }}>Hello</Pressable>
      </NativeBaseProvider>
      <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />
    </>
  );
};

export default StitchesTest;

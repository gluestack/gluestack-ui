import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Pressable, NativeBaseProvider, Text } from 'native-base';

const Test = ({ testIndex }: TestComponentProps) => {
  return (
    <NativeBaseProvider>
      <Pressable
        style={{
          '--test-index': testIndex,
          backgroundColor: `hsl(${Math.floor(Math.random() * 360)} 80% 80%)`,
          padding: '20px',
        }}
      >
        <Text>testing</Text>
      </Pressable>
    </NativeBaseProvider>
  );
};

const StitchesTest = () => {
  return (
    <>
      <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />

      <div style={{ opacity: 0, pointerEvents: 'none' }}>
        <NativeBaseProvider>
          <Pressable>
            <Text>we mount the button outside the test to make sure we're not clocking any mount time</Text>
          </Pressable>
        </NativeBaseProvider>
      </div>
    </>
  );
};

export default StitchesTest;

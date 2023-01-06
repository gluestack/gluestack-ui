import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Pressable, Text } from 'react-native';

const Test = ({ testIndex }: TestComponentProps) => {
  return (
    <Pressable
      style={{
        '--test-index': testIndex,
        backgroundColor: `hsl(${Math.floor(Math.random() * 360)} 80% 80%)`,
        padding: '20px',
      }}
    >
      <Text>testing</Text>
    </Pressable>
  );
};

const StitchesTest = () => {
  return (
    <>
      <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />

      <div style={{ opacity: 0, pointerEvents: 'none' }}>
        <Pressable>
          <Text>we mount the button outside the test to make sure we're not clocking any mount time</Text>
        </Pressable>
      </div>
    </>
  );
};

export default StitchesTest;

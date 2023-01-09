import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Pressable, Text, StyleSheet } from 'react-native';

let variantStyles: any = StyleSheet.create({
  variant1: {
    backgroundColor: 'red',
  },
  variant2: {
    backgroundColor: 'blue',
  },
});

const Test: React.FunctionComponent<TestComponentProps> = ({ testIndex }: TestComponentProps) => {
  const variants = testIndex % 2 === 0 ? variantStyles.variant1 : variantStyles.variant2;
  return (
    <Pressable style={{ ...variants }}>
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

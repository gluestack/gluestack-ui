import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { styled } from '../utils/stitches-react-v025.config';
// import { buttonStyles } from '../utils/buttonStyles';

const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler
  const Text = styled('div', {
    '--test-index': testIndex,
    // ...(buttonStyles as any),
  });

  return <Text>testing</Text>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

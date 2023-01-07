/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Tree } from '../utils/Tree';
import { View } from 'react-native';

export const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler

  const Box = () => {
    return (
      <View
        // @ts-ignore
        style={{
          borderWidth: '0',
          borderStyle: 'solid',
          // @ts-ignore
          boxSizing: 'border-box',
          display: 'flex',
          flexBasis: 'auto',
          flexDirection: 'column',
          flexShrink: 0,
          margin: '0',
          padding: '0',
          position: 'relative',
          minHeight: '0',
          minWidth: '0',
        }}
      >
        <View style={{ alignSelf: 'flex-start', backgroundColor: 'transparent', width: '6px', height: '6px' }} />
      </View>
    );
  };

  return <Tree breadth={6} depth={3} id={0} wrap={2} box={Box} />;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default StitchesTest;

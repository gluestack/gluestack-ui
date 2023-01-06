/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Tree } from '../utils/Tree';
import { styled } from '../utils/stitches-react-v025.config';
import { NativeBaseProvider, View } from 'native-base';

export const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler

  const Box = () => {
    return (
      <NativeBaseProvider>
        <View
          alignItems="stretch"
          borderWidth="0"
          borderStyle="solid"
          // @ts-ignore
          boxSizing="border-box"
          display="flex"
          flexBasis="auto"
          flexDirection="column"
          flexShrink={0}
          margin="0"
          padding="0"
          position="relative"
          minHeight="0"
          minWidth="0"
        >
          <View
            // @ts-ignore
            alignSelf="flex-start"
            backgroundColor="transparent"
            width="6px"
            height="6px"
          />
        </View>
      </NativeBaseProvider>
    );
  };

  return <Tree breadth={6} depth={3} id={0} wrap={2} box={Box} />;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default StitchesTest;

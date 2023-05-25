/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Tree } from '../utils/Tree';
import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

const StyledView = styled(
  View,
  {
    baseStyle: {
      style: {
        alignItems: 'stretch',
        backgroundColor: 'blue',
        width: 200,
        height: 100,
        borderWidth: '0',
        borderStyle: 'solid',
        boxSizing: 'border-box',
        display: 'flex',
        flexBasis: 'auto',
        flexDirection: 'column',
        flexShrink: 0,
        margin: '0',
        padding: '100px',
        position: 'relative',
        minHeight: '0',
        minWidth: '0',
      },
    },
  },
  {},
  {}
);

const Box = styled(
  StyledView,
  {
    baseStyle: {
      style: {
        backgroundColor: 'blue',
        // alignSelf: 'flex-start',
        // width: '6px',
        // height: '6px',
      },
    },
  },
  {},
  {}
);

export const Test = ({}: //  testIndex
TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler
  return <Tree breadth={2} depth={7} id={0} wrap={1} box={Box} />;
};

const StitchesTest = () => {
  return <Box />;
  // <TestRunner numberOfRuns={3} iterationN={10} TestComponent={Test} />;
};

export default StitchesTest;

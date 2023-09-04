/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Tree } from '../utils/Tree';
import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

const StyledView: any = styled(
  View,
  {
    baseStyle: {
      style: {
        alignItems: 'stretch',
        borderWidth: '0',
        borderStyle: 'solid',
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
      },
    },
  },
  {},
  {}
);

const Box = styled(
  StyledView,
  { baseStyle: { style: { alignSelf: 'flex-start', backgroundColor: 'transparent', variants: {} } } },
  {},
  {}
);

export const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler

  return <Tree breadth={6} depth={3} id={0} wrap={2} box={Box} />;
};

const StitchesTest = () => {
  return <Box />;
  // return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default StitchesTest;

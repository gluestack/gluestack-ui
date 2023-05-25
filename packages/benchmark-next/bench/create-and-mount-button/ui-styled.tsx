import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
// import { Text, Pressable } from 'react-native';
import {
  styled,
  //  StyledProvider
} from '@gluestack-style/react';
// import { config } from '../../dank.config';
const View = (props) => {
  return <div {...props} />;
};
const WebText = (props) => {
  return <span {...props} />;
};
// console.time('styled');
const StyledButton = styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$red100',
        backgroundColor: 'red',
        margin: 10,
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        shadowColor: 'black',
      },
    },
  },
  {},
  {}
);
const StyledText = styled(
  WebText,
  {
    baseStyle: {
      style: {
        color: '$blue500',
        backgroundColor: 'red',
        margin: 10,
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        shadowColor: 'black',
      },
    },
  },
  {},
  {}
);
// console.timeEnd('styled');

const Test = ({}: //  testIndex
TestComponentProps) => {
  return (
    <StyledButton>
      <StyledText>Hello styled button</StyledText>
    </StyledButton>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

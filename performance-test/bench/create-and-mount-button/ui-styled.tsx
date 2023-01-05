import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
// import { css } from '../utils/stitches-core-v025.config';
// import { buttonStyles } from '../utils/buttonStyles';
import { Text, Pressable } from 'react-native';
// import { Text } from '@gluestack/ui';
import { styled } from '@gluestack/ui-styled';
import { config } from '../../nb.config';

const StyledButton = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$red100',
      },
    },
  },
  {},
  config
);
const StyledText = styled(
  Text,
  {
    baseStyle: {
      style: {
        color: '$red500',
      },
    },
  },
  {},
  config
);

const Test = ({}: //  testIndex
TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler
  // const button = css({
  //   '--test-index': testIndex,
  //   ...(buttonStyles as any),
  // });

  return (
    // <div className={button()}>
    <StyledButton>
      <StyledText>Hello styled button</StyledText>
    </StyledButton>
    // </div>
  );
};

const StitchesTest = () => {
  // return (
  //   <>
  //     <Pressable>
  //       <Text>Hello Pressable</Text>
  //     </Pressable>
  //     <Pressable>
  //       <Text>Hello Pressable</Text>
  //     </Pressable>
  //   </>
  // );
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
  // return (
  //   <>
  //     <StyledText>Hello styled button</StyledText>
  //     <StyledText>Hello styled button</StyledText>
  //     <StyledText>Hello styled button</StyledText>
  //     <StyledText>Hello styled button</StyledText>
  //     <StyledText>Hello styled button</StyledText>
  //     <StyledText>Hello styled button</StyledText>
  //     <StyledText>Hello styled button</StyledText>
  //   </>
  // );
};

export default StitchesTest;

import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
// import { css } from '../utils/stitches-core-v025.config';
// import { buttonStyles } from '../utils/buttonStyles';
import { Text, StyleSheet, Pressable } from 'react-native';
let styles: any = StyleSheet.create({
  button: {
    color: 'red',
  },
});
const Test = ({}: // testIndex
TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler
  // const button = css({
  //   '--test-index': testIndex,
  // });

  return (
    // <div className={button()}>
    <Pressable style={styles.button}>
      <Text>Hello styled button</Text>
    </Pressable>
    // </div>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Text, Pressable, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
  },
  text: {
    color: 'blue',
  },
});
const Test = ({}: // testIndex
TestComponentProps) => {
  return (
    <Pressable style={styles.box}>
      <Text style={styles.text}>Hello styled button</Text>
    </Pressable>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;

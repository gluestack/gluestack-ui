import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Text, Pressable, StyleSheet } from 'react-native';

// console.time('styledrn');
const styles = StyleSheet.create({
  box: {
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
  text: {
    color: 'blue',
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
});
// console.timeEnd('styledrn');

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

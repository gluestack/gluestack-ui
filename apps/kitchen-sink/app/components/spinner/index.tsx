import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Spinner } from '@/components/ui/spinner';


import { SafeAreaView } from 'react-native';
import React from 'react';
export default function ComponentExamples() {
  return (
    <SafeAreaView>
      <ComponentPreviewer props={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "small",
      "large"
    ],
    "defaultValue": "small"
  },
  "color": {
    "control": {
      "type": "select"
    },
    "options": [
      "red",
      "blue",
      "green",
      "black",
      "orange",
      "purple",
      "yellow"
    ],
    "defaultValue": "red"
  }
}}>
  {props => {
  return <Spinner size={props.size} color={props.color} />}}
</ComponentPreviewer>
    </SafeAreaView>
  );
}
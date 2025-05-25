import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Spinner } from '@/components/ui/spinner'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
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
}} title={undefined}>
  {props => {
  return <Spinner size={props.size} color={props.color} />}}
</ComponentPreviewer>
        </ScrollView>
  );
}
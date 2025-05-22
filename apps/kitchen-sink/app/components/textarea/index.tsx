import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Textarea, TextareaInput } from '@/components/ui/textarea';


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView>
        <ScrollView>
      <ComponentPreviewer props={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg",
      "xl"
    ],
    "defaultValue": "md"
  },
  "isReadOnly": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "isInvalid": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  }
}}>
  {props => {
  return (
    <Textarea
      size={props.size}
      isReadOnly={props.isReadOnly}
      isInvalid={props.isInvalid}
      isDisabled={props.isDisabled}
      className="w-64"
    >
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  )}}
</ComponentPreviewer>
        </ScrollView>
    </SafeAreaView>
  );
}
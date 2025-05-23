import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Textarea, TextareaInput } from '@/components/ui/textarea'


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
        <ScrollView className="bg-background-0" contentContainerClassName="px-3 pb-6">
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
}} title={undefined}>
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
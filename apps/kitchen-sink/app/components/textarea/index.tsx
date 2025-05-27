import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Textarea, TextareaInput } from '@/components/ui/textarea'
import { FormControl, FormControlError, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText } from '@/components/ui/form-control'


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

<ComponentPreviewer props={{}} title={"FormControl"}>
  {props => {
  return (
    <FormControl size="sm" className="max-w-[200px] w-full">
          <FormControlLabel>
            <FormControlLabelText>
              Write with me
            </FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput placeholder='Once upon a time...'/>
          </Textarea>
          <FormControlHelper>
            <FormControlHelperText>
              Start your story
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>
  );}}
</ComponentPreviewer>
        </ScrollView>
  );
}
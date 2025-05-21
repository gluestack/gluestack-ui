import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Radio, RadioGroup, RadioIndicator, RadioIcon, RadioLabel } from '@/components/ui/radio';
import { CircleIcon } from '@/components/ui/icon';


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
      "sm",
      "md",
      "lg"
    ],
    "defaultValue": "md"
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
    <RadioGroup>
      <Radio value={props.value} size={props.size} isInvalid={props.isInvalid} isDisabled={props.isDisabled}>
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label</RadioLabel>
      </Radio>
    </RadioGroup>
  )}}
</ComponentPreviewer>
    </SafeAreaView>
  );
}
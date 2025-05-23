import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Switch } from '@/components/ui/switch'


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
      "lg"
    ],
    "defaultValue": "md"
  },
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "trackColor": {
    "control": {
      "type": "select"
    },
    "options": [
      "#E2E8F0",
      "#000000"
    ],
    "defaultValue": "#E2E8F0"
  },
  "thumbColor": {
    "control": {
      "type": "select"
    },
    "options": [
      "#FFFFFF",
      "#000000"
    ],
    "defaultValue": "#FFFFFF"
  },
  "activeThumbColor": {
    "control": {
      "type": "select"
    },
    "options": [
      "#000000",
      "#FFFFFF"
    ],
    "defaultValue": "#000000"
  },
  "ios_backgroundColor": {
    "control": {
      "type": "select"
    },
    "options": [
      "#E2E8F0",
      "#000000"
    ],
    "defaultValue": "#E2E8F0"
  }
}} title={undefined}>
  {props => {
  return (
    <Switch
      size={props.size}
      isDisabled={props.isDisabled}
      trackColor={props.trackColor}
      thumbColor={props.thumbColor}
      activeThumbColor={props.activeThumbColor}
      ios_backgroundColor={props.ios_backgroundColor}
    />
  )}}
</ComponentPreviewer>
        </ScrollView>
  );
}
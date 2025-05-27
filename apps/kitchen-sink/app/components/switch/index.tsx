import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Switch } from '@/components/ui/switch'
import { Text } from '@/components/ui/text'
import { HStack } from '@/components/ui/hstack'


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
}} title={"Basic"}>
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

<ComponentPreviewer props={{}} title={"Switch With Label"}>
  {props => {
  return (
    <HStack space="md">
          <Switch
            trackColor={{ false: "#E2E8F0", true: "#000000" }}
            thumbColor="#FFFFFF"
            activeThumbColor="#000000"
            ios_backgroundColor="#E2E8F0"
          />
          <Text size="sm" >Allow notifications</Text>
        </HStack>
  );}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Checked State"}>
  {props => {
  return (
    <HStack space="md">
          <Switch
            defaultValue={true}
            trackColor="#E2E8F0"
            thumbColor="#FFFFFF"
            activeThumbColor="#000000"
            ios_backgroundColor="#E2E8F0"
          />
          <Text size="sm" >Public profile</Text>
        </HStack>
  );}}
</ComponentPreviewer>
        </ScrollView>
  );
}
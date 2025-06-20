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
  }
}} title={"Basic"}>
  {props => {
  return (
    <Switch
      size={props.size}
      isDisabled={props.isDisabled}
      trackColor={ {false: "#d4d4d4", true: "#525252"} }
      thumbColor="#fafafa"
      activeThumbColor="#fafafa"
      ios_backgroundColor="#d4d4d4"
    />
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Switch With Label"}>
  {props => {
  return (
    <HStack space="md">
          <Switch
            trackColor={ {false: "#d4d4d4", true: "#525252"} }
            thumbColor="#fafafa"
            activeThumbColor="#fafafa"
            ios_backgroundColor="#d4d4d4"
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
            trackColor={ {false: "#d4d4d4", true: "#525252"} }
            thumbColor="#fafafa"
            activeThumbColor="#fafafa"
            ios_backgroundColor="#d4d4d4"
          />
          <Text size="sm" >Public profile</Text>
        </HStack>
  );}}
</ComponentPreviewer>
        </ScrollView>
  );
}
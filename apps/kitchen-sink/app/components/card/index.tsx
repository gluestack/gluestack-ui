import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView>
        <ScrollView>
      <ComponentPreviewer props={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "elevated",
      "outline",
      "ghost",
      "filled"
    ],
    "defaultValue": "elevated"
  },
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
  }
}}>
  {props => {
  return (
    <Card size={props.size} variant={props.variant} className="m-3">
      <Heading size="md" className="mb-1">
        Quick Start
      </Heading>
      <Text size="sm">Start building your next project in minutes</Text>
    </Card>
  )}}
</ComponentPreviewer>
        </ScrollView>
    </SafeAreaView>
  );
}
import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { VStack } from '@/components/ui/vstack'
import { Box } from '@/components/ui/box'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
      <ComponentPreviewer props={{
  "space": {
    "control": {
      "type": "select"
    },
    "options": [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl"
    ],
    "defaultValue": "md"
  },
  "isReversed": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  }
}} title={"Basic"}>
  {props => {
  return (
    <Box className="justify-center h-80">
      <VStack space={props.space} reversed={props.isReversed}>
        <Box className="h-20 w-20 bg-primary-300" />
        <Box className="h-20 w-20 bg-primary-400" />
        <Box className="h-20 w-20 bg-primary-500" />
      </VStack>
    </Box>
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"VStack Reversed"}>
  {props => {
  return (
    <VStack space='md' reversed>
          <Box className='w-20 h-20 bg-primary-300' />
          <Box className='w-20 h-20 bg-primary-400' />
          <Box className='w-20 h-20 bg-primary-500' />
        </VStack>
  );}}
</ComponentPreviewer>
        </ScrollView>
  );
}
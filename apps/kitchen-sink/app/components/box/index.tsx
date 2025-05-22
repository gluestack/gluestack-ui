import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
        <ScrollView>
      <ComponentPreviewer props={{}} title={undefined}>
  {props => {
  return (
    <Box className="bg-primary-500 p-5">
      <Text className="text-typography-0">This is the Box</Text>
    </Box>
  )}}
</ComponentPreviewer>
        </ScrollView>
    </SafeAreaView>
  );
}
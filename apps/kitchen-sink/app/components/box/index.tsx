import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';


import { SafeAreaView } from 'react-native';
import React from 'react';
export default function ComponentExamples() {
  return (
    <SafeAreaView>
      <ComponentPreviewer props={{}}>
  {props => {
  return (
    <Box className="bg-primary-500 p-5">
      <Text className="text-typography-0">This is the Box</Text>
    </Box>
  )}}
</ComponentPreviewer>
    </SafeAreaView>
  );
}
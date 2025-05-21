import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';


import { SafeAreaView } from 'react-native';
import React from 'react';
export default function ComponentExamples() {
  return (
    <SafeAreaView>
      <ComponentPreviewer props={{}}>
  {props => {
    return (
      <Center className="bg-primary-500 h-[200px] w-[300px]">
        <Text className="text-typography-0 font-bold">This is the center.</Text>
      </Center>
    )}}
</ComponentPreviewer>
    </SafeAreaView>
  );
}
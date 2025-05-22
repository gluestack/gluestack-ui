import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Text } from '@/components/ui/text';


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-50">
        <ScrollView>
      <ComponentPreviewer props={{}}>
  {props => {
  return <Text>Hello World!</Text>}}
</ComponentPreviewer>
        </ScrollView>
    </SafeAreaView>
  );
}
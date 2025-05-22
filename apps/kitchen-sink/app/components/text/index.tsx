import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Text } from '@/components/ui/text';


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView>
        <ScrollView>
      <ComponentPreviewer props={{}}>
  {props => {
  return <Text>Hello World!</Text>}}
</ComponentPreviewer>
        </ScrollView>
    </SafeAreaView>
  );
}
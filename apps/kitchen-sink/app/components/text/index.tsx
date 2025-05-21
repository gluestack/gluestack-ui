import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Text } from '@/components/ui/text';


import { SafeAreaView } from 'react-native';
import React from 'react';
export default function ComponentExamples() {
  return (
    <SafeAreaView>
      <ComponentPreviewer props={{}}>
  {props => {
  return <Text>Hello World!</Text>}}
</ComponentPreviewer>
    </SafeAreaView>
  );
}
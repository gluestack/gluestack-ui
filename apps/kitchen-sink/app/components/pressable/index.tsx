import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-50">
        <ScrollView>
      <ComponentPreviewer props={{}}>
  {props => {
  return (
    <Pressable
      onPress={() => console.log("Hello")}
      className="p-5 bg-primary-500"
    >
      <Text className="text-typography-0">Press me</Text>
    </Pressable>
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}}>
  {props => {
  return (
    <Pressable className="p-16 bg-primary-500">
      {({ pressed }) => (
        <Text className={pressed ? 'text-pink-400' : 'text-amber-400'}>
          PRESSABLE
        </Text>
      )}
    </Pressable>
  );}}
</ComponentPreviewer>
        </ScrollView>
    </SafeAreaView>
  );
}
import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Pressable } from '@/components/ui/pressable'
import { Text } from '@/components/ui/text'
import { Box } from '@/components/ui/box'
import { VStack } from '@/components/ui/vstack'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
      <ComponentPreviewer props={{}} title={"Basic"}>
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

<ComponentPreviewer props={{}} title={"Pressable child elements according to its states"}>
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
  );
}
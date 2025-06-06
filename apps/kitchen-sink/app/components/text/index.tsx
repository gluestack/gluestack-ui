import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Text } from '@/components/ui/text'
import { Center } from '@/components/ui/center'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
      <ComponentPreviewer props={{}} title={"Basic"}>
  {props => {
  return <Text>Hello World!</Text>}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Text Sizes"}>
  {props => {
          const sizes = [
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
            '2xl',
            '3xl',
            '4xl',
            '5xl',
            '6xl',
          ];
          return (
            <Center>
              {sizes.map((size, index) => (
                <Text size={size} key={index} className="text-center">{size}</Text>
              ))}
            </Center>
          );}}
</ComponentPreviewer>
        </ScrollView>
  );
}
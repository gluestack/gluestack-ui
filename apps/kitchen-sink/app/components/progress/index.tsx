import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Center } from '@/components/ui/center';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <ScrollView
      className="bg-background-0 flex-1"
      contentContainerClassName="px-3 pb-6"
    >
      <ComponentPreviewer
        props={{
          size: {
            control: {
              type: 'select',
            },
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            defaultValue: 'md',
          },
          orientation: {
            control: {
              type: 'select',
            },
            options: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
          },
        }}
        title={'Basic'}
      >
        {(props) => {
          return (
            <Center className="w-[300px] h-[150px]">
              <Progress
                value={40}
                size={props.size}
                orientation={props.orientation}
              >
                <ProgressFilledTrack />
              </Progress>
            </Center>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Value'}>
        {(props) => {
          return (
            <VStack space="lg" className="max-w-80 w-full">
              <Text size="lg">Downloading 55%</Text>
              <Progress value={55} className="w-full h-1">
                <ProgressFilledTrack className="h-1" />
              </Progress>
            </VStack>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Color'}>
        {(props) => {
          return (
            <VStack space="3xl" className="max-w-96 w-full">
              <Progress value={46} className="w-full h-2" size="sm">
                <ProgressFilledTrack className="bg-emerald-600" />
              </Progress>
              <Progress value={46} className="w-full h-2" size="sm">
                <ProgressFilledTrack className="bg-amber-600" />
              </Progress>
              <Progress value={46} className="w-full h-2" size="sm">
                <ProgressFilledTrack className="bg-fuchsia-600" />
              </Progress>
              <Progress value={46} className="w-full h-2" size="sm">
                <ProgressFilledTrack className="bg-cyan-600" />
              </Progress>
            </VStack>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Custom'}>
        {(props) => {
          return (
            <VStack space="lg" className="max-w-[410px] w-full">
              <Heading>Internal Storage</Heading>
              <Progress value={46} className="w-full h-2 bg-lime-100">
                <ProgressFilledTrack className="h-2 bg-lime-500" />
              </Progress>
              <Text size="md">14GB</Text>
            </VStack>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}

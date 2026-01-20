import { Progress, ProgressFilledTrack } from '@/components/ui/progress'
import { Center } from '@/components/ui/center'
import { VStack } from '@/components/ui/vstack'
import { Text } from '@/components/ui/text'
import { Heading } from '@/components/ui/heading'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Center className="w-[300px] h-[150px]">
      <Progress value={40} orientation="horizontal">
        <ProgressFilledTrack />
      </Progress>
    </Center>
  )
};

const ExampleValue = () => {
return (
    <VStack space="lg" className="max-w-80 w-full">
      <Text size="lg">Downloading 55%</Text>
      <Progress value={55} className="w-full h-1">
        <ProgressFilledTrack className="h-1" />
      </Progress>
    </VStack>
  )
};

const ExampleColor = () => {
return (
    <VStack space="3xl" className="max-w-96 w-full">
      <Progress value={46} className="w-full h-2">
        <ProgressFilledTrack className="bg-emerald-600"/>
      </Progress>
      <Progress value={46} className="w-full h-2">
        <ProgressFilledTrack className="bg-amber-600"/>
      </Progress>
      <Progress value={46} className="w-full h-2">
        <ProgressFilledTrack className="bg-fuchsia-600"/>
      </Progress>
      <Progress value={46} className="w-full h-2">
        <ProgressFilledTrack className="bg-cyan-600"/>
      </Progress>
    </VStack>
  )
};

const ExampleCustom = () => {
return (
    <VStack space="lg" className="max-w-[410px] w-full">
      <Heading>Internal Storage</Heading>
      <Progress value={46} className="w-full h-2 bg-lime-100">
        <ProgressFilledTrack className="h-2 bg-lime-500" />
      </Progress>
      <Text size="md">14GB</Text>
    </VStack>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "value",
    label: "Value",
    content: <ExampleValue />,
  },
  {
    value: "color",
    label: "Color",
    content: <ExampleColor />,
  },
  {
    value: "custom",
    label: "Custom",
    content: <ExampleCustom />,
  }
];

export default function ProgressScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
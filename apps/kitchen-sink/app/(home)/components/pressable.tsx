import { Pressable } from '@/components/ui/pressable'
import { Text } from '@/components/ui/text'
import { Box } from '@/components/ui/box'
import { VStack } from '@/components/ui/vstack'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Pressable
      onPress={() => console.log("Hello")}
      className="p-5 bg-primary"
    >
      <Text className="text-primary-foreground">Press me</Text>
    </Pressable>
  )
};

const ExamplePressableChildElementsAccordingToItsStates = () => {
return (
    <Pressable className="p-16 bg-primary">
      {({ pressed }) => (
        <Text className={pressed ? 'text-pink-400' : 'text-amber-400'}>
          PRESSABLE
        </Text>
      )}
    </Pressable>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "pressable-child-elements-according-to-its-states",
    label: "Pressable child elements according to its states",
    content: <ExamplePressableChildElementsAccordingToItsStates />,
  }
];

export default function PressableScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
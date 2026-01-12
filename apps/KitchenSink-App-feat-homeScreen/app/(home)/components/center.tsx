import { Center } from '@/components/ui/center'
import { Text } from '@/components/ui/text'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
      <Center className="bg-primary/80 h-[150px] w-[250px]">
        <Text className="text-primary-foreground font-bold">This is the center.</Text>
      </Center>
    )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  }
];

export default function CenterScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
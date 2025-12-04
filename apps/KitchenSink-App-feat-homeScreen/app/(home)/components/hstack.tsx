import { HStack } from '@/components/ui/hstack'
import { Box } from '@/components/ui/box'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <HStack space="md" reversed={ false }>
      <Box className="h-16 w-16 bg-primary/30" />
      <Box className="h-16 w-16 bg-primary/60" />
      <Box className="h-16 w-16 bg-primary" />
    </HStack>
  )
};

const ExampleHStackReversed = () => {
return (
    <HStack space="md" reversed>
      <Box className="w-20 h-20 bg-primary/30"/>
      <Box className="w-20 h-20 bg-primary/60"/>
      <Box className="w-20 h-20 bg-primary"/>
    </HStack>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "hstack-reversed",
    label: "HStack Reversed",
    content: <ExampleHStackReversed />,
  }
];

export default function HstackScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
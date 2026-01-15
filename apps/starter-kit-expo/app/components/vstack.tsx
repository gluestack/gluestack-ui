import { VStack } from '@/components/ui/vstack'
import { Box } from '@/components/ui/box'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Box className="justify-center h-60">
      <VStack space="md" reversed={ false }>
        <Box className="h-16 w-16 bg-primary/30" />
        <Box className="h-16 w-16 bg-primary/60" />
        <Box className="h-16 w-16 bg-primary" />
      </VStack>
    </Box>
  )
};

const ExampleVStackReversed = () => {
return (
    <VStack space='md' reversed>
          <Box className='w-20 h-20 bg-primary/30' />
          <Box className='w-20 h-20 bg-primary/60' />
          <Box className='w-20 h-20 bg-primary' />
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
    value: "vstack-reversed",
    label: "VStack Reversed",
    content: <ExampleVStackReversed />,
  }
];

export default function VstackScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
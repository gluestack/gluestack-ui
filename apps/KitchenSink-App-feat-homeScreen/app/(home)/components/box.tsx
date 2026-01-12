import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Box className="bg-primary p-5">
      <Text className="text-primary-foreground">This is the Box</Text>
    </Box>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  }
];

export default function BoxScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
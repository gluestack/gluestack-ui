import { Spinner } from '@/components/ui/spinner'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return <Spinner size="large" color="grey" />
};

const SizeSmall = () => {
return <Spinner size="small" color="grey" />
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "small",
    label: "Small",
    content: <SizeSmall />,
  }
];

export default function SpinnerScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
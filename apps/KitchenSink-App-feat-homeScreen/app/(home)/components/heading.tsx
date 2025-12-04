import { Heading } from '@/components/ui/heading'
import { Center } from '@/components/ui/center'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return <Heading>I am a Heading</Heading>
};

const ExampleHeadingSizes = () => {
const sizes = [ 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl',
'4xl', '5xl' ]; 
return (
<Center>
  {sizes.map((size, index) => (
  <Heading size={size} key={index}>
    {size}
  </Heading>
  ))}
</Center>
)
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "heading-sizes",
    label: "Heading Sizes",
    content: <ExampleHeadingSizes />,
  }
];

export default function HeadingScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
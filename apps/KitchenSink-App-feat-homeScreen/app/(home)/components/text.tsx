import { Text } from '@/components/ui/text'
import { Center } from '@/components/ui/center'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return <Text>Hello World!</Text>
};

const ExampleTextSizes = () => {
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
          )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "text-sizes",
    label: "Text Sizes",
    content: <ExampleTextSizes />,
  }
];

export default function TextScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
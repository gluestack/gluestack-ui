import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Heading } from '@/components/ui/heading'
import { Center } from '@/components/ui/center'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
      <ComponentPreviewer props={{}} title={undefined}>
  {props => {
  return <Heading>I am a Heading</Heading>}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Heading Sizes"}>
  {props => { 
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
);}}
</ComponentPreviewer>
        </ScrollView>
  );
}
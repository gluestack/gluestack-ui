import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Heading } from '@/components/ui/heading'
import { Center } from '@/components/ui/center'


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
        <ScrollView>
      <ComponentPreviewer props={{}} title={undefined}>
  {props => {
  return <Heading>I am a Heading</Heading>}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={undefined}>
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
    </SafeAreaView>
  );
}
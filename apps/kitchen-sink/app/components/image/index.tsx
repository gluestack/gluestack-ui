import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Image } from '@/components/ui/image'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
      <ComponentPreviewer props={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "2xs",
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl"
    ],
    "defaultValue": "md"
  }
}} title={undefined}>
  {props => {
  return (
    <Image
      size={props.size}
      source={{
        uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      }}
      alt="image"
    />
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={undefined}>
  {props => {
  return (
    <Image
          source={{
            uri: "https://gluestack.github.io/public-blog-video-assets/mountains.png",
          }}
          alt="Logo"
          size='none'
          className="aspect-[320/208] w-full max-w-[320px]"
        />
  );}}
</ComponentPreviewer>
        </ScrollView>
  );
}
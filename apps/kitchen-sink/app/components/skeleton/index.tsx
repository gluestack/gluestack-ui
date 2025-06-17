import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Skeleton, SkeletonText } from '@/components/ui/skeleton'
import { Box } from '@/components/ui/box'
import { HStack } from '@/components/ui/hstack'
import { Image } from '@/components/ui/image'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
      <ComponentPreviewer props={{}} title={"Basic"}>
  {props => {
  return (
    <Box className="w-[325px] gap-4 p-3 rounded-md bg-background-100">
      <Skeleton variant="sharp" className="h-[150px]" />
      <SkeletonText _lines={3} className="h-3" />
      <HStack className="gap-2 align-middle">
        <Skeleton variant="circular" className="h-[24px] w-[24px] mr-2" />
        <SkeletonText _lines={2} gap={1} className="h-2 w-2/5" />
      </HStack>
    </Box>
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{
  "isLoaded": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  }
}} title={"Using isLoaded prop"}>
  {props => {
  return (
    <Box className="w-[290px] h-[400px] p-4 rounded-sm bg-background-100 gap-3">
        <Skeleton variant="rounded" className="h-44 w-64 rounded-sm" isLoaded={props.isLoaded}>
          <Image
          className="h-44 w-64 rounded-sm"
          source={{
            uri: 'https://images.unsplash.com/photo-1715006020121-dd50879f9821?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
           />
        </Skeleton>
        <VStack className="gap-2">
          <Text className="text-primary-700 text-sm">May 15, 2023</Text>
          <Text className="text-primary-900 font-bold">
          The Power of Positive Thinking
          </Text>
          <Text className="text-primary-700 text-sm">
          Discover how the power of positive thinking can transform your life,
          boost your confidence, and help you overcome challenges.
          </Text>
        </VStack>
        <HStack className="gap-2">
        <Avatar size="xs">
          <AvatarFallbackText>John Smith</AvatarFallbackText>
        </Avatar>
        <Text className="text-sm font-bold">John Smith</Text>
      </HStack>
      </Box>
  );}}
</ComponentPreviewer>
        </ScrollView>
  );
}
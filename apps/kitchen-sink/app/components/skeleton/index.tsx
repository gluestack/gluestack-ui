import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-50">
        <ScrollView>
      <ComponentPreviewer props={{}}>
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
        </ScrollView>
    </SafeAreaView>
  );
}
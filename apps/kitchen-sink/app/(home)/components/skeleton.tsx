import { Skeleton, SkeletonText } from '@/components/ui/skeleton'
import { Box } from '@/components/ui/box'
import { HStack } from '@/components/ui/hstack'
import { Image } from '@/components/ui/image'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Box className="w-[300px] gap-4 p-3">
      <Skeleton variant="sharp" className="h-[100px]" />
      <SkeletonText _lines={3} className="h-2" />
      <HStack className="gap-1 align-middle">
        <Skeleton variant="circular" className="h-[24px] w-[28px] mr-2" />
        <SkeletonText _lines={2} gap={1} className="h-2 w-2/5" />
      </HStack>
    </Box>
  )
};

const ExampleUsingIsLoadedProp = () => {
return (
    <Box className="w-[290px] p-4 rounded-sm  gap-3">
        <Skeleton variant="rounded" className="h-44 w-64 rounded-sm" isLoaded={ false }>
          <Image
          className="h-44 w-64 rounded-sm"
          source={{
            uri: 'https://images.unsplash.com/photo-1715006020121-dd50879f9821?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
           />
        </Skeleton>
        <VStack className="gap-2">
          <Text className="text-muted-foreground text-sm">May 15, 2023</Text>
          <Text className="text-foreground font-bold">
          The Power of Positive Thinking
          </Text>
          <Text className="text-muted-foreground text-sm">
          Discover how the power of positive thinking can transform your life,
          boost your confidence, and help you overcome challenges.
          </Text>
        </VStack>
        <HStack className="gap-2 items-center">
        <Avatar size="xs" className="bg-primary">
          <AvatarFallbackText className="text-primary-foreground">John Smith</AvatarFallbackText>
        </Avatar>
        <Text className="text-sm font-bold">John Smith</Text>
      </HStack>
      </Box>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "using-isloaded-prop",
    label: "Using isLoaded prop",
    content: <ExampleUsingIsLoadedProp />,
  }
];

export default function SkeletonScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
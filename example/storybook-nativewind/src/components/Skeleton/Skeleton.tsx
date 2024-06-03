import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Box } from '@/components/ui/box';
import { Image } from '@/components/ui/image';
import { VStack } from '@gluestack-ui/themed';
import { HStack } from '@/components/ui/hstack';
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Text } from '@/components/ui/text';

const SkeletonExample = () => {
  return (
    <Box className="w-[290px] h-[400px] p-4 rounded-md bg-background-100 gap-3">
      <Skeleton variant="rounded" className="h-44 w-64">
        <Image
          size="full"
          className="h-44 w-64 rounded-md"
          source={{
            uri: 'https://images.unsplash.com/photo-1715006020121-dd50879f9821?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
      </Skeleton>
      <VStack className="gap-2">
        <Text className="text-sm text-primary-700">May 15, 2023</Text>
        <Text className="text-base text-primary-900">
          The Power of Positive Thinking
        </Text>
        <Text className="text-sm text-primary-700">
          Discover how the power of positive thinking can transform your life,
          boost your confidence, and help you overcome challenges.
        </Text>
      </VStack>
      <HStack className="gap-2 items-center ">
        <Avatar size="xs">
          <AvatarFallbackText>John Smith</AvatarFallbackText>
        </Avatar>
        <Text className="text-sm font-bold">John Smith</Text>
      </HStack>
    </Box>
  );
};

export default SkeletonExample;

import React from 'react';
import { Box } from '@/components/ui/box';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import { HStack } from '@/components/ui/hstack';

const SkeletonCard = () => {
  return (
    <Box className="w-[325px] gap-4 p-4 border border-gray-200 rounded-md">
      <Skeleton variant="sharp" className="h-[150px]" />
      <SkeletonText _lines={4} className="h-3" />
      <HStack className="gap-2 align-middle">
        <Skeleton variant="circular" className="h-[24px] w-[24px]" />
        <SkeletonText _lines={2} gap={1} className="h-2 w-2/5" />
      </HStack>
    </Box>
  );
};

export default SkeletonCard;

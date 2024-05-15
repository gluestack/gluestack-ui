import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import React from 'react';

const SkeletonThumbnails = () => {
  return (
    <HStack className="w-full gap-3 justify-center">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <Box key={index} className="w-1/4 gap-2">
            <Skeleton variant="sharp" className="h-[150px]" />
            <SkeletonText className="h-3" />
            <SkeletonText className="h-3 w-3/5" />
          </Box>
        ))}
    </HStack>
  );
};

export default SkeletonThumbnails;

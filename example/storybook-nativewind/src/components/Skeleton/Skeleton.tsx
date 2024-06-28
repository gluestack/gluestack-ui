import React from 'react';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import { Box } from '@/components/ui/box';

const SkeletonBasic = () => {
  return (
    <Box className="gap-2">
      <Skeleton variant="rounded" className="h-44 w-64 rounded-sm" />
      <SkeletonText className="h-4 w-64 " />
    </Box>
  );
};

export default SkeletonBasic;

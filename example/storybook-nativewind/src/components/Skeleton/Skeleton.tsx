import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Box } from '@/components/ui/box';

const SkeletonExample = () => {
  return (
    <Box className="gap-2 w-full">
      <Skeleton
        variant="circular"
        startColor="bg-blue-200"
        className="h-12 w-12"
      />
      <Skeleton variant="rounded" startColor="bg-blue-200" className="h-12" />
      <Skeleton variant="sharp" startColor="bg-blue-200" className="h-12" />
    </Box>
  );
};

export default SkeletonExample;

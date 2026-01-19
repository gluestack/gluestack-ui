import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Skeleton } from '@/components/ui/skeleton';
import { SkeletonText } from '@/components/ui/skeleton';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
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
}`}
      argTypes={{}}
      reactLive={{ Skeleton, SkeletonText, Box, HStack }}
    />
  );
}
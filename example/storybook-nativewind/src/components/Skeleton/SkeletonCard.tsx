import React from 'react';
import { Box } from '@/components/ui/box';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Switch } from '@/components/ui/switch';

const SkeletonCard = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <VStack>
      <Switch
        value={isLoaded}
        onToggle={() => {
          setIsLoaded(!isLoaded);
        }}
        className="mb-10"
      />
      <HStack className="gap-3">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Box
              key={index}
              className="w-[325px] h-full gap-4 p-3 border border-gray-200 rounded-md"
            >
              <Skeleton
                variant="sharp"
                className="h-[150px]"
                isLoaded={isLoaded}
              >
                <Image
                  className="h-[150px] w-[320px] object-contain"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1715006020121-dd50879f9821?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  }}
                />
              </Skeleton>
              <SkeletonText _lines={4} className="h-3" isLoaded={isLoaded}>
                <Text className="font-medium">
                  Lorem ipsum dolor sit amet conseur aing ae elit. Deserunt ipsa
                  libero eius sunt quae is voluptas
                </Text>
              </SkeletonText>
              <HStack className="gap-2 align-middle">
                <Skeleton
                  variant="circular"
                  className="h-[24px] w-[24px]"
                  isLoaded={isLoaded}
                >
                  <Image
                    className="h-[24px] w-[24px] rounded-full"
                    source={{
                      uri: 'https://images.unsplash.com/photo-1715006020121-dd50879f9821?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}
                  />
                </Skeleton>
                <SkeletonText
                  _lines={2}
                  gap={1}
                  className="h-2 w-2/5"
                  isLoaded={isLoaded}
                >
                  <Text className="font-medium">username</Text>
                </SkeletonText>
              </HStack>
            </Box>
          ))}
      </HStack>
    </VStack>
  );
};

export default SkeletonCard;

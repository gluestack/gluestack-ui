import React from 'react';
import { Box } from '@/components/ui/box';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Switch } from '@/components/ui/switch';
import { ScrollView } from '@/components/ui/scroll-view';

const SkeletonCard = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <VStack className="w-full h-full">
      <Switch
        value={isLoaded}
        onToggle={() => {
          setIsLoaded(!isLoaded);
        }}
        className="mb-10"
      />
      <ScrollView className="gap-3 w-full" horizontal={true}>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Box
              key={index}
              className="w-[250px] gap-4 p-3 h-[50%] web:h-full mx-2 border border-outline-200 rounded-md"
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
                <Text className="" size="sm">
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
                  <Box>
                    <Text className="" size="xs">
                      username
                    </Text>
                    <Text className="" size="xs">
                      username
                    </Text>
                  </Box>
                </SkeletonText>
              </HStack>
            </Box>
          ))}
      </ScrollView>
    </VStack>
  );
};

export default SkeletonCard;

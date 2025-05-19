'use client';
import { Box, Heading, Text, VStack } from '@/components/ui';
import Image from 'next/image';

const Inspiration = () => {
  return (
    <Box className="gap-20">
      <VStack className="max-w-[1024px] mt-[120px] gap-3">
        <Heading className="text-3xl font-bold sm:leading-[54px] leading-9 text-typography-900 sm:text-4xl">
          Inspiration
        </Heading>
        <Text className="text-lg font-normal leading-[30px] lg:w-[75%]">
          This project wouldn't have been possible without the great work by
          community members and inspiration from these libraries.
        </Text>
      </VStack>
      <Box className="relative max-w-4xl w-full h-full aspect-[844/311]">
        <Image alt="tech logos" src="/assets/ins-img.png" fill sizes="100vw" />
      </Box>
    </Box>
  );
};

export default Inspiration;

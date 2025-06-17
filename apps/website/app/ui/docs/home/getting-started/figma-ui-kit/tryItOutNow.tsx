import React from 'react';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';

export const TryItOutNow = () => {
  return (
    <Box className="mt-6 m-3 p-4 flex rounded-md border border-[#E6E6E6] dark:border-[#414141] mb-6">
      <HStack className="sm:items-center sm:justify-between flex-col sm:flex-row">
        <Box
          maxWidth="fit-content"
          maxHeight="fit-content"
          className="max-w-fit max-h-fit flex-1 text-sm gap-[6px]"
        >
          <Text className="text-lg font-semibold dark:text-[#FAFAFA] text-[#171717]">
            Try it out now!
          </Text>
          <Text className="text-sm leading-[22px] max-w-[94%]">
            Streamline your design process with our versatile Figma kit. Get
            access to a rich collection of components, patterns, and assets to
            create stunning designs effortlessly.
          </Text>
        </Box>
        <a
          className="contents"
          href="https://www.figma.com/community/file/1358053104938234615"
          target="__blank"
        >
          <Button className="gap-2 sm:mt-0 mt-6">
            <ButtonText>Figma Kit</ButtonText>
          </Button>
        </a>
      </HStack>
    </Box>
  );
};

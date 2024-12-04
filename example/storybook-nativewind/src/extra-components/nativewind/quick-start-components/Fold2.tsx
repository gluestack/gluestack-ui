import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { ArrowRightIcon, Icon } from '@/components/ui/icon';
import React, { memo } from 'react';
import { Card } from './Card';
import { content } from './content';
import NextLink from 'next/link';
import { HStack } from '@/components/ui/hstack';

const Fold2 = memo(() => {
  return (
    <Box className="my-6 flex-column flex-wrap gap-5 md:flex-wrap  md:flex-row  md:web:grid  grid md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] xxl:grid-cols-[repeat(4,_1fr)]">
      {content.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            child={item.child}
            href={item.href}
          />
        );
      })}
      <NextLink
        href="/ui/docs/overview/all-components"
        style={{
          textDecoration: 'none',
        }}
      >
        <VStack className="h-full min-w-[240px] min-h-[240px] items-center justify-center flex-1 rounded-xl border border-background-100  bg-background-100  dark:bg-black  dark:border-background-300">
          <VStack className="px-6 justify-center items-center">
            <Text className=" text-center text-lg">30+ components</Text>
            <Text className="mb-6 text-center text-lg">
              for React, Next.js & React Native
            </Text>
            <HStack className="items-center gap-2">
              <Text className="text-primary-400 text-lg  dark:text-typography-500">
                See All
              </Text>
              <Icon as={ArrowRightIcon} className="text-typography-500" />
            </HStack>
          </VStack>
        </VStack>
      </NextLink>
    </Box>
  );
});

Fold2.displayName = 'Fold2';

export default Fold2;

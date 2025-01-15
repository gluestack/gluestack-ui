import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import NextLink from 'next/link';

export const ComponentCard = ({
  title,
  child,
  href,
}: {
  title: string;
  child: React.ReactNode;
  props?: any;
  href: string;
}) => {
  return (
    <VStack className="rounded-xl border border-outline-100 min-w-full md:flex-1 ">
      <Box
        className={`min-h-[236px] rounded-tl-xl rounded-tr-xl border-b border-b-outline-50 bg-background-50 items-center justify-center p-6`}
      >
        {child}
      </Box>
      <NextLink
        href={href}
        style={{
          textDecoration: 'none',
        }}
      >
        <Box>
          <Text className="text-xl font-medium leading-3 px-6 py-4">
            {title}
          </Text>
        </Box>
      </NextLink>
    </VStack>
  );
};

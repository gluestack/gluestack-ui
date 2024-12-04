import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import React from 'react';
import NextLink from 'next/link';

export const Card = ({
  title,
  child,
  href,
}: {
  title: string;
  child: React.ReactNode;
  href: string;
}) => {
  return (
    <Box className="min-w-[240px] min-h-[240px] flex-1 rounded-xl border border-background-100  bg-background-100   dark:border-background-300">
      <Box className="flex flex-row flex-4 min-h-[200px] px-6 w-full justify-center items-center  border-b-background-100  bg-background-50  dark:border-b-borderDark-300  dark:bg-black rounded-tl-xl rounded-tr-xl">
        {child}
      </Box>
      <NextLink
        href={href}
        style={{
          textDecoration: 'none',
        }}
      >
        <Box>
          <Text className="text-xl font-medium my-3 px-6">{title}</Text>
        </Box>
      </NextLink>
    </Box>
  );
};

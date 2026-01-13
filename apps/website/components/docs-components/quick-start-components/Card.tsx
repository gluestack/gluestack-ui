import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import React from 'react';
import NextLink from 'next/link';

export const Card = ({
  title,
  child,
  href,
}: {
  title: string | React.ReactNode;
  child: React.ReactNode;
  href: string;
}) => {
  return (
    <Box className="min-w-[240px] min-h-[240px] flex-1 rounded-xl border border-border">
      <Box className="flex flex-row flex-4 min-h-[200px] px-6 w-full justify-center items-center bg-muted/50 rounded-tl-xl rounded-tr-xl">
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

import { Link } from '@/components/ui/link';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
//@ts-nocheck
import React from 'react';
import NextImage from 'next/image';
export const CardTalk = ({
  title,
  name,
  date,
  bannerImage,
  link,
  isExternal,
}: {
  title: string;
  name: string;
  date: string;
  bannerImage: string;
  link: string;
  isExternal: boolean;
}) => {
  return (
    <Box className="rounded-xl border max-w-[327px] border-trueGray-400  background-[linear-gradient(90deg, rgba(240, 239, 255, 0.20) 0%, rgba(205, 201, 255, 0.00) 100%), rgba(187, 210, 255, 0.20)]  dark:border-borderDark-800  dark:background-[linear-gradient(90deg, rgba(43, 39, 90, 0.20) 0%, rgba(43, 39, 90, 0.00) 100%), rgba(62, 72, 91, 0.20)] overflow-hidden">
      <Link href={link} isExternal={isExternal}>
        <Box className="w-[327px] h-[165px]">
          <NextImage src={bannerImage} alt="architecture" fill={true} />
        </Box>
        <VStack className="py-4 px-6">
          <Text className="pb-3 text-xl font-medium">{title}</Text>
          <Text className="leading-md text-trueGray-700  dark:text-trueGray-400">
            {name}
          </Text>
          <Text className="text-trueGray-700  dark:text-trueGray-400 text-sm font-inter">
            {date}
          </Text>
        </VStack>
      </Link>
    </Box>
  );
};

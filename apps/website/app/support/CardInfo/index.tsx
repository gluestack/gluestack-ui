'use client';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import NextImage from 'next/image';

function CardInfo({
  iconSrc,
  value,
  name,
}: {
  iconSrc: string;
  value: string;
  name: string;
}) {
  return (
    <HStack>
      <NextImage
        src={iconSrc}
        alt="right encircled icon"
        width={86}
        height={86}
      />
      <VStack className="ml-7 gap-3">
        <Text className="text-primary-500 text-3xl leading-10 tracking-[0.72px] font-bold md:text-4xl md:leading-[48px]">
          {value}
        </Text>
        <Text className="text-typography-400 text-2xl">{name}</Text>
      </VStack>
    </HStack>
  );
}

export default CardInfo;

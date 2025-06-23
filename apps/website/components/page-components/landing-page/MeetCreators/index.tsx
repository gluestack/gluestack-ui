// @ts-nocheck

import { Box } from '@/components/ui/box';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Image } from '@/components/ui/image';
import { Heading } from '@/components/ui/heading';
import { ArrowRightIcon } from '@/components/ui/icon';
import { useContext } from 'react';

function MeetCreators({ geekyantsLink }: { geekyantsLink: string }) {
  // const { colorMode } = useMode();
  return (
    <Box className="mt-[120px] gap-12">
      <VStack className="lg:max-w-[768px]">
        <Box className="min-[425px]:items-center mb-3 gap-1 min-[425px]:flex-row">
          <Heading className="text-3xl min-[425px]:text-2xl font-bold sm:leading-[54px] leading-9 text-typography-900 sm:text-4xl">
            Created By
          </Heading>
          <HStack className="gap-1 items-center">
            <Image
              source={require('@/public/svg/GeekyAnts_icon.svg')}
              className="h-[54px] w-[54px]"
              alt="GeekyAnts Logo"
            />
            <Text className="text-3xl min-[425px]:text-2xl font-bold sm:leading-[54px] leading-9 text-typography-900 sm:text-4xl">
              GeɘkyAnts
            </Text>
          </HStack>
          {/* <HStack className="justify-center items-center gap-1"></HStack> */}
        </Box>

        <Text className="text-lg font-bold leading-[30px] text-typography-700">
          An OSS-loving, community-driven team of React Native geeks!
        </Text>
        <Text className="text-lg font-normal leading-[30px] mt-3 text-typography-700">
          GeekyAnts is a team of React Native experts who love open-source and
          solving developer problems. We’ve been working on React Native since
          2015 and have designed and built{' '}
          <a
            href="https://theappmarket.io/"
            className="underline underline-offset-4 group-hover/link:underline"
          >
            React Native apps
          </a>{' '}
          for almost 200+ clients across the globe. Our clients include startups
          to big enterprises! Need help with your React Native app?
        </Text>
      </VStack>

      <HStack>
        <Link
          className="rounded-full focus-visible:outline-0 focus-visible:bg-secondary-50/20"
          href={geekyantsLink}
          isExternal
        >
          <Button size="sm" focusable={false}>
            <ButtonText className="mr-1 no-underline">
              Visit GeekyAnts
            </ButtonText>
            <ButtonIcon className="w-4 h-4" as={ArrowRightIcon} />
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}

export default MeetCreators;

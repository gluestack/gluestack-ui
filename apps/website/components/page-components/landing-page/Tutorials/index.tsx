'use client';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Button,
  ButtonText,
  ButtonIcon,
  ChevronRightIcon,
} from '@/components/ui';
import Image from 'next/image';
import NextLink from 'next/link';

const Tutorials = () => {
  return (
    <Box className="gap-20">
      <VStack className="max-w-[1024px] mt-[120px] gap-3">
        <HStack className="gap-2">
          <Heading className="text-3xl font-bold sm:leading-[54px] leading-9 text-typography-900 sm:text-4xl">
            Learn about gluestack from Youtube guru
          </Heading>
          <NextLink href="/ui/docs/apps/kitchensink-app">
            <Heading className="text-3xl font-bold sm:leading-[54px] leading-9 text-info-600 sm:text-4xl">
              notJust.dev
            </Heading>
          </NextLink>
        </HStack>
        <Text className="text-lg font-normal leading-[30px] lg:w-[75%]">
          Vadim, popularly known as "just-not-dev" on YouTube, offers insightful
          and practical videos that explore a wide range of developer tools and
          frameworks, including Gluestack-UI.
        </Text>
      </VStack>
      <HStack className="relative flex-1 w-full h-full aspect-[844/311] gap-5 flex-col md:flex-row">
        <Box className="flex-1 border border-outline-200 rounded-lg p-10">
          <HStack className="justify-between flex-1">
            <Text>Build an Ecommerce Admin Dashboard with Next.js</Text>
            <Box className="flex-1 ">
              <Image
                alt="tech logos"
                src="/assets/youtube-open.png"
                fill
                sizes="10vw"
              />
            </Box>
          </HStack>
          <Image
            alt="tech logos"
            src="/assets/tutorial-1.png"
            fill
            sizes="100vw"
          />
          {/* <iframe
            src="https://www.youtube.com/embed/NCAY0HIfrwc"
            title="Mobile Innovation with React Native, ComponentKit, and Litho"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            class="video_Ie63"
          ></iframe> */}
        </Box>
        <Box className="flex-1 border border-outline-200 rounded-lg p-10">
          <Image
            alt="tech logos"
            src="/assets/tutorial-2.png"
            fill
            sizes="100vw"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Tutorials;

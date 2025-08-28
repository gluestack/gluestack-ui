'use client';
import { Box } from '@/components/ui/box';
import { ChevronRightIcon } from '@/components/ui/icon';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Divider } from '@/components/ui/divider';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import Image from 'next/image';
import NextLink from 'next/link';
import IOS from '../Ios';
import Android from '../Android';
import { kitchensink } from '@/components/docs-components/apps/appConfig';

const Kitchensink = () => {
  return (
    <Box className="gap-10 p-4 bg-background-50 mt-[120px] sm:mt-0 sm:bg-background-0 sm:p-0 sm:border-none border border-outline-100 rounded-lg sm:rounded-none">
      <VStack className="max-w-[1024px] sm:mt-[120px] gap-3">
        <Heading className="text-3xl font-bold sm:leading-[54px] leading-9 text-typography-900 sm:text-4xl">
          Kitchensink
        </Heading>
        <VStack className="gap-4">
          <Text className="text-lg font-normal leading-[30px] lg:w-[75%]">
            <a
              href="https://gluestack.io/ui/docs/apps/kitchensink-app"
              className="underline underline-offset-4 group-hover/link:underline"
            >
              KitchenSink
            </a>{' '}
            is a comprehensive demo React and React Native mobile app showcasing
            all the gluestack UI component libraries in action including
            buttons, forms, action sheets and much more!
          </Text>
          <NextLink
            href="/ui/docs/apps/kitchensink-app"
            className="md:hidden flex"
          >
            <Button>
              <ButtonText>Learn More</ButtonText>
              <ButtonIcon as={ChevronRightIcon} />
            </Button>
          </NextLink>
        </VStack>
      </VStack>
      <HStack className="relative flex-1 w-full h-full  gap-5 flex-col xl:flex-row sm:border sm:border-outline-200 rounded-lg">
        <Box className=" p-10 md:flex hidden">
          <VStack className="flex-1">
            <VStack className="web:md:flex md:flex hidden web:hidden">
              <Heading className="text-4xl tracking-tighter font-bold sm:leading-[34px] leading-9 text-typography-900 ">
                Check out the App
              </Heading>
              <Text className="text-xl font-normal mt-4 leading-[20px]  text-typography-900 ">
                Scan the QR to open the app on your store
              </Text>
            </VStack>
            <NextLink
              href="/ui/docs/apps/kitchensink-app"
              className="md:flex hidden mt-8"
            >
              <Button>
                <ButtonText>Learn More</ButtonText>
                <ButtonIcon as={ChevronRightIcon}></ButtonIcon>
              </Button>
            </NextLink>
            {/* <NextLink
                href="/ui/docs/apps/kitchensink-app"
                className="md:hidden flex"
              >
                <Button>
                  <ButtonText>Give it a shot</ButtonText>
                  <ButtonIcon as={ChevronRightIcon}></ButtonIcon>
                </Button>
              </NextLink> */}

            <Box className="flex-1 mt-10">
              <HStack className="flex-1 gap-2 items-end">
                <Box className="flex-1 md:flex hidden">
                  <Image
                    alt="kitchensink qrcode"
                    src={kitchensink.qrCodeUri}
                    height={256}
                    width={256}
                    unoptimized
                  />
                </Box>
                <VStack className="flex-1 items-center">
                  <Text className="text-lg font-normal leading-[30px]  text-center md:flex hidden">
                    Scan the QR code
                  </Text>
                  <Text className="text-xs font-normal leading-[30px]  text-typography-600 text-center md:flex hidden">
                    Available in
                  </Text>
                  <VStack className="border border-outline-200 rounded-md items-center px-16 py-3 flex-1 gap-2 web:md:flex md:flex hidden web:hidden">
                    <HStack className="flex-1 items-center justify-center gap-2">
                      <IOS />
                      <Text className="text-md font-normal leading-[30px] flex-1">
                        ios
                      </Text>
                    </HStack>
                    <Divider />
                    <HStack className="flex-1 items-center justify-center gap-2">
                      <Android />
                      <Text className="text-md font-normal leading-[30px] flex-1">
                        Andriod
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </Box>

        <Box className="flex-1 sm:mt-10  sm:p-10 aspect-[5/3] md:aspect-[604/411]">
          <Image
            alt="kitchensink image"
            src="/assets/kitchensink.png"
            fill
            sizes="100vw"
            unoptimized
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Kitchensink;

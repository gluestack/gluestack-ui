import { Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import React, { useState } from 'react';
import Next from './Next';
import MySvgComponent from './MySvgComponent';
import Expo1 from './Expo1';
import ReactN from './ReactN';
import VsCode from './VsCode';
import NextLink from 'next/link';
import Tilde from './Tilde';
import Copied from './Copied';
import Copy from './Copy';
import Figma from './Figma';
import Unitools from './Unitools';

function Card1() {
  const [copied, setCopied] = useState(false);
  const [showCopy, setShowCopy] = useState(false);

  const copyToClipboard = async () => {
    const text = 'npm create gluestack';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Box className="py-6 flex-1 ">
      <Box className="gap-5 mb-6 flex lg:flex-row flex-col w-full">
        <Box className="rounded-xl border lg:flex-1 border-background-100 bg-background-50  dark:border-background-300 web:bg-[linear-gradient(329deg, rgba(0, 56, 255, 0.08) 0%, rgba(39, 87, 255, 0.00) 99.99%, rgba(0, 56, 255, 0.00) 100%), linear-gradient(123deg, rgba(233, 185, 255, 0.60) 0%, rgba(15, 24, 86, 0.00) 100%)]  web:dark:bg-[linear-gradient(329deg, rgba(0, 16, 71, 0.40) 0%, rgba(77, 77, 77, 0.00) 100%), linear-gradient(123deg, rgba(115, 41, 150, 0.60) 0%, rgba(15, 24, 86, 0.00) 100%)] ">
          <Box className="p-6">
            <VStack space="lg" className="justify-center">
              <HStack className="justify-between items-center">
                <Text className="text-xl font-bold font-plus-jakarta my-0">
                  Quickstart
                </Text>
                <MySvgComponent />
              </HStack>
              <HStack
                onPointerEnter={() => {
                  setShowCopy(true);
                }}
                onPointerLeave={() => {
                  setShowCopy(false);
                }}
                className="items-center justify-start py-6 px-7 rounded-lg md:px-9 shadow-[0px 0px 100px 0px rgba(0, 119, 230, 0.60)]  dark:shadow-[0px 0px 100px 0px rgba(0, 119, 230, 0.60)]  dark:bg-black bg-white"
              >
                <Tilde />
                <Text className="text-lg leading-sm mx-3 font-sourcecode font-medium text-typography-900    md:text-xl  md:leading-md">
                  npm create{' '}
                  <Text className="text-lg leading-sm font-medium text-primary-300 font-sourcecode md:text-xl  md:leading-md">
                    gluestack
                  </Text>
                </Text>
                {showCopy ? (
                  <Button
                    onPress={copyToClipboard}
                    // variant=""
                    variant="outline"
                    className="absolute right-3 p-0 web:cursor-pointer md:right-9 border-none data-[hover=true]:bg-none"
                  >
                    {copied ? <Copied /> : <Copy />}
                  </Button>
                ) : null}
              </HStack>
            </VStack>
          </Box>
        </Box>
        <Box className="rounded-xl border lg:flex-1 border-background-100  dark:border-background-300  dark:bg-[linear-gradient(150.32deg, #3E485B 18.15%, rgba(55, 65, 81, 0) 92.97%), linear-gradient(0deg, rgba(62, 72, 91, 0.2), rgba(62, 72, 91, 0.2)] bg-rgb(212,226,255) bg-background-50">
          <Box className="p-6">
            <VStack space="lg">
              <Text className="text-xl font-bold font-plus-jakarta">
                Manual Installation
              </Text>
              <HStack className="flex-wrap gap-2.5">
                <NextLink
                  href="/ui/docs/home/getting-started/installation"
                  style={{
                    borderRadius: 8,
                    height: 72,
                  }}
                >
                  <Next />
                </NextLink>
                <NextLink
                  href="/ui/docs/home/getting-started/installation"
                  style={{
                    borderRadius: 8,
                    height: 72,
                  }}
                >
                  <Expo1 />
                </NextLink>
                <NextLink
                  href="/ui/docs/home/getting-started/installation"
                  style={{
                    borderRadius: 8,
                    height: 72,
                  }}
                >
                  <ReactN />
                </NextLink>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
      <Box className="gap-5 flex lg:flex-row  lg:flex-wrap flex-col w-full">
        <Box className="rounded-xl border border-background-100 bg-background-50 dark:border-background-300 web:bg-[linear-gradient(99deg, rgba(248, 207, 106, 0.20) 5.76%, rgba(80, 228, 255, 0.20) 87.08%)] ">
          <Box className="p-6">
            <VStack space="lg">
              <Text className="text-xl font-bold font-plus-jakarta">
                VS Code Extension
              </Text>
              <HStack>
                <NextLink
                  href="/ui/docs/getting-started/vscode-extensions"
                  style={{
                    borderRadius: 8,
                    height: 72,
                  }}
                >
                  <VsCode />
                </NextLink>
              </HStack>
            </VStack>
          </Box>
        </Box>
        <Box className="rounded-xl border border-background-100 bg-background-50 dark:border-background-300 web:bg-[linear-gradient(99deg, rgba(20, 82, 119, 0.20) 5.76%, rgba(197, 58, 148, 0.20) 87.08%)] ">
          <Box className="p-6">
            <VStack space="lg">
              <Text className="text-xl font-bold font-plus-jakarta">
                Figma UI Kit
              </Text>
              <HStack className="flex-wrap gap-2.5">
                <Link
                  href="https://www.figma.com/@gluestack"
                  isExternal
                  className="rounded-lg"
                >
                  <Figma />
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Box>
        <Box className="rounded-xl border lg:flex-1 border-background-100 bg-background-50 dark:border-background-300 web:bg-[linear-gradient(99deg, rgba(247, 162, 161, 0.20) 5.76%, rgba(33, 120, 221, 0.20) 87.08%)] ">
          <Box className="p-6">
            <VStack space="lg">
              <Text className="text-xl font-bold font-plus-jakarta">
                Head Starter Kit
              </Text>
              <HStack className="flex-wrap gap-2.5">
                <Link
                  href="https://github.com/gluestack/gluestack-ui-starter-kits/tree/main/next"
                  isExternal
                  className="rounded-lg"
                >
                  <Next />
                </Link>
                <Link
                  href="https://github.com/gluestack/gluestack-ui-starter-kits/tree/main/expo-app"
                  isExternal
                  className="rounded-lg"
                >
                  <Expo1 />
                </Link>
                <Link
                  href="https://github.com/gluestack/gluestack-ui-starter-kits/tree/main/universal"
                  isExternal
                  className="rounded-lg flex items-center bg-white justify-center p-4 dark:bg-neutral-600"
                >
                  <HStack className="gap-2 items-center">
                    <Unitools />
                    <Text className="text-black dark:text-white text-xl font-thin">
                      Universal
                    </Text>
                  </HStack>
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card1;

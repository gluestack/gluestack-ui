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
    const text = 'npm create gluestack@latest';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Box className="py-6 flex-1 ">
      <Box className="gap-5 mb-6 flex lg:flex-row flex-col w-full">
        <Box className="rounded-xl border lg:flex-1 border-outline-50 bg-background-50">
          <Box className="p-6">
            <VStack space="lg" className="justify-center">
              <HStack className="justify-between items-center">
                <Text className="text-xl font-bold font-plus-jakarta my-0">
                  Quick Start
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
                className="items-center justify-start py-6 px-7 rounded-lg md:px-9 dark:bg-black bg-white"
              >
                <Tilde />
                <Text className="text-lg leading-sm mx-3 font-source-code-pro font-medium text-typography-900  md:text-xl  md:leading-md">
                  npm create{' '}
                  <Text className="text-lg leading-sm font-medium text-primary-300 font-source-code-pro md:text-xl  md:leading-md">
                    gluestack@latest
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
        <Box className="rounded-xl border lg:flex-1 border-outline-50  bg-background-50">
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
        <Box className="rounded-xl border border-outline-50 bg-background-50">
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
        <Box className="rounded-xl border border-outline-50 bg-background-50">
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
        <Box className="rounded-xl border lg:flex-1 border-outline-50 bg-background-50 ">
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
                  className="rounded-lg flex items-center justify-center p-4 bg-background-0 dark:bg-[#323031]  border-[1.5px] border-outline-0 dark:border-outline-100 border-t-[0.5px] border-l-[0.5px]"
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

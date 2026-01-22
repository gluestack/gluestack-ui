'use client';
import React, { useState } from 'react';
import { Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
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
    const text = 'npm create gluestack@alpha';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Box className="py-6 flex-1 ">
      <Box className="gap-5 mb-6 flex lg:flex-row flex-col w-full">
        <Box className="rounded-xl border lg:flex-1 border-border bg-muted/50">
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
                className="items-center justify-start py-6 px-7 rounded-lg md:px-9 bg-background"
              >
                <Terminal className="text-muted-foreground" />
                <Text className="text-lg leading-sm mx-3 font-geist-mono font-medium text-foreground/90 md:text-xl md:leading-md tracking-tighter">
                  npm create{' '}
                  <Text className="text-lg leading-sm font-medium text-foreground/80 font-geist-mono md:text-xl md:leading-md tracking-tighter">
                    gluestack@alpha
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
        <Box className="rounded-xl border lg:flex-1 border-border bg-muted/50">
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
                  className="bg-secondary-0"
                >
                  <Next />
                </NextLink>
                <NextLink
                  href="/ui/docs/home/getting-started/installation"
                  style={{
                    borderRadius: 8,
                    height: 72,
                  }}
                  className="bg-secondary-0"
                >
                  <Expo1 />
                </NextLink>
                <NextLink
                  href="/ui/docs/home/getting-started/installation"
                  style={{
                    borderRadius: 8,
                    height: 72,
                  }}
                  className="bg-secondary-0"
                >
                  <ReactN />
                </NextLink>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
      <Box className="gap-5 flex lg:flex-row  lg:flex-wrap flex-col w-full">
        <Box className="rounded-xl border border-border bg-muted/50">
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
                  className="bg-secondary-0"
                >
                  <VsCode />
                </NextLink>
              </HStack>
            </VStack>
          </Box>
        </Box>
        <Box className="rounded-xl border border-border bg-muted/50">
          <Box className="p-6">
            <VStack space="lg">
              <Text className="text-xl font-bold font-plus-jakarta">
                Figma UI Kit
              </Text>
              <HStack className="flex-wrap gap-2.5">
                <Link
                  href="https://www.figma.com/@gluestack"
                  isExternal
                  className="rounded-lg bg-secondary-0"
                >
                  <Figma />
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Box>
        <Box className="rounded-xl border lg:flex-1 border-border bg-muted/50 ">
          <Box className="p-6">
            <VStack space="lg">
              <Text className="text-xl font-bold font-plus-jakarta">
                Head Starter Kit
              </Text>
              <HStack className="flex-wrap gap-2.5">
                <Link
                  href={`https://github.com/gluestack/gluestack-ui/tree/${process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'}/apps/starter-kit-next`}
                  isExternal
                  className="rounded-lg bg-secondary-0"
                >
                  <Next />
                </Link>
                <Link
                  href={`https://github.com/gluestack/gluestack-ui/tree/${process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'}/apps/starter-kit-expo`}
                  isExternal
                  className="rounded-lg bg-secondary-0"
                >
                  <Expo1 />
                </Link>
                <Link
                  href={`https://github.com/gluestack/gluestack-ui/tree/${process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'}/apps/starter-kit-universal`}
                  isExternal
                  className="rounded-lg bg-secondary-0"
                  disabled // disabled until we make a new universal starter kit
                >
                  <Unitools />
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

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
import { Image } from '@/components/ui/image';


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

  const partnerKits = [
    {
      name: 'RapidNative',
      logo: '/icon/logo/rapidnative/logo.png',
      url: 'https://rapidnative.com/?utm_source=gluestack.io&utm_medium=quick_start&utm_campaign=brand-awareness',
      description: 'Generate native apps instantly with AI prompts.',
    },
    {
      name: 'AppLighter',
      logo: '/icon/logo/applighter/logo.png',
      url: 'https://www.applighter.com/?utm_source=gluestack.io&utm_medium=quick_start&utm_campaign=brand-awareness',
      description: 'AI-Ready Full-Stack Expo Starter Kit.',
    },
    {
      name: 'FlyDash',
      logo: '/icon/logo/flydash/logo.png',
      url: 'https://flydash.io/?utm_source=gluestack.io&utm_medium=quick_start&utm_campaign=brand-awareness',
      description: 'AI-Powered Internal Tools & Dashboard Builder.',
    },
  ];

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
                className="items-center justify-start py-6 px-7 rounded-lg md:px-9 bg-background-0"
              >
                <Tilde />
                <Text className="text-xl leading-sm mx-3 font-code font-medium text-typography-900  md:text-xl  md:leading-md tracking-tighter">
                  npm create{' '}
                  <Text className="text-xl leading-sm font-medium text-primary-300 font-code md:text-xl  md:leading-md tracking-tighter">
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
                  className="bg-secondary-0"
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
                  className="rounded-lg bg-secondary-0"
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
                Our Partners
              </Text>
              <HStack className="flex-wrap gap-3">
                {partnerKits.map((kit) => (
                  <Link
                    key={kit.name}
                    href={kit.url}
                    isExternal
                    className="rounded-lg bg-secondary-0 flex-1 min-w-[120px] flex flex-col items-center gap-2 px-3 py-4 hover:bg-background-100 transition-colors"
                  >
                    <Box className="h-6 w-6 relative">
                      <Image
                        src={kit.logo}
                        alt={`${kit.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </Box>
                    <VStack className="gap-0.5 items-center">
                      <Text className="text-sm font-bold text-typography-900">
                        {kit.name}
                      </Text>
                      <Text className="text-xs text-typography-500 text-center">
                        {kit.description}
                      </Text>
                    </VStack>
                  </Link>
                ))}
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card1;

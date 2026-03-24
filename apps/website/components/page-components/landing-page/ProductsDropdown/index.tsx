'use client';
// @ts-nocheck

import React, { useState } from 'react';
import {
  Box,
  Text,
  Pressable,
  HStack,
  ChevronDownIcon,
  ChevronUpIcon,
  VStack,
  Link,
  Image,
} from '@/components/ui';
import NextImage from 'next/image';
import { useRouter } from 'next/router';

const ProductsDropdown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const productsData = [
    {
      id: 'p-ui',
      name: 'gluestack-ui',
      description: 'Universal Themed & Unstyled Components',
      tags: ['OSS'],
      link: router.pathname === '/' ? '/ui/docs/overview/introduction' : '/',
      icon: '/icon/favicons/ui.svg',
      isExternal: false,
    },
    {
      id: 'p-style',
      name: 'gluestack-style',
      description:
        'Universal and Performant Styling library made for React Native, Next.js, Expo & React',
      tags: ['OSS'],
      link: '/style',
      icon: '/icon/favicons/style.svg',
      isExternal: false,
    },

    {
      id: 'p-starter-kit',
      name: 'gluestack-ui Starter Kit',
      description:
        'Customizable and Performant pre-build UI templates built using gluestack-ui',
      tags: ['OSS'],
      link: '/starter-kit',
      icon: '/icon/favicons/ui.svg',
      isExternal: false,
    },
    {
      id: 'p-pro',
      name: 'gluestack-ui pro',
      description:
        '100+ responsive, accessible, dark mode compatible UI components that work on web and native platforms.',
      tags: [],
      link: 'https://ui-pro.gluestack.io/',
      icon: '/icon/favicons/pro.svg',
      isExternal: true,
    },
  ];

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Pressable
        className="ml-3 px-3 py-1 rounded-full"
        onPress={() => setIsOpen(!isOpen)}
        // sx={{
        //   _web: {
        //     ':focusVisible': {
        //       boxShadow: '#004282 0px 0px 0px 2px',
        //     },
        //   },
        // }}
      >
        <HStack className="items-center">
          <Text className="text-primary-600 font-medium text-md leading-6">
            Products
          </Text>
          {isOpen ? (
            <ChevronUpIcon
              ml="$1"
              color="$trueGray50"
              width="$3"
              height="$3"
              pointerEvents="none"
            />
          ) : (
            <ChevronDownIcon
              ml="$1"
              color="$trueGray50"
              width="$3"
              height="$3"
              pointerEvents="none"
            />
          )}
        </HStack>
      </Pressable>

      {isOpen && (
        <Box className="web:fixed web:left-0 web:right-0">
          <Box
            className="bg-black w-full mt-2.5 pt-12 pb-6 border-b border-b-typography-800"
            // sx={{
            //   _web: {
            //     backdropFilter: 'blur(20px)',
            //   },
            // }}
          >
            <Box className="w-[85%] max-w-[1440px] mx-auto web:grid grid-cols-5">
              <Box className="mr-10 lg:gap-3 web:grid col-span-3 grid-cols-2">
                {productsData.map((product, index) => {
                  if (product.link === router.pathname) return;
                  return (
                    <Pressable
                      className="rounded-sm hover:bg-background-950"
                      key={index}
                      pointerEvents={product.link ? 'auto' : 'none'}
                      focusable={false}
                      // @ts-ignore
                      tabIndex={-1}
                    >
                      <Link
                        className="flex-1 rounded-sm lg:p-4 p-2 hover:bg-background-950 items-start"
                        isExternal={product.isExternal}
                        href={product.link}
                        onPress={() => setIsOpen(false)}
                      >
                        <NextImage
                          src={product.icon}
                          width={24}
                          height={24}
                          alt={`${product.name} logo`}
                        />
                        <Box className="flex-1 gap-2">
                          <HStack className="flex-wrap items-center">
                            <Text className="ml-2 text-lg font-medium text-primary-600">
                              {product.name}
                            </Text>
                            {product.tags.map((tag, index) => (
                              <Box
                                className="py-0.5 px-2.5 ml-2 rounded-full border-2 border-typography-950 self-start web:backdrop-blur-md"
                                key={index}
                                // sx={{
                                //   _web: {
                                //     background:
                                //       'linear-gradient(260.55deg, rgba(21, 129, 228, 0.165) 11.83%, rgba(107, 54, 175, 0.183) 45.13%, rgba(42, 180, 217, 0.045) 93.61%)',
                                //   },
                                // }}
                              >
                                <Text className="text-2xs leading-4 text-primary-600">
                                  {tag}
                                </Text>
                              </Box>
                            ))}
                          </HStack>

                          <Text className="text-sm leading-[22px] text-typography-400">
                            {product.description}
                          </Text>
                        </Box>
                      </Link>
                    </Pressable>
                  );
                })}
              </Box>

              <Box className="border-l border-typography-800 web:col-span-2">
                <VStack className="gap-5 ml-10">
                  <Link
                    href="/ui/docs/guides/building-design-systems"
                    className="rounded-lg"
                  >
                    <Box className="border rounded-lg border-typography-800 p-4 flex-1">
                      <Box className="gap-3 flex-col lg:flex-row">
                        <Box
                          className="bg-[#212121] px-9 py-[11px] justify-center items-center min-h-[90px] lg:min-h-0"
                          //we don't have a token for this color.
                        >
                          <Image
                            src="/images/products-dropdown/ball-tip.png"
                            alt="Design System"
                            className="w-[57px] h-[57px]"
                          />
                        </Box>
                        <VStack className="gap-2 flex-1">
                          <Text className="leading-6">
                            Create your Design System
                          </Text>
                          <Text className="text-sm leading-[22px] text-typography-400">
                            Building you design system from the ground up.
                          </Text>
                        </VStack>
                      </Box>
                    </Box>
                  </Link>

                  <Link
                    className="rounded-lg"
                    href="/figma-kit"
                    onPress={() => setIsOpen(false)}
                  >
                    <Box className="border rounded-lg border-typography-800 p-4 flex-1">
                      <Box className="gap-3 flex-col lg:flex-row">
                        <Box className="w-full max-w-[129px] aspect-[1600/980]">
                          <NextImage
                            src="/images/products-dropdown/design-kit-cover.svg"
                            alt="Design System"
                            fill
                          />
                        </Box>
                        <VStack className="gap-2 flex-1">
                          <Text className="leading-6">
                            gluestack for designers
                          </Text>
                          <Text className="text-typography-400 text-sm leading-[22px]">
                            Automated components for easy collaboration and zero
                            miscommunication with devs.
                          </Text>
                        </VStack>
                      </Box>
                    </Box>
                  </Link>
                </VStack>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default ProductsDropdown;

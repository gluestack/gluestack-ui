import React from 'react';
import { Box, Text, Link, HStack } from '../../primitives';
import data from '../../utils/ecosystem.json';
import type { EcosystemItem, DataKey } from '../../utils/ecosystem';
import NextImage from 'next/image';

export function Ecosystem({ values }: { values: Array<DataKey> }) {
  let keys = Object.keys(data) as Array<DataKey>;
  keys = keys.filter((element) => values.includes(element));
  const cardsData = keys.map((key) => data[key]);

  return (
    <Box
      mb="$20"
      sx={{
        '@md': {
          mb: 100,
        },
      }}
    >
      <Box width="100%">
        <Text
          fontSize="$lg"
          lineHeight="$xl"
          sx={{
            _web: {
              background:
                'linear-gradient(93.67deg, #3E92E1 -12.63%, #9985FF 146.77%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
          }}
          mb="$3"
        >
          More from the creators
        </Text>
        <Text
          fontWeight="$bold"
          fontSize="$5xl"
          lineHeight="$4xl"
          color="$textDark50"
          sx={{
            '@base': {
              fontSize: '$4xl',
            },
            '@md': {
              fontSize: '$5xl',
            },
            '_dark': {
              color: '$textDark50',
            },
          }}
        >
          Our Ecosystem
        </Text>
        <Text
          fontSize="$lg"
          lineHeight="$lg"
          color="$textDark300"
          my="$6"
          maxWidth={708}
        >
          Curated suite of tools to simplify and accelerate building of design
          systems.
        </Text>
        <HStack>
          <Link isExternal href="https://gluestack.io/#ecosystem" mb="$6">
            <Text
              color="$primary400"
              fontSize="$lg"
              lineHeight="$md"
              fontWeight="$bold"
              sx={{
                _dark: {
                  color: '$primary500',
                },
              }}
            >
              Learn more
            </Text>
          </Link>
        </HStack>
      </Box>
      <Box
        sx={{
          '@lg': {
            flexDirection: 'row',
          },
        }}
      >
        {cardsData.map((item: EcosystemItem, index: number) => {
          return (
            <Card
              item={item}
              key={item.id}
              mr={index === cardsData.length - 1 ? '0' : '$10'}
            />
          );
        })}
      </Box>
    </Box>
  );
}

const Card = ({ item, mr }: { item: EcosystemItem; mr: any }) => {
  return (
    <Box
      mb="$10"
      borderWidth={1}
      borderColor="$borderDark800"
      borderRadius="$xl"
      overflow="hidden"
      sx={{
        '_web': {
          background: item.linearGradient,
        },
        '@md': {
          // mr: "$6",
          flex: 1,
        },
        '@lg': {
          mb: 0,
          mr,
        },
      }}
    >
      <Link
        href={item.link}
        flex={1}
        isExternal
        pointerEvents={item.name === 'gluestack-ui pro' ? 'none' : 'auto'}
      >
        <Box h="100%" p="$6">
          <HStack alignItems="center" mb="$6">
            <NextImage
              src={item.icon}
              width={20}
              height={20}
              alt={`${item.name} logo`}
              priority
            />
            <Text
              ml="$3"
              color="$trueGray50"
              fontWeight="$medium"
              fontSize="$md"
              lineHeight="$md"
            >
              {item.name}
            </Text>
            {item.tag && (
              <Box
                py="$0.5"
                px="$2.5"
                ml="$2"
                borderRadius="$full"
                borderWidth={2}
                borderColor="$borderDark800"
                alignSelf="flex-start"
                sx={{
                  _web: {
                    background:
                      'linear-gradient(260.55deg, rgba(21, 129, 228, 0.165) 11.83%, rgba(107, 54, 175, 0.183) 45.13%, rgba(42, 180, 217, 0.045) 93.61%)',
                    backdropFilter: 'blur(12px)',
                  },
                }}
              >
                {item.tag && (
                  <Text
                    fontSize="$2xs"
                    lineHeight="$2xs"
                    color="$textDark50"
                    sx={{
                      _dark: {
                        color: '$textDark50',
                      },
                    }}
                  >
                    {item.tag}
                  </Text>
                )}
              </Box>
            )}
            {item.ossTag && (
              <Box
                py="$0.5"
                px="$2.5"
                ml="$1.5"
                borderRadius="$full"
                borderWidth={2}
                borderColor="$borderDark800"
                alignSelf="flex-start"
                sx={{
                  _web: {
                    background:
                      'linear-gradient(260.55deg, rgba(21, 129, 228, 0.165) 11.83%, rgba(107, 54, 175, 0.183) 45.13%, rgba(42, 180, 217, 0.045) 93.61%)',
                    backdropFilter: 'blur(12px)',
                  },
                }}
              >
                {item.ossTag && (
                  <Text
                    fontSize="$2xs"
                    lineHeight="$2xs"
                    color="$textDark50"
                    sx={{
                      _dark: {
                        color: '$textDark50',
                      },
                    }}
                  >
                    {item.ossTag}
                  </Text>
                )}
              </Box>
            )}
          </HStack>
          <Text
            fontSize="$lg"
            lineHeight="$lg"
            color="$textDark300"
            mb="$5"
            sx={{
              _dark: {
                color: '$textDark300',
              },
            }}
          >
            {item.description}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

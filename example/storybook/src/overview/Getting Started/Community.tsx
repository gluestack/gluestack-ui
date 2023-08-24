import React from 'react';
import { Box, HStack, VStack, Text, Link } from '@gluestack/design-system';

export type CommunityItem = {
  name: string;
  icon: React.ReactElement;
  link: string;
  description: string;
};

export const Community = ({
  communities,
}: {
  communities: CommunityItem[];
}) => {
  return (
    <VStack
      sx={{
        '@base': {
          mb: '$10',
        },
        '@md': {
          mb: 100,
        },
      }}
    >
      <Box>
        <Text fontWeight="$bold" fontSize={24} fontFamily="Plus Jakarta Sans">
          Join our community
        </Text>
        <Text fontSize={16}>
          Be a part of this journey. Everyone is welcome!
        </Text>
      </Box>
      <Box
        flexWrap="wrap"
        pt={10}
        sx={{
          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        {communities.map((community, key) => {
          return (
            <Link
              sx={{
                '@base': {
                  minWidth: '$full',
                  mb: '$4',
                },
                '@md': {
                  mb: '$0',
                  ml: '$1.5',
                  mr: '$1.5',
                  mt: '$3',

                  minWidth: '40%',
                  maxWidth: '40%',
                },
                '@lg': {
                  minWidth: '30%',
                  maxWidth: '30%',
                  mr: '$3',
                  mt: '$3',
                  display: 'flex',
                  flex: 1,
                },
                'borderColor': '#D4D4D4',
                '_dark': {
                  borderColor: '$borderDark800',
                },
              }}
              flex={1}
              borderRadius="$xl"
              overflow="hidden"
              borderWidth="$1"
              href={community.link}
              key={key}
              isExternal
            >
              <VStack space="sm" p="$6" maxHeight={142}>
                <HStack
                  alignItems="center"
                  sx={{
                    color: '#000000',
                    _dark: {
                      color: '#FFFFFF',
                    },
                  }}
                >
                  {community.icon}
                  <Text
                    fontSize="$xl"
                    fontWeight="$medium"
                    lineHeight="$xl"
                    ml="$3"
                  >
                    {community.name}
                  </Text>
                </HStack>
                <Text
                  sx={{
                    color: '#525252',
                    _dark: {
                      color: '$textDark400',
                    },
                  }}
                  flexWrap="wrap"
                  lineHeight="$md"
                >
                  {community.description}
                </Text>
              </VStack>
            </Link>
          );
        })}
      </Box>
    </VStack>
  );
};

export default Community;

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
    <Box my={'$6'}>
      <VStack space="sm">
        <Text fontWeight="$bold" fontSize={24} fontFamily="Plus Jakarta Sans">
          Join our community
        </Text>
        <Text fontSize={16}>
          Be a part of this journey. Everyone is welcome!
        </Text>
      </VStack>
      <HStack
        my={'$6'}
        flexDirection="column"
        flexWrap="wrap"
        gap={20}
        sx={{
          '@lg': {
            flexDirection: 'row',
          },
        }}
      >
        {communities.map((community, key) => {
          return (
            <Link
              minWidth={330}
              sx={{
                borderColor: '#D4D4D4',
                _dark: {
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
              <VStack space="sm" p="$6">
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
      </HStack>
    </Box>
  );
};

export default Community;

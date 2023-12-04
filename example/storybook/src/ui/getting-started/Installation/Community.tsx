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
    <Box my="$6">
      <VStack space="sm">
        <Text fontWeight="$bold" fontSize="$2xl" fontFamily="Plus Jakarta Sans">
          Join our community
        </Text>
        <Text fontSize="$md">
          Be a part of this journey. Everyone is welcome!
        </Text>
      </VStack>
      <HStack
        my="$6"
        flexDirection="column"
        flexWrap="wrap"
        gap="$5"
        sx={{
          '@lg': {
            flexDirection: 'row',
          },
        }}
      >
        {communities.map((community, key) => {
          return (
            <Link
              minWidth={300}
              sx={{
                '@lg': {
                  maxWidth: 300,
                },
                '@sm': {
                  flex: 1,
                },
                'borderColor': '$trueGray300',
                '_dark': {
                  borderColor: '$borderDark800',
                },
              }}
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
                    color: '$black',
                    _dark: {
                      color: '$white',
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
                    color: '$trueGray600',
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

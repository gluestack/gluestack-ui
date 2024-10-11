import React from 'react';
import { Box, HStack, VStack, Text, Link } from '../../primitives';

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
          mb: '$20',
        },
        '@md': {
          mb: 200,
        },
      }}
    >
      <Box>
        <Text
          fontWeight="$bold"
          lineHeight="$4xl"
          color="$textDark50"
          textAlign="center"
          sx={{
            '@base': {
              fontSize: '$4xl',
            },
            '@md': {
              fontSize: '$5xl',
            },
          }}
        >
          Community
        </Text>
        <Text
          color="$textDark400"
          textAlign="center"
          mt="$3"
          fontSize="$xl"
          lineHeight="$xl"
        >
          Get involved in our community. Everyone is welcome!
        </Text>
      </Box>
      <Box
        flexWrap="wrap"
        pt={60}
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
                  mb: key === communities?.length - 1 ? 0 : '$4',
                },
                '@md': {
                  mb: 0,
                  mr: key === communities?.length - 1 ? 0 : '$1.5',
                  ml: key === 0 ? 0 : '$1.5',
                },
                ':focusVisible': {
                  _web: { outlineWidth: 0 },
                  borderColor: '$primary700',
                },
              }}
              flex={1}
              borderRadius="$xl"
              overflow="hidden"
              borderWidth="$1"
              borderColor="$borderDark700"
              href={community.link}
              key={key}
              isExternal
            >
              <VStack space="md" p="$6">
                <HStack alignItems="center">
                  {community.icon}
                  <Text
                    fontSize="$xl"
                    fontWeight="$medium"
                    lineHeight="$xl"
                    color="$textDark50"
                    ml="$3"
                  >
                    {community.name}
                  </Text>
                </HStack>
                <Text color="$textDark400" flexWrap="wrap" lineHeight="$md">
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

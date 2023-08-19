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
          //  textAlign="center"
          sx={{
            '@base': {
              fontSize: '$4xl',
            },
            '@md': {
              fontSize: '$5xl',
            },
          }}
        >
          Join our community
        </Text>
        <Text
          color="$textDark400"
          //textAlign="center"
          mt="$3"
          fontSize="$xl"
          lineHeight="$xl"
        >
          Be a part of this journey. Everyone is welcome!{' '}
        </Text>
      </Box>
      <Box
        flexWrap="wrap"
        pt={30}
        sx={{
          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        {communities.map((community, key) => {
          return (
            <Link
              bg="$yellow100"
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
              <VStack space="md" p="$6" maxHeight={142}>
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

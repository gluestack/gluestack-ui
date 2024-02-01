import React from 'react';
import {
  Card,
  Text,
  Box,
  VStack,
  Heading,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Image,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';

const ProfileCard = () => {
  return (
    <Card
      hardShadow={2}
      p="$6"
      borderRadius="$lg"
      maxWidth={360}
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
    >
      <Box
        gap="$4"
        flexDirection="column"
        sx={{
          '@xs': {
            flexDirection: 'row',
          },
        }}
      >
        <Avatar>
          <AvatarFallbackText fontFamily="$heading">JD</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1620403724159-40363e84a155?q=80&w=2646&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
        </Avatar>
        <VStack gap="$1">
          <Heading size="md" fontFamily="$heading">
            Jane Doe
          </Heading>
          <Text size="sm" fontFamily="$heading">
            janedoe@sample.com
          </Text>
        </VStack>
      </Box>
      <Box
        my="$4"
        sx={{
          'flexDirection': 'column',
          '@xs': {
            my: '$6',
            flexDirection: 'row',
          },
        }}
      >
        <VStack
          gap="$1"
          flex={1}
          alignItems="center"
          sx={{
            'borderBottomWidth': 1,
            'borderBottomColor': '$backgroundLight300',
            '_dark': {
              borderBottomColor: '$backgroundDark800',
            },
            'pb': '$2',
            '@xs': {
              pb: '$0',
              borderBottomWidth: 0,
              borderRightWidth: 1,
              borderColor: '$backgroundLight300',
              _dark: {
                borderRightColor: '$backgroundDark800',
              },
            },
          }}
        >
          <Heading size="xs" fontFamily="$heading">
            81
          </Heading>
          <Text size="xs">posts</Text>
        </VStack>

        <VStack
          gap="$1"
          flex={1}
          alignItems="center"
          sx={{
            'borderBottomWidth': 1,
            'borderBottomColor': '$backgroundLight300',
            '_dark': {
              borderBottomColor: '$backgroundDark800',
            },
            'py': '$2',
            '@xs': {
              py: '$0',
              borderBottomWidth: 0,
              borderRightWidth: 1,
              borderColor: '$backgroundLight300',
              _dark: {
                borderRightColor: '$backgroundDark800',
              },
            },
          }}
        >
          <Heading size="xs" fontFamily="$heading">
            5,281
          </Heading>
          <Text size="xs">followers</Text>
        </VStack>

        <VStack
          gap="$1"
          flex={1}
          alignItems="center"
          sx={{
            'pt': '$2',
            '@xs': {
              pt: '$0',
            },
          }}
        >
          <Heading size="xs" fontFamily="$heading">
            281
          </Heading>
          <Text size="xs">following</Text>
        </VStack>
      </Box>
      <Box
        gap="$2"
        mb="$4"
        sx={{
          'flexDirection': 'column',
          '@xs': {
            mb: '$6',
            gap: '$3',
            flexDirection: 'row',
          },
        }}
      >
        <Image
          borderRadius="$md"
          sx={{
            'width': '$full',
            'height': 130,
            '@xs': {
              width: 150,
              height: 154,
            },
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=2712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <Image
          borderRadius="$md"
          sx={{
            'width': '$full',
            'height': 130,
            '@xs': {
              width: 150,
              height: 154,
            },
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=2425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
      </Box>
      <Button py="$2" px="$4">
        <ButtonText>Follow</ButtonText>
      </Button>
    </Card>
  );
};

export default ProfileCard;

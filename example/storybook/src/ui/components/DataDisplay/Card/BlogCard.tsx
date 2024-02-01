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
} from '@gluestack-ui/themed';

const BlogCard = () => {
  return (
    <Card
      hardShadow={2}
      p="$5"
      borderRadius="$lg"
      maxWidth={360}
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
    >
      <Text
        fontSize="$sm"
        fontStyle="normal"
        fontFamily="$heading"
        fontWeight="$normal"
        lineHeight="$sm"
        mb="$2"
        sx={{
          color: '$textLight700',
          _dark: {
            color: '$textDark200',
          },
        }}
      >
        May 15, 2023
      </Text>
      <VStack gap="$4" mb="$6">
        <Heading size="md" fontFamily="$heading">
          The Power of Positive Thinking
        </Heading>
        <Text size="sm" fontFamily="$heading">
          Discover how the power of positive thinking can transform your life,
          boost your confidence, and help you overcome challenges. Explore
          practical tips and techniques to cultivate a positive mindset for
          greater happiness and success.
        </Text>
      </VStack>
      <Box
        gap="$3"
        flexDirection="column"
        sx={{
          '@xs': {
            flexDirection: 'row',
          },
        }}
      >
        <Avatar>
          <AvatarFallbackText fontFamily="$heading">RR</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
        </Avatar>
        <VStack gap="$1">
          <Heading size="sm" fontFamily="$heading">
            John Smith
          </Heading>
          <Text size="sm" fontFamily="$heading">
            Motivational Speaker
          </Text>
        </VStack>
      </Box>
    </Card>
  );
};

export default BlogCard;

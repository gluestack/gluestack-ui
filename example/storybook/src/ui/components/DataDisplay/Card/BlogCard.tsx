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
    <Card p="$5" borderRadius="$lg" maxWidth={360}>
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
      <VStack mb="$6">
        <Heading size="md" fontFamily="$heading" mb="$4">
          The Power of Positive Thinking
        </Heading>
        <Text size="sm" fontFamily="$heading">
          Discover how the power of positive thinking can transform your life,
          boost your confidence, and help you overcome challenges. Explore
          practical tips and techniques to cultivate a positive mindset for
          greater happiness and success.
        </Text>
      </VStack>
      <Box flexDirection="row">
        <Avatar mr="$3">
          <AvatarFallbackText fontFamily="$heading">RR</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
        </Avatar>
        <VStack>
          <Heading size="sm" fontFamily="$heading" mb="$1">
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

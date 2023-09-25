import React from 'react';
import {
  Center,
  ScrollView,
  VStack,
  Heading,
  config,
  Text,
} from '@gluestack-ui/themed';

const ScrollViewStory = () => {
  return (
    <>
      <ScrollView h="$80" w="$80">
        <Center mt="$3" mb="$4">
          <Heading fontSize="xl">Primary</Heading>
        </Center>
        <VStack flex={1}>
          {Object.keys(config.theme.tokens.colors).map((key) => {
            if (
              key.includes('primary') &&
              !(
                key.includes('600') ||
                key.includes('700') ||
                key.includes('800') ||
                key.includes('900') ||
                key.includes('950')
              )
            )
              return (
                // @ts-ignore
                <Center py="$4" bg={config.theme.tokens.colors[key]}>
                  <Text>{key}</Text>
                </Center>
              );
            return null;
          })}
        </VStack>
        <Center mt="$10" mb="$4">
          <Heading fontSize="$xl">Yellow</Heading>
        </Center>
        <VStack flex={1}>
          {Object.keys(config.theme.tokens.colors).map((key) => {
            if (
              key.includes('yellow') &&
              !(
                key.includes('600') ||
                key.includes('700') ||
                key.includes('800') ||
                key.includes('900') ||
                key.includes('950')
              )
            )
              return (
                // @ts-ignore
                <Center py="$4" bg={config.theme.tokens.colors[key]}>
                  <Text>{key}</Text>
                </Center>
              );

            return null;
          })}
        </VStack>
        <Center mt="$10" mb="$4">
          <Heading fontSize="$xl">Violet</Heading>
        </Center>
        <VStack flex={1}>
          {Object.keys(config.theme.tokens.colors).map((key) => {
            if (
              key.includes('violet') &&
              !(
                key.includes('600') ||
                key.includes('700') ||
                key.includes('800') ||
                key.includes('900') ||
                key.includes('950')
              )
            )
              return (
                // @ts-ignore
                <Center py="$4" bg={config.theme.tokens.colors[key]}>
                  <Text>{key}</Text>
                </Center>
              );
            return null;
          })}
        </VStack>
      </ScrollView>
    </>
  );
};

export default ScrollViewStory;
export { ScrollView } from '@gluestack-ui/themed';

import {
  ScrollView,
  Center,
  Heading,
  VStack,
  Text,
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import React from 'react';
import Wrapper from '../../components/Wrapper';

export default function ScrollViewStory() {
  return (
    <Center>
      <ScrollView h="$80" w="$80">
        <Center mt="$3" mb="$4">
          <Heading fontSize="xl">Primary</Heading>
        </Center>
        <VStack flex={1}>
          {Object.keys(config.tokens.colors).map((key: any) => {
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
                <Center py="$4" bg={config.tokens.colors[key]}>
                  <Text>{key}</Text>
                </Center>
              );
          })}
        </VStack>
        <Center mt="$10" mb="$4">
          <Heading fontSize="$xl">Yellow</Heading>
        </Center>
        <VStack flex="1">
          {Object.keys(config.tokens.colors).map((key) => {
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
                <Center py="$4" bg={config.tokens.colors[key]}>
                  <Text>{key}</Text>
                </Center>
              );
          })}
        </VStack>
        <Center mt="$10" mb="$4">
          <Heading fontSize="$xl">Violet</Heading>
        </Center>
        <VStack flex="1">
          {Object.keys(config.tokens.colors).map((key) => {
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
                <Center py="$4" bg={config.tokens.colors[key]}>
                  <Text>{key}</Text>
                </Center>
              );
          })}
        </VStack>
      </ScrollView>
    </Center>
  );
}

export {
  VStack,
  Center,
  Heading,
  GluestackUIProvider,
  ScrollView,
  Text,
} from '@gluestack-ui/themed';

export { config, Wrapper };

import { View, Center, Heading, Text } from '@gluestack-ui/themed';
import React from 'react';
import Wrapper from '../../components/Wrapper';

export default function ViewStory() {
  return (
    <Center>
      <View p="$4">
        <Heading>
          A component library for the{' '}
          <Heading color="$emerald400">React Ecosystem</Heading>
        </Heading>
        <Text pt="$3">
          gluestack-ui is a simple, modular and accessible component library
          that gives you building blocks to build you React applications.
        </Text>
      </View>
    </Center>
  );
}

export { View, Center, Heading, Text, Wrapper };

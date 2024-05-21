import React from 'react';
import { View } from '@/components/ui/view';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export default function ViewStory() {
  return (
    <Center>
      <View className="p-4">
        <Heading>
          A component library for the{' '}
          <Heading className="text-emerald-400">React Ecosystem</Heading>
        </Heading>
        <Text className="pt-3">
          gluestack-ui is a simple, modular and accessible component library
          that gives you building blocks to build you React applications.
        </Text>
      </View>
    </Center>
  );
}

export { View, Center, Heading, Text };

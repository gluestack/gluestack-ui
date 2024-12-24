import { SafeAreaView, Center, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import React from 'react';
import Wrapper from '../../Wrapper';

export default function SafeAreaViewStory() {
  return (
    <Center>
      <SafeAreaView flex={1}>
        <Text fontSize="$md">Page content</Text>
      </SafeAreaView>
    </Center>
  );
}

export {
  VStack,
  Center,
  Heading,
  GluestackUIProvider,
  SafeAreaView,
  Text,
} from '@gluestack-ui/themed';

export { config, Wrapper };

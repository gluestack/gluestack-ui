import React from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { ScreenScrollView } from '@/components/custom/screen-scroll-view';

export default function SocialShowcase() {
  return (
    <ScreenScrollView className="px-5" contentContainerStyle={{ paddingTop: 20 }}>
      <VStack space="xl" className="pb-10">
        <Heading size="2xl" className="text-typography-900">
          Social Feed
        </Heading>
        <Text className="text-typography-500">
          Timeline and interactions showcase coming soon...
        </Text>
      </VStack>
    </ScreenScrollView>
  );
}


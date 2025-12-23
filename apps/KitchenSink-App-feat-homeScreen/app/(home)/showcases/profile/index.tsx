import React from 'react';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { ScreenScrollView } from '@/components/custom/screen-scroll-view';

export default function ProfileShowcase() {
  return (
    <ScreenScrollView className="px-5" contentContainerStyle={{ paddingTop: 20 }}>
      <VStack space="xl" className="pb-10">
        <Heading size="2xl" className="text-typography-900">
          Profile
        </Heading>
        <Text className="text-typography-500">
          User profile and settings showcase coming soon...
        </Text>
      </VStack>
    </ScreenScrollView>
  );
}


import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Center } from '@/components/ui/center';
import { VStack } from '@/components/ui/vstack';
import React from 'react';
import { ScrollView } from 'react-native';

export default function Home() {
  return (
    <ScrollView className='flex-1 bg-background pt-safe'>
      <Center className="flex-1 gap-5">
        <VStack className="items-center gap-2">
          <Text className="text-2xl font-bold text-foreground">
            Gluestack UI
          </Text>
          <Text className="text-muted-foreground">powered by UniWind + Tailwind CSS v4</Text>
        </VStack>
        <Button size="default">
          <ButtonText>Get Started</ButtonText>
        </Button>
      </Center>
    </ScrollView>
  );
}
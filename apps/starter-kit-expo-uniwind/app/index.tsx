import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import { VStack } from '@/components/ui/vstack';

export default function Home() {
  return (
    <Box className="flex-1 bg-background">
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
    </Box>
  );
}
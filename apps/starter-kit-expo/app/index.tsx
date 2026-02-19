import React from 'react';
import Gradient from '@/assets/icons/Gradient';
import Logo from '@/assets/icons/Logo';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

import { Button, ButtonText } from '@/components/ui/button';
import { useRouter } from 'expo-router';
import { VStack } from '@/components/ui/vstack';
import { Center } from '@/components/ui/center';

export default function Home() {
  const router = useRouter();
  return (
    <Box className="flex-1 bg-background">
      <Center className="flex-1 gap-5">
        <Logo />
        <Text className="font-semibold">
          Get started by editing{' '}
          <Text className="text-primary/70">app/index.tsx</Text>
        </Text>
        <Button
          size="default"
          className="bg-primary px-6 py-2 rounded-full"
          onPress={() => {
            router.push('/tabs/tab1');
          }}
        >
          <ButtonText>Explore Tab Navigation</ButtonText>
        </Button>
      </Center>
    </Box>
  );
}

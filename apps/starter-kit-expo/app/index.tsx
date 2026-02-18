import Logo from '@/assets/icons/Logo';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import React from 'react';

import { BottomSheet, BottomSheetBackdrop, BottomSheetContent, BottomSheetDragIndicator, BottomSheetItem, BottomSheetItemText, BottomSheetPortal, BottomSheetTrigger } from '@/components/ui/bottomsheet';
import { Button, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Home() {
  const router = useRouter();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          <BottomSheet>
            <BottomSheetTrigger>
              <Text>Open BottomSheet</Text>
            </BottomSheetTrigger>
            <BottomSheetPortal
              snapPoints={['25%', '50%']}
              backdropComponent={BottomSheetBackdrop}
              handleComponent={BottomSheetDragIndicator}
            >
              <BottomSheetContent>
                <BottomSheetItem>
                  <BottomSheetItemText>Item 1</BottomSheetItemText>
                </BottomSheetItem>
                <BottomSheetItem>
                  <BottomSheetItemText>Item 2</BottomSheetItemText>
                </BottomSheetItem>
                <BottomSheetItem>
                  <BottomSheetItemText>Item 3</BottomSheetItemText>
                </BottomSheetItem>
              </BottomSheetContent>
            </BottomSheetPortal>
          </BottomSheet>
        </Center>
      </Box>
    </GestureHandlerRootView>
  );
}

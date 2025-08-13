import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { BottomSheet } from '@/components/ui/bottomsheet';
import { BottomSheetBackdrop } from '@/components/ui/bottomsheet';
import { BottomSheetHandle } from '@/components/ui/bottomsheet';
import { BottomSheetView } from '@/components/ui/bottomsheet';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';
import { useRef } from 'react';
import { useCallback } from 'react';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  const bottomSheetRef = useRef<any>(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleDismiss = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  const renderHandle = useCallback(
    (props: any) => (
      <BottomSheetHandle
        className="h-20 bg-red-800 rounded-t-xl items-center justify-center"
        {...props}
      >
        <Box className="h-2 w-8 rounded-xl bg-blue-400" />
      </BottomSheetHandle>
    ),
    []
  );

  return (
    <Box className="bg-background-200 flex-1">
      <Box className="flex-1 justify-center items-center p-6">
        <Text className="text-typography-900 text-xl font-bold mb-4">
          Bottom Sheet Demo
        </Text>
        <Text className="text-typography-700 text-center mb-6">
          Swipe up to open the bottom sheet or use the button below
        </Text>
        
        <Box className="space-y-3 w-full max-w-sm">
          <Button
            onPress={handlePresentModalPress}
            className="bg-primary-600 p-4 rounded-lg active:bg-primary-700"
          >
            <ButtonText className="text-typography-0 text-center font-semibold">
              Open Bottom Sheet
            </ButtonText>
          </Button>
          
          <Button
            onPress={handleDismiss}
            className="bg-background-0 p-4 rounded-lg border border-outline-200 active:bg-background-50"
          >
            <ButtonText className="text-typography-900 text-center font-semibold">
              Close Bottom Sheet
            </ButtonText>
          </Button>
        </Box>
      </Box>
      
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        handleComponent={renderHandle}
        snapPoints={['25%', '50%', '90%']}
        enableDynamicSizing={false}
        animationConfigs={{ duration: 300 }}
      >
        <BottomSheetView className="flex-1 p-6 bg-background-0 space-y-6 shadow-hard-4">
          <Box className="items-center mb-6">
            <Text className="text-typography-900 text-xl font-bold">
              Awesome 🎉
            </Text>
            <Text className="text-typography-700 text-sm text-center mt-2">
              This is a styled bottom sheet using Gluestack UI patterns
            </Text>
          </Box>
          
          <Box className="space-y-4">
            <Box className="bg-background-0 p-4 rounded-lg border border-outline-100">
              <Text className="text-typography-800 font-semibold text-lg">
                Feature 1
              </Text>
              <Text className="text-typography-700 text-sm mt-2">
                This is a styled content area with proper spacing and typography
              </Text>
            </Box>
            
            <Box className="bg-background-0 p-4 rounded-lg border border-outline-100">
              <Text className="text-typography-800 font-semibold text-lg">
                Feature 2
              </Text>
              <Text className="text-typography-700 text-sm mt-2">
                Another styled content area with consistent design patterns
              </Text>
            </Box>
            
            <Box className="bg-background-0 p-4 rounded-lg border border-outline-100">
              <Text className="text-typography-800 font-semibold text-lg">
                Feature 3
              </Text>
              <Text className="text-typography-700 text-sm mt-2">
                More styled content with proper color tokens and spacing
              </Text>
            </Box>
          </Box>
          
          <Box className="mt-6 space-y-3">
            <Button
              onPress={handleDismiss}
              className="bg-primary-600 p-4 rounded-lg active:bg-primary-700"
            >
              <ButtonText className="text-typography-0 text-center font-semibold">
                Close Sheet
              </ButtonText>
            </Button>
          </Box>
        </BottomSheetView>
      </BottomSheet>
    </Box>
  );
}`}
      argTypes={{}}
      reactLive={{ BottomSheet, BottomSheetBackdrop, BottomSheetHandle, BottomSheetView, Box, Text, Button, ButtonText, useRef, useCallback }}
    />
  );
}
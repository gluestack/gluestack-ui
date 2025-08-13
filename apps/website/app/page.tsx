"use client";
import React, { useCallback, useRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import {
  BottomSheet,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetHandle
} from '@/components/ui/bottomsheet';
import { Box } from '@/components/ui/box';
import Link from 'next/link';

const App = () => {
  // ref
  const bottomSheetRef = useRef<any>(null);

  // callbacks
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
        className="h-20 bg-red-200 rounded-t-xl items-center justify-center"
        {...props}
      >
        <View className="h-2 w-8 rounded-xl bg-blue-400" />
      </BottomSheetHandle>
    ),
    []
  );

  // renders
  return (
    <Box className="bg-background-200 w-[400px] h-[400px]">
      <Link href="/test">
        <h1 className="text-typography-900 text-xl font-bold mb-4">Test</h1>
      </Link>
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-typography-900 text-xl font-bold mb-4">
          Bottom Sheet Demo
        </Text>
        <Text className="text-typography-700 text-center mb-6">
          Swipe up to open the bottom sheet or use the button below
        </Text>
        
        <View className="space-y-3 w-full max-w-sm">
          <Pressable
            onPress={handlePresentModalPress}
            className="bg-primary-600 p-4 rounded-lg active:bg-primary-700"
          >
            <Text className="text-typography-0 text-center font-semibold">
              Open Bottom Sheet
            </Text>
          </Pressable>
          
          <Pressable
            onPress={handleDismiss}
            className="bg-background-0 p-4 rounded-lg border border-outline-200 active:bg-background-50"
          >
            <Text className="text-typography-900 text-center font-semibold">
              Close Bottom Sheet
            </Text>
          </Pressable>
        </View>
      </View>
      
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
          <View className="items-center mb-6">
            <Text className="text-typography-900 text-xl font-bold">
              Awesome 🎉
            </Text>
            <Text className="text-typography-700 text-sm text-center mt-2">
              This is a styled bottom sheet using Gluestack UI patterns
            </Text>
          </View>
          
          <View className="space-y-4">
            <View className="bg-background-0 p-4 rounded-lg border border-outline-100">
              <Text className="text-typography-800 font-semibold text-lg">
                Feature 1
              </Text>
              <Text className="text-typography-700 text-sm mt-2">
                This is a styled content area with proper spacing and typography
              </Text>
            </View>
            
            <View className="bg-background-0 p-4 rounded-lg border border-outline-100">
              <Text className="text-typography-800 font-semibold text-lg">
                Feature 2
              </Text>
              <Text className="text-typography-700 text-sm mt-2">
                Another styled content area with consistent design patterns
              </Text>
            </View>
            
            <View className="bg-background-0 p-4 rounded-lg border border-outline-100">
              <Text className="text-typography-800 font-semibold text-lg">
                Feature 3
              </Text>
              <Text className="text-typography-700 text-sm mt-2">
                More styled content with proper color tokens and spacing
              </Text>
            </View>
          </View>
          
          <View className="mt-6 space-y-3">
            <Pressable
              onPress={handleDismiss}
              className="bg-primary-600 p-4 rounded-lg active:bg-primary-700"
            >
              <Text className="text-typography-0 text-center font-semibold">
                Close Sheet
              </Text>
            </Pressable>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </Box>
  );
};

export default App;
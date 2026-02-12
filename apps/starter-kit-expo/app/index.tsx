import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { Image } from '@/components/ui/image';
import {
  ImageViewer,
  ImageViewerTrigger,
  ImageViewerContent,
  ImageViewerCloseButton,
  ImageViewerNavigation,
  ImageViewerCounter,
} from '@/components/ui/image-viewer';

export default function App() {
  // Sample images for the ImageViewer demo
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop&q=60',
      alt: 'Mountain landscape',
    },
    {
      url: 'https://images.stockcake.com/public/8/8/9/889c1161-ac90-403a-b63f-23d708e67520_large/sunset-mountain-landscape-stockcake.jpg',
      alt: 'Ocean waves',
    },
    {
      url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&auto=format&fit=crop&q=60',
      alt: 'Desert sunset',
    },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView className="flex-1 bg-background">
        <View className="p-6 gap-8">
          <VStack space="md">
            <Heading size="2xl">gluestack-ui Demo</Heading>
            <Text className="text-typography-500">
              Interactive Image Viewer component demo
            </Text>
          </VStack>

          {/* Image Viewer Demo */}
          <VStack space="md">
            <Heading size="lg">Image Viewer</Heading>
            <Text className="text-typography-500 text-sm">
              Tap the image to open viewer. Features: pinch to zoom, double-tap
              zoom, swipe to navigate, slide to dismiss.
            </Text>

            <ImageViewer images={images}>
              <ImageViewerTrigger>
                <Image
                  source={{ uri: images[0].url }}
                  alt="Gallery thumbnail"
                  className="w-full h-64 rounded-lg"
                  resizeMode="cover"
                />
              </ImageViewerTrigger>
              <ImageViewerContent>
                <ImageViewerCloseButton />
                <ImageViewerNavigation />
                <ImageViewerCounter />
              </ImageViewerContent>
            </ImageViewer>
          </VStack>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

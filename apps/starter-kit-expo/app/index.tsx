import React, { useState } from 'react';
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
  // Track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Sample images for the ImageViewer demo
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop&q=60',
      alt: 'Mountain landscape',
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROHqfjDC6tC2haATRs3-EDemIzD3cMraKzQtaawteqjZqBzTZB',
      alt: 'Ocean waves',
    },
    {
      url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&auto=format&fit=crop&q=60',
      alt: 'Desert sunset',
    },
  ];

  // Handle index change from viewer navigation
  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle viewer open/close
  const handleOpenChange = (open: boolean) => {
    setIsViewerOpen(open);
  };

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

            <ImageViewer
              images={images}
              isOpen={isViewerOpen}
              onOpenChange={handleOpenChange}
              onIndexChange={handleIndexChange}
              initialIndex={currentIndex}
            >
              <ImageViewerTrigger>
                <Image
                  source={{ uri: images[currentIndex].url }}
                  alt={images[currentIndex].alt}
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

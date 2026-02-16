import { ImageViewer, ImageViewerTrigger, ImageViewerContent, ImageViewerCloseButton, ImageViewerNavigation, ImageViewerCounter } from '@/components/ui/image-viewer'
import { Image } from '@/components/ui/image'
import { Text } from '@/components/ui/text'
import { View } from '@/components/ui/view'
import { VStack } from '@/components/ui/vstack'
import { HStack } from '@/components/ui/hstack'
import { Button, ButtonText } from '@/components/ui/button'
import { Pressable } from '@/components/ui/pressable'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
const images = [
    {
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop&q=60',
      alt: 'Mountain landscape'
    },
    {
      url: 'https://images.unsplash.com/photo-1682687221038-404670e01d4c?w=800&auto=format&fit=crop&q=60',
      alt: 'Ocean waves'
    },
    {
      url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&auto=format&fit=crop&q=60',
      alt: 'Desert sunset'
    }
  ];

  const thumbnailSource = { uri: images[0].url };

  return (
    <View className="p-4">
      <Text className="text-lg font-medium mb-4">Tap an image to view gallery</Text>
      <ImageViewer images={images}>
        <ImageViewerTrigger>
          <Image
            source={thumbnailSource}
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
    </View>
  )
};

const ExampleControlledMode = () => {
const [isOpen, setIsOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop&q=60',
      alt: 'Mountain landscape'
    },
    {
      url: 'https://images.unsplash.com/photo-1682687221038-404670e01d4c?w=800&auto=format&fit=crop&q=60',
      alt: 'Ocean waves'
    },
    {
      url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&auto=format&fit=crop&q=60',
      alt: 'Desert sunset'
    }
  ];

  return (
    <VStack space="md" className="p-4">
      <Text className="text-lg font-medium">Controlled Mode</Text>
      <Text className="text-muted-foreground text-sm mb-4">
        Current index: {currentIndex + 1} / {images.length} | Viewer is {isOpen ? 'open' : 'closed'}
      </Text>
      
      <Button onPress={() => setIsOpen(true)} variant="outline">
        <ButtonText>Open Image Viewer</ButtonText>
      </Button>
      
      <HStack space="sm" className="flex-wrap">
        {images.map((image, index) => (
          <Pressable
            key={index}
            onPress={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
          >
            <Image
              source={{ uri: image.url }}
              alt={image.alt}
              className="w-20 h-20 rounded-md"
              resizeMode="cover"
            />
          </Pressable>
        ))}
      </HStack>

      <ImageViewer 
        images={images}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onIndexChange={setCurrentIndex}
        initialIndex={currentIndex}
      >
        <ImageViewerContent>
          <ImageViewerCloseButton />
          <ImageViewerNavigation />
          <ImageViewerCounter />
        </ImageViewerContent>
      </ImageViewer>
    </VStack>
  )
};

const ExampleSingleImage = () => {
const images = [
    {
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop&q=60',
      alt: 'Mountain landscape'
    }
  ];

  const thumbnailSource = { uri: images[0].url };

  return (
    <VStack space="md" className="p-4">
      <Text className="text-lg font-medium">Single Image</Text>
      <Text className="text-muted-foreground text-sm mb-4">
        Tap the image to view it in full screen with zoom support
      </Text>
      
      <ImageViewer images={images}>
        <ImageViewerTrigger>
          <Image
            source={thumbnailSource}
            alt="Gallery thumbnail"
            className="w-full h-64 rounded-lg"
            resizeMode="cover"
          />
        </ImageViewerTrigger>
        <ImageViewerContent>
          <ImageViewerCloseButton />
          <ImageViewerCounter />
        </ImageViewerContent>
      </ImageViewer>
    </VStack>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "controlled-mode",
    label: "Controlled Mode",
    content: <ExampleControlledMode />,
  },
  {
    value: "single-image",
    label: "Single Image",
    content: <ExampleSingleImage />,
  }
];

export default function ImageViewerScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
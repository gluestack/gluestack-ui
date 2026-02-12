import { ImageViewer, ImageViewerTrigger, ImageViewerContent, ImageViewerCloseButton, ImageViewerNavigation, ImageViewerCounter } from '@/components/ui/image-viewer'
import { Image } from '@/components/ui/image'
import { Text } from '@/components/ui/text'
import { View } from '@/components/ui/view'


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

  return (
    <View className="p-4">
      <Text className="text-lg font-medium mb-4">Tap an image to view gallery</Text>
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
    </View>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  }
];

export default function ImageViewerScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}
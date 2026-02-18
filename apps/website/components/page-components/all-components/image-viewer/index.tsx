import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { ImageViewer } from '@/components/ui/image-viewer';
import { ImageViewerTrigger } from '@/components/ui/image-viewer';
import { ImageViewerContent } from '@/components/ui/image-viewer';
import { ImageViewerCloseButton } from '@/components/ui/image-viewer';
import { ImageViewerNavigation } from '@/components/ui/image-viewer';
import { ImageViewerCounter } from '@/components/ui/image-viewer';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
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
  );
}`}
      argTypes={{}}
      reactLive={{ ImageViewer, ImageViewerTrigger, ImageViewerContent, ImageViewerCloseButton, ImageViewerNavigation, ImageViewerCounter, Image, Text, View }}
    />
  );
}
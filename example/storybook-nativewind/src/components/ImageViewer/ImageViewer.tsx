'use client';
import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import {
  ImageViewer,
  ImageViewerBackdrop,
  ImageViewerContent,
  ImageViewerImage,
} from '@/components/ui/image-viewer';

const ImageViewerBasic = () => {
  const Images = [
    { id: 1, url: 'https://picsum.photos/200/300' },
    { id: 2, url: 'https://picsum.photos/200/300' },
    { id: 3, url: 'https://picsum.photos/200/300' },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Pressable onPress={() => setVisible(true)}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          className="w-[200px] h-[200px]"
          resizeMode="contain"
        />
      </Pressable>

      <ImageViewer isOpen={visible} onClose={() => setVisible(false)}>
        <ImageViewerBackdrop>
          <ImageViewerContent
            images={Images}
            renderImages={(item: any) => (
              <ImageViewerImage key={item.id} source={{ uri: item.url }} />
            )}
          />
        </ImageViewerBackdrop>
      </ImageViewer>
    </>
  );
};

ImageViewerBasic.description = 'This is a basic ImageViewer component example.';

export default ImageViewerBasic;

export { ImageViewer };

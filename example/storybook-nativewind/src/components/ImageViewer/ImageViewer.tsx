'use client';
import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import {
  ImageViewer,
  ImageViewerBackdrop,
  ImageViewerCloseButton,
  ImageViewerContent,
  ImageViewerImage,
} from '@/components/ui/image-viewer';
import { Icon } from '@/components/ui/icon';
import { CloseIcon } from '@/components/ui/icon';

const ImageViewerBasic = ({ ...props }: any) => {
  const Images = [{ id: 1, url: 'https://picsum.photos/1000/1000' }];
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Pressable onPress={() => setVisible(true)}>
        <Image
          source={{ uri: Images[0].url }}
          className="w-[200px] h-[200px]"
          resizeMode="contain"
        />
      </Pressable>

      <ImageViewer
        isOpen={visible}
        onClose={() => setVisible(false)}
        {...props}
      >
        <ImageViewerBackdrop>
          <ImageViewerContent
            //@ts-ignore
            images={Images}
            renderImages={(item: any) => (
              <ImageViewerImage key={item.id} source={{ uri: item.url }} />
            )}
          >
            <ImageViewerCloseButton>
              <Icon as={CloseIcon} size="md" />
            </ImageViewerCloseButton>
          </ImageViewerContent>
        </ImageViewerBackdrop>
      </ImageViewer>
    </>
  );
};

ImageViewerBasic.description = 'This is a basic ImageViewer component example.';

export default ImageViewerBasic;

export { ImageViewer };

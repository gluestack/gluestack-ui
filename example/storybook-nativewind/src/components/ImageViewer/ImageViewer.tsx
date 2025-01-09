import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import {
  ImageViewer,
  ImageViewerBackdrop,
  ImageViewerCloseButton,
  ImageViewerContent,
  ImageViewerImage,
} from '@/components/ui/image-viewer';
import { Icon, CloseIcon } from '@/components/ui/icon';

const ImageViewerBasic = ({ ...props }: any) => {
  const Images = [
    { id: 1, url: 'https://picsum.photos/1000/1000', title: 'Image 1' },
    { id: 2, url: 'https://picsum.photos/1000/1000', title: 'Image 2' },
    { id: 3, url: 'https://picsum.photos/1000/1000', title: 'Image 3' },
  ];
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
            images={Images}
            renderImages={({ item, index }) => {
              return (
                <ImageViewerImage
                  source={{ uri: item.url }}
                />
              );
            }}
            keyExtractor={(item, index) => item.id + '-' + index}
          >
            <ImageViewerCloseButton>
              <Icon as={CloseIcon} />
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

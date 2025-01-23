import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
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
    {
      id: 1,
      url: 'https://img.freepik.com/free-photo/young-boy-learning-how-ride-horse_23-2150460636.jpg',
      title: 'Image 1',
    },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <>
      <StatusBar hidden={visible} />
      <Pressable onPress={() => setVisible(true)}>
        <Image
          source={{ uri: Images[0].url }}
          className="w-[200px] h-[200px]"
          resizeMode="cover"
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
            renderImages={({ item, ...triggerProps }) => {
              return (
                <ImageViewerImage
                  source={{ uri: item.url }}
                  {...triggerProps}
                />
              );
            }}
            keyExtractor={(item, index) => item.id + '-' + index}
          >
            <ImageViewerCloseButton>
              <Icon as={CloseIcon} className="text-secondary-500" />
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

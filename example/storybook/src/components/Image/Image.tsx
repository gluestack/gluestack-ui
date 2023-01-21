import { Root, FallbackText } from './styled-component';
import { createImage } from '@universa11y/image';
import React from 'react';

export const ImageTemp = createImage({ Root, FallbackText });

export const Image = () => {
  return (
    <>
      <ImageTemp
        //@ts-ignore
        w={100}
        h={100}
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
        fallbackSource={{
          uri: 'https://www.w3schools.com/css/img_lights.jpg',
        }}
      />
    </>
  );
};

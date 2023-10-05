import React from 'react';
import { Image } from '@gluestack-ui/themed';

const ImageDemo = () => {
  return (
    <Image
      size="xl"
      source={{
        uri: 'https://plus.unsplash.com/premium_photo-1663853293870-7f3315a1f06e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
      }}
    />
  );
};

export default ImageDemo;

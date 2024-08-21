import { cssInterop } from 'nativewind';
import React from 'react';
import { Image } from 'react-native';
cssInterop(Image, { className: 'style' });
export default function NextImageAlt({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
  props?: any;
}) {
  return (
    <Image
      source={{
        uri: src,
      }}
      alt={alt}
      resizeMode="contain"
      className={className}
      style={{
        width: '100%',
        height: 'auto',
        aspectRatio: 1,
      }}
    />
  );
}

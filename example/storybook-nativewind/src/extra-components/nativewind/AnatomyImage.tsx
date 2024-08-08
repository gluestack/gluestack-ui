import React from 'react';
import { Image } from '../../core-components/nativewind';

const AnatomyImage = ({
  mobileUrl,
  webUrl,
}: {
  mobileUrl: string;
  webUrl: string;
}) => {
  return (
    <>
      <Image
        source={{ uri: mobileUrl }}
        alt="anatomy-image"
        className="md:hidden aspect-[513/375]"
        size="full"
      />

      <Image
        source={{ uri: webUrl }}
        alt="anatomy-image"
        className="hidden md:flex aspect-[736/259]"
        size="full"
      />
    </>
  );
};
export default AnatomyImage;

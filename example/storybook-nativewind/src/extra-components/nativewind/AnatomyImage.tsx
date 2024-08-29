import React from 'react';
import { Center } from '../../core-components/nativewind';
import Image from 'next/image';

const AnatomyImage = ({
  mobileUrl,
  webUrl,
  classNameStyle,
}: {
  mobileUrl: string;
  webUrl: string;
  classNameStyle: string;
}) => {
  return (
    <Center className={`w-full ${classNameStyle} mb-6`}>
      <Image src={mobileUrl} alt="anatomy-image" fill className="md:hidden" />

      <Image src={webUrl} alt="anatomy-image" fill className="hidden md:flex" />
    </Center>
  );
};
export default AnatomyImage;

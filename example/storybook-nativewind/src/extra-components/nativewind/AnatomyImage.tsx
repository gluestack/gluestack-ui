import React from 'react';
import { Center } from '../../core-components/nativewind';
import Image from 'next/image';

const AnatomyImage = ({
  mobileUrl,
  webUrl,
}: {
  mobileUrl: string;
  webUrl: string;
}) => {
  return (
    <Center className="w-full h-[400px] max-h-[300px] min-[426px]:my-4 sm:max-h-[375px] md:max-h-[259px] relative">
      <Image
        src={mobileUrl}
        alt="anatomy-image"
        sizes="100vw"
        fill
        className="md:hidden"
      />

      <Image
        src={webUrl}
        alt="anatomy-image"
        sizes="100vw"
        fill
        className="hidden md:flex"
      />
    </Center>
  );
};
export default AnatomyImage;

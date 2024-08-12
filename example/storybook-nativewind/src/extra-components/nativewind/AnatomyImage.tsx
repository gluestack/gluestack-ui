import React from 'react';
import { Image } from '../../core-components/nativewind';

const AnatomyImage = ({
  mobileUrl,
  webUrl,
  web_className,
  mobile_className,
}: {
  mobileUrl: string;
  webUrl: string;
  web_className: string;
  mobile_className: string;
}) => {
  return (
    <>
      <Image
        source={{ uri: mobileUrl }}
        alt="anatomy-image"
        className={`md:hidden w-full aspect-[513/375] mb-5 ${mobile_className}`}
        //@ts-ignore
        size="none"
      />

      <Image
        source={{ uri: webUrl }}
        alt="anatomy-image"
        className={`hidden md:flex w-full aspect-[736/259] mb-6 ${web_className}`}
        //@ts-ignore
        size="none"
      />
    </>
  );
};
export default AnatomyImage;

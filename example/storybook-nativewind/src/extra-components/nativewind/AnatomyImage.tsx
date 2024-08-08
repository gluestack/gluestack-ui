// import React from 'react';
// import { Image } from '../../core-components/nativewind';

// const AnatomyImage = ({
//   mobileUrl,
//   webUrl,
// }: {
//   mobileUrl: string;
//   webUrl: string;
// }) => {
//   return (
//     <>
//       <Image
//         source={{ uri: mobileUrl }}
//         alt="anatomy-image"
//         className="md:hidden aspect-[513/375]"
//         size="full"
//       />

//       <Image
//         source={{ uri: webUrl }}
//         alt="anatomy-image"
//         className="hidden md:flex aspect-[736/259]"
//         size="full"
//       />
//     </>
//   );
// };
// export default AnatomyImage;

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
    <Center className={`w-full aspect-[513/375] md:aspect-[736/259] mb-6`}>
      <Image src={mobileUrl} alt="anatomy-image" fill className="md:hidden" />

      <Image src={webUrl} alt="anatomy-image" fill className="hidden md:flex" />
    </Center>
  );
};
export default AnatomyImage;

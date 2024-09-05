// import { Image } from '@/components/ui/image';
import { VStack } from '@gluestack-ui/themed';
import React from 'react';
import { View } from 'react-native';

// const ImageSizes = ({
//   uri = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
//   fallbackSource = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
//   ...props
// }: any) => {
//   return (
//     <VStack space="md" alignItems="center">
//       {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size, index) => (
//         <Image
//           source={{
//             uri: uri,
//           }}
//           size={size}
//           borderRadius={'$full'}
//           fallbackSource={{
//             uri: fallbackSource,
//           }}
//           key={index}
//           {...props}
//         />
//       ))}
//     </VStack>
//   );
// };

import { Image } from '@/components/ui/image';
// import Image from '@unitools/image';
// import { Image } from 'expo-image';
// import Image from 'next/Image';
// import { Image } from 'react-native';

export default function Home() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        // source={require('../../../assets/icon.png')}
        // source={require('../../../public/images/architecture.png')}
        alt=""
        // src={
        //   'https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        // }
        // eslint-disable-next-line react-native/no-inline-styles
        // style={{ height: 100, width: 100 }}
        // height={100}
        // width={100}
      />
    </View>
  );
}

// export default ImageSizes;

export { Image, VStack };

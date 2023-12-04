// import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
// import { Image, HStack } from '@gluestack/ui';
// import React, { useEffect, useRef } from 'react';

// type MyCustomImageStory = ComponentStory<typeof Image>;

// const Example: MyCustomImageStory = ({ uri, fallbackSource, ...props }) => {
//   const myRef = useRef(null);
//   useEffect(() => {
//     if (myRef.current && myRef.current.setNativeProps) {
//       const styleObj = {
//         borderWidth: 4,
//         borderRadius: 4,
//         borderColor: '#22D3EE',
//       };
//       myRef.current.setNativeProps({
//         style: styleObj,
//       });
//     }
//   }, [myRef]);
//   return (
//     <Image
//       ref={myRef}
//       source={{
//         uri: 'https://wallpaperaccess.com/full/317501.jpg',
//       }}
//       alt="Alternate Text"
//       size="xl"
//     />
//   );
// };

// export const WithRef = Example.bind({});

// WithRef.parameters = {
//   controls: {
//     exclude: /.*/g,
//   },
// };

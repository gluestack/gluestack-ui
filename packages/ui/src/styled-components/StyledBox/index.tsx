import { View } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        //@ts-ignore
        // outlineWidth: '10px',
        // outlineColor: '$yellow500',
        // outlineStyle: 'dashed',
      },
      // queries: [
      //   {
      //     condition: '$sm',
      //     value: {
      //       style: {
      //         bg: '$green500',
      //       },
      //     },
      //   },
      //   {
      //     condition: '$md',
      //     value: {
      //       style: {
      //         bg: '$green500',
      //       },
      //     },
      //   },
      // ],
    },
  },
  {
    descendantStyle: ['_text'],
  }
);

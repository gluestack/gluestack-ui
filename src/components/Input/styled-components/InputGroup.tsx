import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export const AccessibleInputGroup = styled(
  View,
  {
    flexDirection: 'row',
  },
  {
    componentName: 'InputGroup',
    descendantStyle: [
      '_input',
      '_icon',
      '_inputBox',
      '_inputleftaddon',
      '_inputrightaddon',
    ],
  } as const
);

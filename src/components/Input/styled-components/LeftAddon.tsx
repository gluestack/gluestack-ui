import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    padding: '0.5rem',
    borderRightWidth: 0,
    // @ts-ignore
    borderWidth: '$1',
    borderColor: '$muted.300',
    // @ts-ignore
    borderRadius: '$sm',
    alignItems: 'center',
    justifyContent: 'center',
    _dark: {
      borderColor: '$muted.700',
      backgroundColor: '$muted.800',
    },
  },
  {
    componentName: 'InputLeftAddon',
    descendantStyle: ['_text'],
    ancestorStyle: ['_inputleftaddon'],
  } as const
);

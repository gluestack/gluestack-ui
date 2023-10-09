import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export const AccessibleInputLeftAddon = styled(
  View,
  {
    p: '0.5rem',
    borderRightWidth: 0,
    borderWidth: '$1',
    borderColor: '$muted.300',
    borderRadius: '$sm',
    alignItems: 'center',
    justifyContent: 'center',
    _dark: {
      borderColor: '$muted.700',
      bg: '$muted.800',
    },
  },
  {
    componentName: 'InputLeftAddon',
    descendantStyle: ['_text'],
    ancestorStyle: ['_inputleftaddon'],
  } as const
);

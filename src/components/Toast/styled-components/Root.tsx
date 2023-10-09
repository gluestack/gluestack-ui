import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    p: '$2',
    rounded: '$sm',
    m: '$3',
    bg: `$muted.700`,
    _dark: {
      bg: `$muted.600`,
    },

    _web: {
      props: {
        pointerEvents: 'auto',
      },
    },
    defaultProps: {
      shadow: '6',
    },
  },
  {
    componentName: 'Toast',
    descendantStyle: ['_icon', '_title', '_description'],
  } as const
);

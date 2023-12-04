import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    padding: '$2',
    // @ts-ignore
    rounded: '$sm',
    m: '$3',
    backgroundColor: `$muted.700`,
    _dark: {
      backgroundColor: `$muted.600`,
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

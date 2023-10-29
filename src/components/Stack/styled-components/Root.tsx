import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    variants: {
      space: {
        'gutter': { gap: '$0' },
        '2xs': { gap: '$1' },
        'xs': { gap: '$2' },
        'sm': { gap: '$3' },
        'md': { gap: '$4' },
        'lg': { gap: '$6' },
        'xl': { gap: '$7' },
        '2xl': { gap: '$8' },
      },
    },
  },
  {
    componentName: 'Stack',
    descendantStyle: ['_text'],
  } as const
);

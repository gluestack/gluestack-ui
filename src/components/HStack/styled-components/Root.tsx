import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    flexDirection: 'row',
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
      reversed: {
        true: {
          flexDirection: 'row-reverse',
        },
      },
    },
  },
  {
    componentName: 'HStack',
  } as const
);

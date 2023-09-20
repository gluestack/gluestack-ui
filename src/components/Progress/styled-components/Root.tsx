import { styled } from '@gluestack-style/react';
import { View } from 'react-native';
import { colorScheme } from '../../../utils';
import { colorSchemeResolveFn } from '../colorScheme-resolver/colorSchemeResolve';
import { colorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

const colorSchemes = Object.fromEntries(
  colorScheme.map((color) => [color, {}])
);

export default styled(
  View,
  {
    bg: '$muted.200',
    _dark: {
      bg: '$muted.700',
    },
    borderRadius: '$full',
    w: '100%',
    variants: {
      colorScheme: colorSchemes,
      size: {
        'xs': {
          h: '$1',
        },
        'sm': {
          h: '$2',
        },
        'md': {
          h: '$3',
        },
        'lg': {
          h: '$4',
        },
        'xl': {
          h: '$5',
        },
        '2xl': {
          h: '$6',
        },
      },
    },

    defaultProps: {
      size: 'md',
      colorScheme: 'primary',
    },
  },
  {
    descendantStyle: ['_filledTrack'],
  },
  {
    plugins: [new colorSchemeResolver(colorSchemeResolveFn)],
  }
);

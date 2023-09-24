import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

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
    plugins: [new ColorSchemeResolver(colorSchemeResolveFn)],
  }
);

function colorSchemeResolveFn({ ...props }: any) {
  if (props.colorScheme) {
    const color = props.colorScheme;

    const value = {
      _filledTrack: {
        bg: `$${color}.600`,
      },
      _dark: {
        _filledTrack: {
          bg: `$${color}.400`,
        },
      },
    };
    return value;
  }
  return {};
}

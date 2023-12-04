import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  View,
  {
    backgroundColor: '$muted.200',
    _dark: {
      backgroundColor: '$muted.700',
    },
    // @ts-ignore
    borderRadius: '$full',
    width: '100%',
    variants: {
      size: {
        'xs': {
          height: '$1',
        },
        'sm': {
          height: '$2',
        },
        'md': {
          height: '$3',
        },
        'lg': {
          height: '$4',
        },
        'xl': {
          height: '$5',
        },
        '2xl': {
          height: '$6',
        },
      },
    },

    defaultProps: {
      size: 'md',
      colorScheme: 'primary',
    },
  },
  {
    componentName: 'Progress',
    descendantStyle: ['_filledTrack'],
  } as const,
  {
    plugins: [new ColorSchemeResolver(colorSchemeResolveFn)],
  }
);

function colorSchemeResolveFn({ ...props }: any) {
  if (props.colorScheme) {
    const color = props.colorScheme;

    const value = {
      _filledTrack: {
        backgroundColor: `$${color}.600`,
      },
      _dark: {
        _filledTrack: {
          backgroundColor: `$${color}.400`,
        },
      },
    };
    return value;
  }
  return {};
}

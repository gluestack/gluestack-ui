import { styled } from '../../styled';
import { View } from 'react-native';
import { colorScheme } from '../../../utils';

const colorSchemes = Object.fromEntries(
  colorScheme.map((color) => [
    color,
    {
      _thumb: {
        'bg': `$${color}.600`,
        ':hover': {
          _web: {
            outlineColor: `$${color}.300`,
          },
        },
        ':focus': {
          _web: {
            outlineColor: `$${color}.400`,
          },
        },
        ':active': {
          borderColor: `$${color}.300`,
          _web: {
            outlineColor: `$${color}.300`,
          },
        },

        '_dark': {
          'bg': `$${color}.500`,
          ':hover': {
            _web: {
              outlineColor: `$${color}.800`,
            },
          },
          ':focus': {
            _web: {
              outlineColor: `$${color}.400`,
            },
          },
          ':active': {
            borderColor: `$${color}.800`,
            _web: {
              outlineColor: `$${color}.800`,
            },
          },
        },
      },
      _filledTrack: {
        bg: `$${color}.600`,
        _dark: {
          bg: `$${color}.500`,
        },
      },
    },
  ])
);

export default styled(
  View,
  {
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
      colorScheme: colorSchemes,
      orientation: {
        horizontal: {
          w: '100%',
          _track: {
            w: '100%',
          },
          _filledTrack: {
            h: '100%',
          },
        },
        vertical: {
          h: '100%',
          _track: {
            h: '100%',
          },
          _filledTrack: {
            w: '100%',
          },
        },
      },
      isReversed: {
        true: {},
        false: {},
      },
      size: {
        sm: {
          _thumb: {
            h: '$4',
            w: '$4',
          },
        },
        md: {
          _thumb: {
            h: '$5',
            w: '$5',
          },
        },
        lg: {
          _thumb: {
            h: '$6',
            w: '$6',
          },
        },
      },
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        size: 'sm',
        value: {
          _track: {
            h: '$1',
            flexDirection: 'row',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'sm',
        isReversed: true,
        value: {
          _track: {
            h: '$1',
            flexDirection: 'row-reverse',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'md',
        value: {
          _track: {
            h: 5,
            flexDirection: 'row',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'md',
        isReversed: true,
        value: {
          _track: {
            h: 5,
            flexDirection: 'row-reverse',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'lg',
        value: {
          _track: {
            h: '$1.5',
            flexDirection: 'row',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'lg',
        isReversed: true,
        value: {
          _track: {
            h: '$1.5',
            flexDirection: 'row-reverse',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'sm',
        value: {
          _track: {
            w: '$1',
            flexDirection: 'column-reverse',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'sm',
        isReversed: true,
        value: {
          _track: {
            w: '$1',
            flexDirection: 'column',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'md',
        value: {
          _track: {
            w: 5,
            flexDirection: 'column-reverse',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'md',
        isReversed: true,
        value: {
          _track: {
            w: 5,
            flexDirection: 'column',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'lg',
        value: {
          _track: {
            w: '$1.5',
            flexDirection: 'column-reverse',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'lg',
        isReversed: true,
        value: {
          _track: {
            w: '$1.5',
            flexDirection: 'column',
          },
        },
      },
    ],
    _web: {
      ':disabled': {
        // @ts-ignore
        pointerEvents: 'all !important',
        cursor: 'not-allowed',
        opacity: 0.4,
      },
    },
    defaultProps: {
      size: 'md',
      orientation: 'horizontal',
    },
  },
  {
    descendantStyle: ['_thumb', '_track', '_filledTrack'],
  },
  {
    aliases: {
      orientation: 'orientation',
    },
  }
);

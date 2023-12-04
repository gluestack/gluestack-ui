import { styled } from '@gluestack-style/react';
import { View } from 'react-native';
import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  View,
  {
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
      orientation: {
        horizontal: {
          width: '100%',
          _track: {
            width: '100%',
          },
          _filledTrack: {
            height: '100%',
          },
        },
        vertical: {
          height: '100%',
          _track: {
            height: '100%',
          },
          _filledTrack: {
            width: '100%',
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
            height: '$4',
            width: '$4',
          },
        },
        md: {
          _thumb: {
            height: '$5',
            width: '$5',
          },
        },
        lg: {
          _thumb: {
            height: '$6',
            width: '$6',
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
            height: '$1',
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
            height: '$1',
            flexDirection: 'row-reverse',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'md',
        value: {
          _track: {
            height: 5,
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
            height: 5,
            flexDirection: 'row-reverse',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'lg',
        value: {
          _track: {
            height: '$1.5',
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
            height: '$1.5',
            flexDirection: 'row-reverse',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'sm',
        value: {
          _track: {
            width: '$1',
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
            width: '$1',
            flexDirection: 'column',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'md',
        value: {
          _track: {
            width: 5,
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
            width: 5,
            flexDirection: 'column',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'lg',
        value: {
          _track: {
            width: '$1.5',
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
            width: '$1.5',
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
    componentName: 'Slider',
    descendantStyle: ['_thumb', '_track', '_filledTrack'],
  } as const,
  {
    plugins: [new ColorSchemeResolver(colorSchemeResolveFn)],
  }
);

function colorSchemeResolveFn({ ...props }: any) {
  let value = {};
  if (props.colorScheme) {
    const color = props.colorScheme;
    value = {
      _thumb: {
        // @ts-ignore
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
          // @ts-ignore
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
        backgroundColor: `$${color}.600`,
        _dark: {
          backgroundColor: `$${color}.500`,
        },
      },
    };
  }

  return value;
}

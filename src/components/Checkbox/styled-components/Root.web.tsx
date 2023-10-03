import { View } from 'react-native';
import { styled } from '@gluestack-style/react';
import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  View,
  {
    'flexDirection': 'row',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    //@ts-ignore
    'gap': '1rem',

    ':disabled': {
      _web: {
        cursor: 'not-allowed',
      },
    },

    'variants': {
      size: {
        lg: {
          _text: {
            fontSize: '$lg',
            lineHeight: '$xl',
          },

          _indicator: {
            h: '$6',
            w: '$6',
          },
        },

        md: {
          _text: {
            fontSize: '$md',
            lineHeight: '$md',
          },

          _indicator: {
            h: '$5',
            w: '$5',
          },
        },

        sm: {
          _text: {
            fontSize: '$sm',
            lineHeight: '$sm',
          },

          _indicator: {
            h: '$4',
            w: '$4',
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
    },

    '_web': {
      'cursor': 'pointer',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  {
    componentName: 'Checkbox',
    descendantStyle: ['_icon', '_text', '_indicator'],
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
      _indicator: {
        ':checked': {
          'borderColor': `$${color}.600`,
          'bg': `$${color}.600`,
          ':hover': {
            'borderColor': `$${color}.700`,
            'bg': `$${color}.700`,
            ':disabled': {
              borderColor: `$${color}.600`,
              bg: `$${color}.600`,
            },
          },
          ':active': {
            borderColor: `$${color}.800`,
            bg: `$${color}.800`,
          },
        },

        ':dark': {
          ':checked': {
            'borderColor': `$${color}.500`,
            'bg': `$${color}.500`,
            ':hover': {
              'borderColor': `$${color}.400`,
              'bg': `$${color}.400`,
              ':disabled': {
                borderColor: `$${color}.500`,
                bg: `$${color}.500`,
              },
            },
            ':active': {
              borderColor: `$${color}.300`,
              bg: `$${color}.300`,
            },
          },
        },
      },
    };
  }
  return value;
}

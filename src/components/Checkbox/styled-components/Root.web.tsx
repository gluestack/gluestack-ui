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
    'gap': '$4',

    ':disabled': {
      _web: {
        cursor: 'not-allowed',
      },
    },

    'variants': {
      size: {
        lg: {
          _text: {
            // @ts-ignore
            fontSize: '$lg',
            // @ts-ignore
            lineHeight: '$xl',
          },

          _indicator: {
            height: '$6',
            width: '$6',
          },
        },

        md: {
          _text: {
            // @ts-ignore
            fontSize: '$md',
            // @ts-ignore
            lineHeight: '$md',
          },

          _indicator: {
            height: '$5',
            width: '$5',
          },
        },

        sm: {
          _text: {
            // @ts-ignore
            fontSize: '$sm',
            // @ts-ignore
            lineHeight: '$sm',
          },

          _indicator: {
            height: '$4',
            width: '$4',
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
          // @ts-ignore
          'bg': `$${color}.600`,
          ':hover': {
            'borderColor': `$${color}.700`,
            // @ts-ignore
            'bg': `$${color}.700`,
            ':disabled': {
              borderColor: `$${color}.600`,
              backgroundColor: `$${color}.600`,
            },
          },
          ':active': {
            borderColor: `$${color}.800`,
            backgroundColor: `$${color}.800`,
          },
        },

        ':dark': {
          ':checked': {
            'borderColor': `$${color}.500`,
            // @ts-ignore
            'bg': `$${color}.500`,
            ':hover': {
              'borderColor': `$${color}.400`,
              // @ts-ignore
              'bg': `$${color}.400`,
              ':disabled': {
                borderColor: `$${color}.500`,
                backgroundColor: `$${color}.500`,
              },
            },
            ':active': {
              borderColor: `$${color}.300`,
              backgroundColor: `$${color}.300`,
            },
          },
        },
      },
    };
  }
  return value;
}

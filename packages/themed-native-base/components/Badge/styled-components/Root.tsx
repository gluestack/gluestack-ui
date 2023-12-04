import { View } from 'react-native';
import { styled } from '@gluestack-style/react';
import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  View,
  {
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    // @ts-ignore
    'borderRadius': '$xs',
    // @ts-ignore
    'borderWidth': '$1',
    'px': '$2',
    'py': '$0.5',
    //@ts-ignore
    'gap': '$1',

    ':disabled': {
      opacity: 0.5,
    },

    'variants': {
      variant: {
        solid: {},
        outline: {},
        subtle: {},
      },

      size: {
        sm: {
          _icon: {
            height: 12,
            width: 12,
          },
          _text: {
            // @ts-ignore
            fontSize: '$2xs',
            // @ts-ignore
            lineHeight: '$2xs',
          },
        },
        md: {
          _icon: {
            height: 14,
            width: 14,
          },
          _text: {
            // @ts-ignore
            fontSize: '$xs',
            // @ts-ignore
            lineHeight: '$sm',
          },
        },
        lg: {
          _icon: {
            height: 16,
            width: 16,
          },
          _text: {
            // @ts-ignore
            fontSize: '$sm',
            // @ts-ignore
            lineHeight: '$sm',
          },
        },
      },
    },

    'defaultProps': {
      variant: 'subtle',
      size: 'md',
    },
  },
  {
    componentName: 'Badge',
    descendantStyle: ['_text', '_icon'],
  } as const,
  {
    plugins: [new ColorSchemeResolver(colorSchemeResolveFn, 'badge')],
  }
);

function colorSchemeResolveFn({ ...props }: any) {
  let value = {};
  if (props.colorScheme) {
    const color = props.colorScheme;
    const variant = props.variant;
    switch (variant) {
      case 'solid':
        value = {
          _text: {
            color: '$text.50',
            fontWeight: '$medium',
          },
          _icon: {
            color: '$text.50',
            fontWeight: '$medium',
          },
          backgroundColor: `$${color}.600`,
          borderColor: 'transparent',
        };
        break;
      case 'outline':
        value = {
          _text: {
            color: `$${color}.600`,
            fontWeight: '$medium',
          },
          _icon: {
            color: `$${color}.600`,
            fontWeight: '$medium',
          },
          borderColor: `$${color}.600`,
          _dark: {
            _text: {
              color: `$${color}.300`,
            },
            _icon: {
              color: `$${color}.300`,
            },
            borderColor: `$${color}.300`,
          },
        };
        break;
      case 'subtle':
        value = {
          _text: {
            color: `$${color}.900`,
            fontWeight: '$medium',
          },
          _icon: {
            color: `$${color}.900`,
            fontWeight: '$medium',
          },
          backgroundColor: `$${color}.100`,
          _dark: {
            backgroundColor: `$${color}.300`,
          },
          borderColor: 'transparent',
        };
        break;
      default:
        value = {};
    }
  }
  return value;
}

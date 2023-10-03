import { View } from 'react-native';
import { styled } from '@gluestack-style/react';
import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  View,
  {
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderRadius': '$xs',
    'borderWidth': '$1',
    'px': '$2',
    'py': '$0.5',
    //@ts-ignore
    'gap': '0.25rem',

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
            h: 12,
            w: 12,
          },
          _text: {
            fontSize: '$2xs',
            lineHeight: '$2xs',
          },
        },
        md: {
          _icon: {
            h: 14,
            w: 14,
          },
          _text: {
            fontSize: '$xs',
            lineHeight: '$sm',
          },
        },
        lg: {
          _icon: {
            h: 16,
            w: 16,
          },
          _text: {
            fontSize: '$sm',
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
          },
          _icon: {
            color: '$text.50',
          },
          bg: `$${color}.600`,
          borderColor: 'transparent',
        };
        break;
      case 'outline':
        value = {
          _text: { color: `$${color}.600` },
          _icon: { color: `$${color}.600` },
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
          _text: { color: `$${color}.900` },
          _icon: { color: `$${color}.900` },
          bg: `$${color}.100`,
          _dark: { bg: `$${color}.300` },
          borderColor: 'transparent',
        };
        break;
      default:
        value = {};
    }
  }
  return value;
}

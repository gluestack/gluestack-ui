// @ts-nocheck
import { View } from 'react-native';
import { styled } from '@gluestack-style/react';
import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  View,
  {
    'borderRadius': '$xs',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'px': '$2',
    'py': '$0.5',
    'alignItems': 'center',
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
    descendantStyle: ['_text', '_icon'],
  },
  {
    plugins: [new ColorSchemeResolver(colorSchemeResolveFn)],
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
          borderWidth: '$1',
          borderColor: 'transparent',
          borderRadius: '$xs',
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
          borderRadius: '$xs',
          borderWidth: '$1',
        };
        break;
      case 'subtle':
        value = {
          _text: { color: `$${color}.900` },
          _icon: { color: `$${color}.900` },
          bg: `$${color}.100`,
          _dark: { bg: `$${color}.300` },
          borderWidth: '$1',
          borderRadius: '$xs',
          borderColor: 'transparent',
        };
        break;
      default:
        value = {};
    }
  }
  return value;
}

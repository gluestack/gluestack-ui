import { styled } from '@dank-style/react';
import { config } from '../../../../gluestack.config';
import { Pressable } from 'react-native';

const Button = styled(
  Pressable,
  {
    'borderRadius': 4,
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    'outlineWidth': 0,

    '_web': {
      //@ts-ignore
      'cursor': 'pointer',
      'userSelect': 'none',
      ':focusVisible': {
        outlineWidth: 0,
        boxShadow: `${config?.tokens?.colors.primary400} 0px 0px 0px 2px`,
        _dark: {
          boxShadow: `${config?.tokens?.colors.primary500} 0px 0px 0px 2px`,
        },
      },
    },
    ':hover': {
      bg: '$primary800',
    },
    ':disabled': {
      // @ts-ignore
      opacity: '0.4',
    },
    'variants': {
      variant: {
        solid: {
          'bg': '$primary600',
          '_text': {
            color: '$text50',
          },
          '_spinner': {
            color: '$text50',
          },
          '_icon': {
            color: '$text50',
          },
          ':hover': {
            bg: '$primary700',
          },
          ':active': {
            bg: '$primary800',
          },
        },
        subtle: {
          'bg': '$primary100',
          '_dark': {
            bg: '$primary300',
          },
          '_text': {
            color: '$primary900',
          },
          '_icon': {
            color: '$primary900',
          },
          '_spinner': {
            color: '$primary900',
          },
          ':hover': {
            bg: '$primary200',
            _dark: {
              bg: '$primary200',
            },
          },
          ':active': {
            bg: '$primary300',
            _dark: {
              bg: '$primary100',
            },
          },
        },
        outline: {
          //@ts-ignore
          'bg': 'transparent',
          'borderWidth': 1,
          'borderColor': '$muted300',
          '_text': {
            color: '$primary600',
          },
          '_icon': {
            color: '$primary600',
          },
          '_spinner': {
            color: '$primary600',
          },
          '_dark': {
            _text: {
              color: '$primary500',
            },
            _icon: {
              color: '$primary500',
            },
            _spinner: {
              color: '$primary500',
            },
          },
          ':hover': {
            bg: '$primary100', //replace it with alpha token
          },
          ':active': {
            bg: '$primary200', //replace it with alpha token
          },
        },
        ghost: {
          '_text': {
            color: '$primary600',
          },
          '_icon': {
            color: '$primary600',
          },
          '_spinner': {
            color: '$primary600',
          },
          '_dark': {
            _text: {
              color: '$primary500',
            },
            _icon: {
              color: '$primary500',
            },
            _spinner: {
              color: '$primary500',
            },
          },
          ':hover': {
            bg: '$primary200', //replace it with alpha token "$primary600:alpha10 when supported"
            _dark: {
              bg: '$primary100', //replace it with alpha token "$primary600:alpha10 when supported"
            },
          },
          ':active': {
            bg: '$primary300', //replace it with alpha token "$primary600:alpha20 when supported"
            _dark: {
              bg: '$primary200', //replace it with alpha token "$primary600:alpha10 when supported"
            },
          },
        },
        link: {
          '_text': {
            color: '$primary600',
          },
          '_icon': {
            color: '$primary600',
          },
          '_spinner': {
            color: '$primary600',
          },
          ':hover': {
            bg: 'transparent',

            _text: {
              textDecorationLine: 'underline',
            },
          },
          ':active': {
            _text: {
              color: '$primary800',
              textDecorationLine: 'underline',
            },
          },
          '_dark': {
            '_text': {
              color: '$primary500',
            },
            '_icon': {
              color: '$primary500',
            },
            ':active': {
              _text: {
                color: '$primary300',
              },
              _icon: {
                color: '$primary300',
              },
            },
          },
        },
        unstyled: {
          'borderRadius': undefined,

          '_text': {
            color: '$black',
          },
          '_icon': {
            color: '$black',
          },
          ':hover': {
            bg: 'transparent',
          },
        },
      },
      size: {
        xs: {
          px: '$3',
          py: '$2',

          _text: {
            fontSize: 10,
          },

          _icon: {
            w: 10,
            h: 10,
          },
        },
        sm: {
          px: '$3',
          py: '$2',

          _text: {
            fontSize: 12,
          },
          _icon: {
            w: 12,
            h: 12,
          },
        },
        md: {
          px: '$3',
          py: '$2.5',
          _text: {
            fontSize: 14,
          },
          _icon: {
            w: 14,
            h: 14,
          },
        },
        lg: {
          px: '$3',
          py: '$3',
          _text: {
            fontSize: 16,
          },
          _icon: {
            w: 16,
            h: 16,
          },
        },
      },
    },
    'defaultProps': {
      size: 'md',
      variant: 'solid',
    },
  },
  {
    descendantStyle: ['_text', '_spinner', '_icon'],
  }
);

export { default as Text } from './Text';
export { default as Group } from './Group';
export { default as Spinner } from './Spinner';
export { default as GroupSpacer } from './GroupSpacer';
export { Button as Root };

// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';
// import { colorScheme } from '../../../utils';
import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';
import { colorSchemeResolveFn } from '../colorScheme-resolver/colorSchemeResolve';

// const colorSchemes = Object.fromEntries(
//   colorScheme.map((color) => [color, {}])
// );

export default styled(
  Pressable,
  {
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    'gap': 6,

    ':disabled': {
      opacity: 0.4,
    },

    '_web': {
      ':focusVisible': {
        outlineWidth: '0',
        style: { boxShadow: `$primary400 0px 0px 0px 2px` },
      },
      ':disabled': {
        cursor: 'not-allowed',
      },
      '_dark': {
        ':focusVisible': {
          outlineWidth: '0',
          style: { boxShadow: `$primary500 0px 0px 0px 2px` },
        },
      },
    },

    'variants': {
      // colorScheme: colorSchemes,

      variant: {
        ghost: {},
        outline: {},
        solid: {},
        subtle: {},
        link: {},
      },

      size: {
        lg: {
          px: '$3',
          py: '$3',
          _text: {
            fontSize: '$md',
          },
          _icon: {
            h: '$5',
            w: '$5',
          },
        },
        md: {
          px: '$3',
          py: '$2.5',
          _text: {
            fontSize: '$sm',
          },
          _icon: {
            h: '$4',
            w: '$4',
          },
        },
        sm: {
          px: '$3',
          py: '$2',
          _text: {
            fontSize: '$xs',
          },
          _icon: {
            h: '$4',
            w: '$4',
          },
        },
        xs: {
          px: '$3',
          py: '$2',
          _text: {
            fontSize: '$2xs',
          },
          _icon: {
            h: '$3',
            w: '$3',
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
      variant: 'solid',
      colorScheme: 'primary',
    },
  },
  {
    descendantStyle: ['_text', '_spinner', '_icon'],
    ancestorStyle: ['_button'],
  },
  {
    plugins: [new ColorSchemeResolver(colorSchemeResolveFn)],
  }
);

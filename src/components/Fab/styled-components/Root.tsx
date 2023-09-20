// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';
import { colorScheme } from '../../../utils';
import { colorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';
import { colorSchemeResolveFn } from '../colorScheme-resolver/colorSchemeResolve';

const colorSchemes = Object.fromEntries(
  colorScheme.map((color) => [color, {}])
);

export default styled(
  Pressable,
  {
    'rounded': '$full',
    'zIndex': 20,
    'p': 16,
    'flexDirection': 'row',

    'alignItems': 'center',
    'justifyContent': 'center',
    'position': 'absolute',
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
      colorScheme: colorSchemes,

      variant: {
        ghost: {},
        outline: {},
        solid: {},
        subtle: {},
        link: {},
      },

      placement: {
        'top right': {
          top: '$4',
          right: '$4',
        },

        'top left': {
          top: '$4',
          left: '$4',
        },

        'bottom-right': {
          bottom: '$4',
          right: '$4',
        },

        'bottom-left': {
          bottom: '$4',
          left: '$4',
        },

        'top-center': {
          top: '$4',
          alignSelf: 'center',
        },

        'bottom-center': {
          bottom: '$4',
          alignSelf: 'center',
        },
      },

      size: {
        lg: {
          _text: {
            fontSize: '$md',
          },
          _icon: {
            h: '$5',
            w: '$5',
          },
        },
        md: {
          _text: {
            fontSize: '$sm',
          },
          _icon: {
            h: '$4',
            w: '$4',
          },
        },
        sm: {
          _text: {
            fontSize: '$xs',
          },
          _icon: {
            h: '$4',
            w: '$4',
          },
        },
        xs: {
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
      shadow: '7',
      placement: 'bottom-right',
      variant: 'solid',
      colorScheme: 'primary',
      size: 'md',
    },
  },
  {
    descendantStyle: ['_text', '_icon'],
  },
  {
    plugins: [new colorSchemeResolver(colorSchemeResolveFn)],
  }
);

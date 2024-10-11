import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'borderRadius': '$full',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',

    '_text': {
      color: '$textDark50',
      fontWeight: '$medium',
    },

    '_spinner': {
      color: '$backgroundDark50',
    },

    '_icon': {
      color: '$backgroundDark50',
    },

    'variants': {
      variant: {
        primary: {
          bg: '$primary500',

          _web: {
            'boxShadow':
              '0px 1px 3px rgba(0, 119, 230, 0.24), 0px 2px 6px rgba(0, 119, 230, 0.24), 0px 4px 8px rgba(0, 119, 230, 0.12), inset 1px 1px 2px rgba(255, 255, 255, 0.24)',
            ':hover': {
              boxShadow:
                '0px 1px 3px rgba(10, 124, 255, 0.24), 0px 2px 6px rgba(10, 124, 255, 0.24), 0px 4px 8px rgba(10, 124, 255, 0.12), 0px 12px 48px -8px rgba(10, 124, 255, 0.48), inset 1px 1px 2px rgba(255, 255, 255, 0.24)',
            },

            ':active': {
              boxShadow:
                '0px 1px 3px rgba(0, 119, 230, 0.24), 0px 2px 6px rgba(0, 119, 230, 0.24), 0px 4px 8px rgba(0, 119, 230, 0.12), inset 1px 1px 2px rgba(255, 255, 255, 0.24)',
            },

            ':focusVisible': {
              boxShadow:
                '0px 1px 3px rgba(10, 124, 255, 0.24), 0px 2px 6px rgba(10, 124, 255, 0.24), 0px 4px 8px rgba(10, 124, 255, 0.12), 0px 12px 48px -8px rgba(10, 124, 255, 0.48), inset 1px 1px 2px rgba(255, 255, 255, 0.24)',
            },
          },
        },

        secondary: {
          'bg': '$secondary50_alpha_10',

          '_web': {
            boxShadow:
              'inset -1px -1px 0px rgba(255, 255, 255, 0.08), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.06);',
          },

          ':hover': {
            bg: '$secondary50_alpha_20',
          },

          ':active': {
            bg: '$secondary50_alpha_10',
          },

          ':focusVisible': {
            bg: '$secondary50_alpha_20',
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
        md: {
          px: '$4',
          py: '$2',

          _text: {
            fontSize: '$md',
            lineHeight: '$md',
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
      variant: 'primary',
    },

    '_web': {
      cursor: 'pointer',
      userSelect: 'none',
      outlineWidth: 0,
    },

    ':disabled': {
      opacity: 0.5,
    },
  },
  {
    descendantStyle: ['_text', '_spinner', '_icon'],
  }
);

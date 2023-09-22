import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      size: {
        xs: {
          _button: {
            px: '$3.5',
            h: '$8',
            _icon: {
              props: {
                size: '2xs',
              },
            },
            _text: {
              props: {
                size: 'xs',
              },
            },
          },
        },
        sm: {
          _button: {
            px: '$4',
            h: '$9',
            _icon: {
              props: {
                size: 'sm',
              },
            },
            _text: {
              props: {
                size: 'sm',
              },
            },
          },
        },
        md: {
          _button: {
            px: '$5',
            h: '$10',
            _icon: {
              props: {
                size: 'md',
              },
            },
            _text: {
              props: {
                size: 'md',
              },
            },
          },
        },
        lg: {
          _button: {
            px: '$6',
            h: '$11',
            _icon: {
              props: {
                size: 'md',
              },
            },
            _text: {
              props: {
                size: 'lg',
              },
            },
          },
        },
        xl: {
          _button: {
            px: '$7',
            h: '$12',
            _icon: {
              props: {
                size: 'lg',
              },
            },
            _text: {
              props: {
                size: 'xl',
              },
            },
          },
          _groupHSpacer: {
            size: '$xl',
          },
          _groupVSpacer: {
            size: '$xl',
          },
        },
      },
      space: {
        'xs': {
          gap: `$1`,
        },
        'sm': {
          gap: `$2`,
        },
        'md': {
          gap: `$3`,
        },
        'lg': {
          gap: `$4`,
        },
        'xl': {
          gap: `$5`,
        },
        '2xl': {
          gap: `$6`,
        },
        '3xl': {
          gap: `$7`,
        },
        '4xl': {
          gap: `$8`,
        },
      },
    },

    defaultProps: {
      size: 'md',
      space: 'sm',
    },
  },
  {
    descendantStyle: ['_button'],
  }
);

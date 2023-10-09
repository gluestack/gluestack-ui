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
              h: '$3',
              w: '$3',
            },
            _text: {
              fontSize: '$xs',
              lineHeight: '$sm',
            },
          },
        },
        sm: {
          _button: {
            px: '$4',
            h: '$9',
            _icon: {
              h: '$4',
              w: '$4',
            },
            _text: {
              fontSize: '$sm',
              lineHeight: '$sm',
            },
          },
        },
        md: {
          _button: {
            px: '$5',
            h: '$10',
            _icon: {
              h: '$4.5',
              w: '$4.5',
            },
            _text: {
              fontSize: '$md',
              lineHeight: '$md',
            },
          },
        },
        lg: {
          _button: {
            px: '$6',
            h: '$11',
            _icon: {
              h: '$4.5',
              w: '$4.5',
            },
            _text: {
              fontSize: '$lg',
              lineHeight: '$xl',
            },
          },
        },
        xl: {
          _button: {
            px: '$7',
            h: '$12',
            _icon: {
              h: '$5',
              w: '$5',
            },
            _text: {
              fontSize: '$xl',
              lineHeight: '$xl',
            },
          },
        },
      },
      // space: {
      //   'xs': {
      //     gap: '$1',
      //   },
      //   'sm': {
      //     gap: '$2',
      //   },
      //   'md': {
      //     gap: '$3',
      //   },
      //   'lg': {
      //     gap: '$4',
      //   },
      //   'xl': {
      //     gap: '$5',
      //   },
      //   '2xl': {
      //     gap: '$6',
      //   },
      //   '3xl': {
      //     gap: '$7',
      //   },
      //   '4xl': {
      //     gap: '$8',
      //   },
      // },
    },

    defaultProps: {
      size: 'md',
      space: 'sm',
    },
  },
  {
    componentName: 'ButtonGroup',
    descendantStyle: ['_button'],
  } as const
);

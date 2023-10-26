import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      size: {
        xs: {
          _button: {
            // @ts-ignore
            px: '$3.5',
            height: '$8',
            _icon: {
              height: '$3',
              width: '$3',
            },
            _text: {
              // @ts-ignore
              fontSize: '$xs',
              // @ts-ignore
              lineHeight: '$sm',
            },
          },
        },
        sm: {
          _button: {
            // @ts-ignore
            px: '$4',
            height: '$9',
            _icon: {
              height: '$4',
              width: '$4',
            },
            _text: {
              // @ts-ignore
              fontSize: '$sm',
              // @ts-ignore
              lineHeight: '$sm',
            },
          },
        },
        md: {
          _button: {
            // @ts-ignore
            px: '$5',
            height: '$10',
            _icon: {
              height: '$4.5',
              width: '$4.5',
            },
            _text: {
              // @ts-ignore
              fontSize: '$md',
              // @ts-ignore
              lineHeight: '$md',
            },
          },
        },
        lg: {
          _button: {
            // @ts-ignore
            px: '$6',
            height: '$11',
            _icon: {
              height: '$4.5',
              width: '$4.5',
            },
            _text: {
              // @ts-ignore
              fontSize: '$lg',
              // @ts-ignore
              lineHeight: '$xl',
            },
          },
        },
        xl: {
          _button: {
            // @ts-ignore
            px: '$7',
            height: '$12',
            _icon: {
              height: '$5',
              width: '$5',
            },
            _text: {
              // @ts-ignore
              fontSize: '$xl',
              // @ts-ignore
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
      space: '$2',
    },
  },
  {
    componentName: 'ButtonGroup',
    descendantStyle: ['_button'],
  } as const
);

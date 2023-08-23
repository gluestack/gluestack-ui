// @ts-nocheck
import { styled } from '../../styled';
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
          _groupHSpacer: {
            size: '$xs',
          },
          _groupVSpacer: {
            size: '$xs',
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
          _groupHSpacer: {
            size: '$sm',
          },
          _groupVSpacer: {
            size: '$sm',
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
          _groupHSpacer: {
            size: '$md',
          },
          _groupVSpacer: {
            size: '$md',
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
          _groupHSpacer: {
            size: '$lg',
          },
          _groupVSpacer: {
            size: '$lg',
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
          _groupHSpacer: {
            size: '$xl',
          },
          _groupVSpacer: {
            size: '$xl',
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    descendantStyle: ['_button', '_groupHSpacer', '_groupVSpacer'],
  }
);

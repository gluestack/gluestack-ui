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
            h: 32,
            _icon: {
              h: 12,
              w: 12,
            },
            _text: {
              fontSize: '$xs',
              lineHeight: '$sm',
            },
          },
          _groupHSpacer: {
            size: 'xs',
          },
          _groupVSpacer: {
            size: 'xs',
          },
        },
        sm: {
          _button: {
            px: '$4',
            h: 36,
            _icon: {
              h: 16,
              w: 16,
            },
            _text: {
              fontSize: '$sm',
              lineHeight: '$sm',
            },
          },
          _groupHSpacer: {
            size: 'sm',
          },
          _groupVSpacer: {
            size: 'sm',
          },
        },
        md: {
          _button: {
            px: '$5',
            h: 40,
            _icon: {
              h: 18,
              w: 18,
            },
            _text: {
              fontSize: '$md',
              lineHeight: '$md',
            },
          },
          _groupHSpacer: {
            size: 'md',
          },
          _groupVSpacer: {
            size: 'md',
          },
        },
        lg: {
          _button: {
            px: '$6',
            h: 44,
            _icon: {
              h: 18,
              w: 18,
            },
            _text: {
              fontSize: '$lg',
              lineHeight: '$xl',
            },
          },
          _groupHSpacer: {
            size: 'lg',
          },
          _groupVSpacer: {
            size: 'lg',
          },
        },
        xl: {
          _button: {
            px: '$7',
            h: 48,
            _icon: {
              h: 20,
              w: 20,
            },
            _text: {
              fontSize: '$xl',
              lineHeight: '$xl',
            },
          },
          _groupHSpacer: {
            size: 'xl',
          },
          _groupVSpacer: {
            size: 'xl',
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

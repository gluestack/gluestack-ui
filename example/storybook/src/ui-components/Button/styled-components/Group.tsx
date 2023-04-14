import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      size: {
        xs: {
          _button: {
            px: '$3',
            py: '$2',
            _icon: {
              h: 12,
              w: 12,
            },
            _text: {
              fontSize: '$xs',
              lineHeight: '$xs',
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
            px: '$3.5',
            py: '$2',
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
            px: '$4',
            py: '$2',
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
            px: '$5',
            py: '$2',
            _icon: {
              h: 18,
              w: 18,
            },
            _text: {
              fontSize: '$lg',
              lineHeight: '$lg',
            },
          },
          _groupHSpacer: {
            size: 'lg',
          },
          _groupVSpacer: {
            size: 'lg',
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

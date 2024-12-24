import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    maxWidth: 640,
    width: '80%',
    _web: {
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
    variants: {
      size: {
        sm: {
          _titleText: {
            fontSize: '$sm',
            fontFamily: '$body',
            fontWeight: '$bold',
            lineHeight: '$sm',
          },
          _contentText: {
            fontSize: '$sm',
            fontFamily: '$body',
            fontWeight: '$normal',
            lineHeight: '$sm',
          },
        },
        md: {
          _titleText: {
            fontSize: '$md',
            fontFamily: '$body',
            fontWeight: '$bold',
            lineHeight: '$md',
          },
          _contentText: {
            fontSize: '$md',
            fontFamily: '$body',
            fontWeight: '$normal',
            lineHeight: '$md',
          },
        },
        lg: {
          _titleText: {
            fontSize: '$lg',
            fontFamily: '$body',
            fontWeight: '$bold',
            lineHeight: '$lg',
          },
          _contentText: {
            fontSize: '$lg',
            fontFamily: '$body',
            fontWeight: '$normal',
            lineHeight: '$lg',
          },
        },
      },
      variant: {
        filled: {
          _light: {
            backgroundColor: '$backgroundLight0',
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowRadius: 8,
            shadowOpacity: 0.2,
            elevation: 10,
          },
          _dark: {
            backgroundColor: '$backgroundDark950',
          },
        },
        unfilled: {
          shadowColor: 'transparent',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          _light: {
            backgroundColor: 'transparent',
          },
          _dark: {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    defaultProps: {
      theme: 'light',
      size: 'sm',
      variant: 'filled',
    },
  },
  {
    descendantStyle: ['_titleText', '_contentText', '_icon'],
    ancestorStyle: [],
  }
);

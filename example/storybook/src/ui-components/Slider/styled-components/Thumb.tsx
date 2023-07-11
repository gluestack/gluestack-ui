import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$primary600',
    position: 'absolute',
    borderRadius: '$full',
    _dark: {
      bg: '$primary300',
    },

    variants: {
      size: {
        sm: {
          h: '$4',
          w: '$4',
        },
        md: {
          h: '$5',
          w: '$5',
        },
        lg: {
          h: '$6',
          w: '$6',
        },
      },
    },

    _web: {
      //@ts-ignore
      'cursor': 'pointer',
      ':hover': {
        outlineColor: '$primary600',
        _dark: {
          outlineColor: '$primary300',
        },
      },

      ':active': {
        outlineWidth: 4,
        outlineColor: '$primary300',
        outlineStyle: 'solid',
        // ':hover': {
        //   outlineColor: '$primary700',
        // },

        _dark: {
          outlineColor: '$primary700',
        },
      },
      ':focus': {
        outlineWidth: 4,
        outlineColor: '$primary300',
        outlineStyle: 'solid',

        _dark: {
          outlineColor: '$primary700',
        },
      },

      ':disabled': {
        bg: '$primary600_alpha60',
        _dark: {
          bg: '$primary600_alpha60',
        },
      },
    },
    defaultProps: {
      size: 'md',
      hardShadow: '1',
    },
  },
  { ancestorStyle: ['_thumb'] }
);

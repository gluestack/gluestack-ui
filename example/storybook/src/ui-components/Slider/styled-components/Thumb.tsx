import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'bg': '$primary500',
    '_dark': {
      bg: '$primary400',
    },
    'position': 'absolute',
    'borderRadius': '$full',
    'variants': {
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
    ':focus': {
      bg: '$primary600',
      _dark: {
        bg: '$primary300',
      },
    },
    ':active': {
      bg: '$primary600',
      _dark: {
        bg: '$primary300',
      },
    },
    ':hover': {
      bg: '$primary600',
      _dark: {
        bg: '$primary300',
      },
    },
    ':disabled': {
      bg: '$primary500',
      _dark: {
        bg: '$primary500',
      },
    },
    '_web': {
      //@ts-ignore
      'cursor': 'pointer',
      ':active': {
        outlineWidth: 4,
        outlineStyle: 'solid',
        outlineColor: '$primary400',
        _dark: {
          outlineColor: '$primary500',
        },
      },
      ':focus': {
        outlineWidth: 4,
        outlineStyle: 'solid',
        outlineColor: '$primary400',
        _dark: {
          outlineColor: '$primary500',
        },
      },
    },
    'defaultProps': {
      size: 'md',
      hardShadow: '1',
    },
  },
  { ancestorStyle: ['_thumb'] }
);

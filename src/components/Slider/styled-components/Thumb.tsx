import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'borderRadius': '$full',
    'zIndex': 999,
    'alignItems': 'center',
    'justifyContent': 'center',
    'position': 'absolute',
    'bg': `$primary.600`,
    ':hover': {
      _web: {
        outlineWidth: '4px',
        outlineColor: '$primary.300',
        outlineStyle: 'solid',
      },
    },
    ':focus': {
      _web: {
        outlineWidth: '4px',
        outlineColor: '$primary.400',
        outlineStyle: 'solid',
      },
    },
    ':active': {
      borderWidth: 8,
      borderColor: `$primary.300`,
      _web: {
        borderWidth: 0,
        outlineWidth: '8px',
        outlineColor: '$primary.300',
        outlineStyle: 'solid',
      },
    },

    '_dark': {
      'bg': `$primary.500`,
      ':hover': {
        _web: {
          outlineWidth: '4px',
          outlineColor: '$primary.800',
          outlineStyle: 'solid',
        },
      },
      ':focus': {
        _web: {
          outlineWidth: '4px',
          outlineColor: '$primary.400',
          outlineStyle: 'solid',
        },
      },
      ':active': {
        borderWidth: 8,
        borderColor: `$primary.800`,
        _web: {
          borderWidth: 0,
          outlineWidth: '8px',
          outlineColor: '$primary.800',
          outlineStyle: 'solid',
        },
      },
    },
    '_web': {
      cursor: 'pointer',
    },
    'defaultProps': {
      shadow: '6',
    },
  },
  { ancestorStyle: ['_thumb'] }
);

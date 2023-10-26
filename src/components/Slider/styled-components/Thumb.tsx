import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    // @ts-ignore
    'borderRadius': '$full',
    'zIndex': 999,
    'alignItems': 'center',
    'justifyContent': 'center',
    'position': 'absolute',
    // @ts-ignore
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
      // @ts-ignore
      borderWidth: 8,
      borderColor: `$primary.300`,
      _web: {
        // @ts-ignore
        borderWidth: 0,
        outlineWidth: '8px',
        outlineColor: '$primary.300',
        outlineStyle: 'solid',
      },
    },

    '_dark': {
      // @ts-ignore
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
        // @ts-ignore
        borderWidth: 8,
        borderColor: `$primary.800`,
        _web: {
          // @ts-ignore
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
  {
    componentName: 'SliderThumb',
    ancestorStyle: ['_thumb'],
  } as const
);

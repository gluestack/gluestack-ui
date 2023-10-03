import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    'justifyContent': 'center',
    'alignItems': 'center',
    'bg': '$muted.50',
    'borderColor': '$muted.400',
    'borderWidth': 2,
    'borderRadius': '$sm',
    'opacity': 1,
    'p': 2,

    '_web': {
      ':focusVisible': {
        outlineWidth: '2px',
        outlineColor: '$primary.700',
        outlineStyle: 'solid',
        _dark: {
          outlineColor: '$primary.300',
        },
      },
    },

    ':checked': {
      'borderColor': `$primary.600`,
      'bg': `$primary.600`,
      ':hover': {
        'borderColor': `$primary.700`,
        'bg': `$primary.700`,
        ':disabled': {
          borderColor: `$primary.600`,
          bg: `$primary.600`,
        },
      },
      ':active': {
        borderColor: `$primary.800`,
        bg: `$primary.800`,
      },
    },

    ':hover': {
      'borderColor': '$muted.500',
      ':disabled': {
        borderColor: '$muted.400',
      },
    },
    ':active': {
      borderColor: '$muted.600',
    },
    ':invalid': {
      borderColor: '$error.600',
    },

    '_dark': {
      'bg': '$muted.900',
      'borderColor': '$muted.500',
      ':checked': {
        'borderColor': `$primary.500`,
        'bg': `$primary.500`,
        ':hover': {
          'borderColor': `$primary.400`,
          'bg': `$primary.400`,
          ':disabled': {
            borderColor: `$primary.500`,
            bg: `$primary.500`,
          },
        },
        ':active': {
          borderColor: `$primary.300`,
          bg: `$primary.300`,
        },
      },
      ':hover': {
        borderColor: '$muted.400',
        _disabled: {
          borderColor: '$muted.500',
        },
      },
      ':active': {
        borderColor: '$muted.300',
      },
      ':invalid': {
        borderColor: '$error.500',
      },
    },
  },
  {
    componentName: 'CheckboxIndicator',
    ancestorStyle: ['_indicator'],
  } as const
);

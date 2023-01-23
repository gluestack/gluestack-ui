import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    'justifyContent': 'center',
    'alignItems': 'center',
    'bg': 'transparent',
    'borderColor': '$muted400',
    'ml': '$2',
    'borderWidth': 2,
    'borderRadius': 999,

    '_web': {
      ':focusVisible': {
        outlineWidth: '2px',
        outlineColor: '$primary400',
        outlineStyle: 'solid',
      },
    },

    ':hover': {
      'borderColor': '$muted500',

      ':disabled': {
        borderColor: '$muted400',
      },

      ':checked': {
        borderColor: '$primary600',
      },
    },

    ':disabled': {
      opacity: 0.6,
    },

    ':invalid': {
      borderColor: '$error600',
    },

    ':checked': {
      'borderColor': '$primary600',

      ':hover': {
        'borderColor': '$primary700',

        ':disabled': {
          borderColor: '$primary600',
        },
      },

      ':disabled': {
        borderColor: '$primary600',
      },
    },

    '_dark': {
      'borderColor': '$muted500',
      'bg': '$muted.900',

      ':hover': {
        'borderColor': '$muted400',

        ':disabled': {
          borderColor: '$muted500',
        },

        ':checked': {
          borderColor: '$primary600',
        },
      },

      ':disabled': {
        opacity: 0.6,
      },

      ':invalid': {
        borderColor: '$error500',
      },

      ':checked': {
        'borderColor': '$primary600',

        ':hover': {
          'borderColor': '$primary700',

          ':disabled': {
            borderColor: '$primary600',
          },
        },

        ':disabled': {
          borderColor: '$primary600',
        },
      },
    },
  },
  {
    ancestorStyle: ['_indicator'],
  }
);

import { AccessibleText as Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    'color': '$muted.600',
    ':checked': {
      color: '$muted.900',
    },
    ':hover': {
      'color': '$muted.900',
      ':checked': {
        'color': '$muted.900',
        ':disabled': {
          color: '$muted.900',
        },
      },
      ':disabled': {
        color: '$muted.600',
      },
    },
    ':active': {
      'color': '$muted.900',

      ':checked': {
        color: '$muted.900',
      },
    },

    ':disabled': {
      opacity: 0.4,
    },

    '_web': {
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none',
    },

    '_dark': {
      'color': '$muted.400',
      ':checked': {
        color: '$muted.100',
      },
      ':hover': {
        'color': '$muted.100',
        ':checked': {
          'color': '$muted.100',
          ':disabled': {
            color: '$muted.100',
          },
        },
      },
      ':disabled': {
        color: '$muted.100',
      },

      ':active': {
        'color': '$muted.100',

        ':checked': {
          color: '$muted.100',
        },
      },
    },
  },
  {
    componentName: 'CheckboxLabel',
    ancestorStyle: ['_text'],
  } as const
);

import { createStyle } from '@gluestack-style/react';

export const TabsTab = createStyle({
  'bg': 'transparent',
  '_web': {
    outlineWidth: 0,
  },

  'variants': {
    size: {
      md: {
        px: '$4',
        py: '$2',

        _text: {
          fontSize: '$md',
          lineHeight: '$md',
        },
      },
    },
  },

  'defaultProps': {
    size: 'md',
  },
  ':hover': {
    // bg: '$secondary50_alpha_20',
    borderRadius: '$full',
  },
  ':active': {
    // bg: '$secondary50_alpha_10',
    borderRadius: '$full',
  },
  ':focus': {
    // bg: '$secondary50_alpha_20',
    borderRadius: '$full',
  },
  ':disabled': {
    opacity: 0.5,
  },

  '_dark': {
    ':hover': {
      bg: '$backgroundLight500',
      borderRadius: '$full',
    },
    ':active': {
      bg: '$backgroundLight400',
      borderRadius: '$full',
    },
    ':focus': {
      bg: '$backgroundLight400',
      borderRadius: '$full',
    },
    ':disabled': {
      opacity: 0.5,
    },
  },
});

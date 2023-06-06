import { AsForwarder } from '@gluestack-style/react';
import { styled } from '../../styled';
export default styled(
  AsForwarder,
  {
    'w': '100%',
    'h': '100%',
    'justifyContent': 'center',
    'alignItems': 'center',
    ':checked': {
      color: '$backgroundLight0',
    },
    ':disabled': {
      opacity: 0.4,
    },
    '_dark': {
      ':checked': {
        color: '$backgroundDark0',
      },
      ':disabled': {
        opacity: 0.4,
      },
    },
    'variants': {
      size: {
        xs: {
          h: 12,
          w: 12,
        },
        sm: {
          h: 16,
          w: 16,
        },
        md: {
          h: 18,
          w: 18,
        },
        lg: {
          h: 20,
          w: 20,
        },
        xl: {
          h: 24,
          w: 24,
        },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

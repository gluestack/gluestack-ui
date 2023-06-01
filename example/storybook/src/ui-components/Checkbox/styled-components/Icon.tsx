import { AsForwarder } from '@glue-style/react';
import { styled } from '../../styled';
export default styled(
  AsForwarder,
  {
    'w': '100%',
    'h': '100%',
    'justifyContent': 'center',
    'alignItems': 'center',
    'color': '$primary600',
    ':checked': {
      'color': '$primary600',
      ':hover': {
        color: '$primary700',
      },
    },
    ':disabled': {
      'opacity': 0.6,
      'color': '$primary600',
      ':checked': {
        color: '$primary600',
      },
    },
    '_dark': {
      'color': '$primary500',
      ':checked': {
        'color': '$primary500',
        ':hover': {
          color: '$primary400',
        },
      },
      ':disabled': {
        'color': '$primary500',
        ':checked': {
          color: '$primary500',
        },
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

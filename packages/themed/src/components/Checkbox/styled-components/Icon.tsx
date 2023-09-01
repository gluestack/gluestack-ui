import { AsForwarder } from '@gluestack-style/react';
import { styled } from '../../styled';
const Icon = styled(AsForwarder, {}, {});

export default styled(
  Icon,
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
    componentName: 'CheckboxIcon',
    ancestorStyle: ['_icon'],
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

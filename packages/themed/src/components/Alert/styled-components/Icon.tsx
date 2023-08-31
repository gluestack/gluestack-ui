import { styled } from '../../styled';
import { AsForwarder } from '@gluestack-style/react';

const Icon = styled(AsForwarder, {}, {});

export default styled(
  Icon,
  {
    variants: {
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
    defaultProps: {
      size: 'md',
    },
  },
  {
    componentName: 'AlertIcon',
    ancestorStyle: ['_icon'],
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

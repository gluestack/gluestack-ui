import { styled } from '../../styled';
import { AsForwarder } from '@gluestack-style/react';

export default styled(
  AsForwarder,
  {
    variants: {
      size: {
        xs: {
          h: '$3',
          w: '$3',
        },
        sm: {
          h: '$4',
          w: '$4',
        },
        md: {
          h: '$4.5',
          w: '$4.5',
        },
        lg: {
          h: '$5',
          w: '$5',
        },
        xl: {
          h: '$6',
          w: '$6',
        },
      },
    },
    defaultProps: {
      size: 'md',
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

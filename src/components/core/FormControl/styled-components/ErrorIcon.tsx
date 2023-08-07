import { styled } from '../../styled';
import { AsForwarder } from '@gluestack-style/react';

export default styled(
  AsForwarder,
  {
    color: '$red500',
    h: '$3',
    w: '$3',
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

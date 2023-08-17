import { styled } from '../../styled';
import { AsForwarder } from '@gluestack-style/react';

export default styled(
  AsForwarder,
  {
    color: '$error700',
    _dark: {
      color: '$error400',
    },
    h: '$4',
    w: '$4',
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

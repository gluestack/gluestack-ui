import { styled } from '@gluestack-style/react';
import { AsForwarder } from '@gluestack-style/react';

const Icon = styled(AsForwarder, {}, {});

export default styled(
  Icon,
  {
    color: '$error.600',
    _dark: {
      color: '$error.500',
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

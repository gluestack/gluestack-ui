import { styled } from '../../styled';
import { AsForwarder } from '@gluestack-style/react';

const Icon = styled(
  AsForwarder,
  {
    ancestorStyle: ['_icon'],
  },
  {}
);

export default styled(
  Icon,
  {},
  {
    ancestorStyle: ['_icon'],
    descendantStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

import { styled } from '../../styled';
import { AsForwarder } from '@gluestack-style/react';

const Icon = styled(AsForwarder, {}, {});

export default styled(
  Icon,
  {},
  {
    componentName: 'FabIcon',
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

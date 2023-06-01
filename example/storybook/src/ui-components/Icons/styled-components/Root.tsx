import { AsForwarder } from '@glue-style/react';
import { styled } from '../../styled';

const Comp: any = styled(
  AsForwarder,
  {},
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

export default Comp;

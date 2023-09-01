import { styled } from '../../styled';
import { AsForwarder } from '@gluestack-style/react';

const Icon = styled(AsForwarder, {}, {});

export default styled(
  Icon,
  {
    color: '$error700',
    _dark: {
      color: '$error400',
    },
    h: '$4',
    w: '$4',
  },
  {
    componentName: 'FormControlErrorIcon',
    ancestorStyle: ['_icon'],
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

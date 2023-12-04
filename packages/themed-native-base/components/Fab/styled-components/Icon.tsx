import { styled } from '@gluestack-style/react';
import { AsForwarder } from '@gluestack-style/react';

const Icon = styled(AsForwarder, {}, {});

export default styled(
  Icon,
  {},
  {
    ancestorStyle: ['_icon'],
    componentName: 'FabIcon',
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

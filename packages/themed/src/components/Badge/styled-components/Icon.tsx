import { styled } from '../../styled';
import { AsForwarder } from '@gluestack-style/react';

const Icon = styled(AsForwarder, {}, {});

export default styled(
  Icon,
  {},
  {
    componentName: 'BadgeIcon',
    ancestorStyle: ['_icon'],
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

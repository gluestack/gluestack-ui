import { AsForwarder } from '@gluestack-style/react';
import { styled } from '@gluestack-style/react';

export const BaseIcon = styled(
  AsForwarder,
  {},
  {
    componentName: 'BaseIcon',
    resolveProps: ['stroke', 'fill'],
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
      fill: 'colors',
    },
  }
);

export default styled(BaseIcon, {}, { componentName: 'Icon' });

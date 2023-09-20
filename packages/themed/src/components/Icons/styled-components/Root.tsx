import { AsForwarder } from '@gluestack-style/react';
import { styled } from '@gluestack-style/react';

export const StyledIcon = styled(
  AsForwarder,
  {},
  {
    componentName: 'Icon',
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

export default styled(
  StyledIcon,
  {},
  {},
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

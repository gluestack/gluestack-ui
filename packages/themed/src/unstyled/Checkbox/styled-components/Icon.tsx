// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {},
  {
    componentName: 'CheckboxIcon',
    ancestorStyle: ['_icon'],
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

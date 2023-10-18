// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { BaseIcon } from '../../Icons/styled-components';

export default styled(
  BaseIcon,
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

// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { View as StyledIcon } from 'react-native';

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

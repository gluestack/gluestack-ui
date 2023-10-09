import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    color: '$error.600',
    _dark: {
      color: '$error.500',
    },
    h: '$4',
    w: '$4',
    props: {
      size: 'sm',
    },
  },
  {
    ancestorStyle: ['_icon'],
    componentName: 'ErrorIcon',
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

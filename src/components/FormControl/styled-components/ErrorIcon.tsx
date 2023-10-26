import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    color: '$error.600',
    _dark: {
      color: '$error.500',
    },
    height: '$4',
    width: '$4',
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

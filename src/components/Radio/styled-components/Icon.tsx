import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    h: '$full',
    w: '$full',
  },
  {
    componentName: 'RadioIcon',
    ancestorStyle: ['_icon'],
    resolveProps: ['color'],
  } as const
);

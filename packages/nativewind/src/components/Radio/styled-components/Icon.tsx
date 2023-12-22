import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(StyledIcon, {}, {
  componentName: 'RadioIcon',
  ancestorStyle: ['_icon'],
  resolveProps: ['color'],
} as const);

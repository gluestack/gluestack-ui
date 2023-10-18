import { styled } from '@gluestack-style/react';
import { BaseIcon } from '../../Icons/styled-components';

export default styled(BaseIcon, {}, {
  componentName: 'RadioIcon',
  ancestorStyle: ['_icon'],
  resolveProps: ['color'],
} as const);

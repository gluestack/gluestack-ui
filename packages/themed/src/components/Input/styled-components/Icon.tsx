import { styled } from '@gluestack-style/react';
import { BaseIcon } from '../../Icons/styled-components';

export default styled(BaseIcon, {}, {
  componentName: 'InputIcon',
  ancestorStyle: ['_icon'],
} as const);

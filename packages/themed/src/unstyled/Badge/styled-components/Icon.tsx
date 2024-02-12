import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(StyledIcon, {}, {
  componentName: 'BadgeIcon',
  ancestorStyle: ['_icon'],
} as const);

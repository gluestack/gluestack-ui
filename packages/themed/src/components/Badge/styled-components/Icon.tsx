import { styled } from '../../styled';
import { StyledIcon } from '../../Icons';

export default styled(StyledIcon, {}, {
  componentName: 'BadgeIcon',
  ancestorStyle: ['_icon'],
} as const);

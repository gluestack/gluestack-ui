import { styled } from '../../styled';
import { StyledIcon } from '../../Icons';

export default styled(StyledIcon, {}, {
  componentName: 'AlertIcon',
  ancestorStyle: ['_icon'],
} as const);

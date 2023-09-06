import { styled } from '../../styled';
import { StyledIcon } from '../../Icons';

export default styled(StyledIcon, {}, {
  componentName: 'ButtonIcon',
  ancestorStyle: ['_icon'],
} as const);

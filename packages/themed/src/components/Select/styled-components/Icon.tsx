import { styled } from '../../styled';
import { StyledIcon } from '../../Icons';

export default styled(
  StyledIcon,
  {},
  {
    componentName: 'SelectIcon',
    ancestorStyle: ['_icon'],
  } as const,
  {}
);

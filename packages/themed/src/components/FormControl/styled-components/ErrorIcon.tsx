import { styled } from '../../styled';
import { StyledIcon } from '../../Icons';

export default styled(
  StyledIcon,
  {
    color: '$error700',
    _dark: {
      color: '$error400',
    },
    props: {
      size: 'sm',
    },
  },
  {
    componentName: 'FormControlErrorIcon',
    ancestorStyle: ['_icon'],
  } as const
);

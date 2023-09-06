import { styled } from '../../styled';
import { StyledIcon } from '../../Icons';

export default styled(
  StyledIcon,
  {
    props: {
      size: 'sm',
    },
    color: '$backgroundLight500',
    _dark: {
      color: '$backgroundDark400',
    },
  },
  {
    componentName: 'ActionsheetIcon',
    ancestorStyle: ['_icon'],
  } as const
);

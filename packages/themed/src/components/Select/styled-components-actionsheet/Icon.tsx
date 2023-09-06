import { styled } from '../../styled';
import { StyledIcon } from '../../Icons';

export default styled(
  StyledIcon,
  {
    w: '$4',
    h: '$4',
    mr: '$2',
    color: '$backgroundLight500',
    _dark: {
      color: '$backgroundDark400',
    },
  },
  {
    componentName: 'SelectActionsheetIcon',
    ancestorStyle: ['_icon'],
  } as const
);

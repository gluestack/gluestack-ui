import { styled } from '../../styled';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    w: '$4',
    h: '$4',
    mr: '$2',
    color: '$backgroundLight500',
    _dark: {
      //@ts-ignore
      color: '$backgroundDark400',
    },
    props: {
      size: 'md',
    },
  },
  {
    componentName: 'SelectActionsheetIcon',
    ancestorStyle: ['_icon'],
  } as const
);

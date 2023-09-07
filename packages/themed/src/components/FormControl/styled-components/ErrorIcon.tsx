import { styled } from '../../styled';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    color: '$error700',
    _dark: {
      //@ts-ignore
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

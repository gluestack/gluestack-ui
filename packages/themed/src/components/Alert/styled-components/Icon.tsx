import { styled } from '../../styled';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    props: {
      size: 'md',
    },
  },
  {
    componentName: 'AlertIcon',
    ancestorStyle: ['_icon'],
  } as const
);

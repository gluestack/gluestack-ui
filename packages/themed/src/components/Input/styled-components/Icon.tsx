import { styled } from '@gluestack-style/react';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    props: {
      size: 'md',
    },
  },
  {
    componentName: 'InputIcon',
    ancestorStyle: ['_icon'],
  } as const
);

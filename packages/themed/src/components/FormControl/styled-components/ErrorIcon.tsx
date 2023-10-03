import { styled } from '@gluestack-style/react';
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
  } as const
);

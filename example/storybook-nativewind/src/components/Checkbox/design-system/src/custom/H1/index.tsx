import React, { memo } from 'react';
import { StyledH1 } from '../../styled-components';
export const H1 = memo(({ ...props }: any) => {
  return <StyledH1 {...props} />;
});

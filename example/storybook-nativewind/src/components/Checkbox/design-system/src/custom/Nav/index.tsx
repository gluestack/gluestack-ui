import React, { memo } from 'react';
import { StyledNav } from '../../styled-components';
export const Nav = memo(({ ...props }: any) => {
  return <StyledNav {...props} />;
});

import React, { memo } from 'react';
import { StyledSidebarGroupHeader } from '../../styled-components';
export const SidebarGroupHeader = memo(({ ...props }: any) => {
  return <StyledSidebarGroupHeader {...props} />;
});

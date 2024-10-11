import React, { memo } from 'react';
import { StyledSidebarGroup } from '../../styled-components';
export const SidebarGroup = memo(({ ...props }: any) => {
  return <StyledSidebarGroup {...props} />;
});

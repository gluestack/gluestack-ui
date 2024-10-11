import React, { memo } from 'react';
import { StyledSidebarGroupItemContent } from '../../styled-components';
export const SidebarGroupItemContent = memo(({ ...props }: any) => {
  return <StyledSidebarGroupItemContent {...props} />;
});

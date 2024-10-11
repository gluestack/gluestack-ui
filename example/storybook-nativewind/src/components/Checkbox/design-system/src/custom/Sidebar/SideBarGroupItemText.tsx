import React, { memo } from 'react';
import { StyledSidebarGroupItemText } from '../../styled-components';
export const SidebarGroupItemText = memo(({ ...props }: any) => {
  return <StyledSidebarGroupItemText {...props} />;
});

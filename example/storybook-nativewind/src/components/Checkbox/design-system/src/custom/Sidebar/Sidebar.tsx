import React, { memo } from 'react';
import { StyledSidebar } from '../../styled-components';
export const Sidebar = memo(({ ...props }: any) => {
  return <StyledSidebar {...props} />;
});

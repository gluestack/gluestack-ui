import React, { memo } from 'react';
import { StyledSideBarTag } from '../../styled-components';
export const SidebarGroupItemTag = memo(({ ...props }: any) => {
  return <StyledSideBarTag {...props} />;
});

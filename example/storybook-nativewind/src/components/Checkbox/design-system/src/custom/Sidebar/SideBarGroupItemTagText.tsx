import React, { memo } from 'react';
import { StyledSideBarTagText } from '../../styled-components';
export const SidebarGroupItemTagText = memo(({ ...props }: any) => {
  return <StyledSideBarTagText {...props} />;
});

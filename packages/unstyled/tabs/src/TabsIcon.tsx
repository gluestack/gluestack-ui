import React, { memo } from 'react';
import { forwardRef } from 'react';

export const TabsIcon = <StyledTabsIcon,>(
  StyledTabsIcon: React.ComponentType<StyledTabsIcon>
) =>
  memo(
    forwardRef(({ ...props }: StyledTabsIcon, ref?: any) => {
      return <StyledTabsIcon {...(props as StyledTabsIcon)} ref={ref} />;
    })
  );

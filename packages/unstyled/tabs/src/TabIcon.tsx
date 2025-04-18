import React, { memo } from 'react';
import { forwardRef } from 'react';

export const TabIcon = <StyledTabIcon,>(
  StyledTabIcon: React.ComponentType<StyledTabIcon>
) =>
  memo(
    forwardRef(({ ...props }: any, ref?: any) => {
      return <StyledTabIcon {...(props as StyledTabIcon)} ref={ref} />;
    })
  );

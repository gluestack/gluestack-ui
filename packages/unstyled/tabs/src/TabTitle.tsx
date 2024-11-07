import React, { memo } from 'react';
import { forwardRef } from 'react';

export const TabTitle = <StyledTabTitle,>(
  StyledTabTitle: React.ComponentType<StyledTabTitle>
) =>
  memo(
    forwardRef(({ ...props }: any, ref?: any) => {
      return <StyledTabTitle {...(props as StyledTabTitle)} ref={ref} />;
    })
  );

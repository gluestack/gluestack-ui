import React, { memo } from 'react';
import { forwardRef } from 'react';

export const TabsTitleText = <StyledTabsTitleText,>(
  StyledTabsTitleText: React.ComponentType<StyledTabsTitleText>
) =>
  memo(
    forwardRef(({ ...props }: StyledTabsTitleText, ref?: any) => {
      return (
        <StyledTabsTitleText {...(props as StyledTabsTitleText)} ref={ref} />
      );
    })
  );

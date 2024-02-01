import React, { memo } from 'react';
import { forwardRef } from 'react';

export const TabsContentText = <StyledTabsContentText,>(
  StyledTabsContentText: React.ComponentType<StyledTabsContentText>
) =>
  memo(
    forwardRef(({ ...props }: StyledTabsContentText, ref?: any) => {
      return (
        <StyledTabsContentText
          {...(props as StyledTabsContentText)}
          ref={ref}
        />
      );
    })
  );

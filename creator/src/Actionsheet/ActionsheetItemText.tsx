import React, { useContext, forwardRef } from 'react';
import { ActionsheetContext } from './ActionsheetItem';

export const ActionsheetItemText = (StyledActionsheetText: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { resolveContextChildrenStyle } = useContext(ActionsheetContext);

    const { ancestorStyle } = StyledActionsheetText.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });

    return (
      <StyledActionsheetText ref={ref} {...props} ancestorStyle={styledObject}>
        {children}
      </StyledActionsheetText>
    );
  });

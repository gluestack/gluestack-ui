import React, { forwardRef } from 'react';
import { useAlert } from './AlertContext';

export const AlertText = (StyledAlertText: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { resolveContextChildrenStyle } = useAlert('Alert');

    const { ancestorStyle } = StyledAlertText.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });

    return (
      <StyledAlertText ref={ref} {...props} ancestorStyle={styledObject}>
        {children}
      </StyledAlertText>
    );
  });

import React, { useContext, forwardRef } from 'react';
import { ButtonContext } from './Button';

export const ButtonText = (StyledButtonText: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { resolveContextChildrenStyle } = useContext(ButtonContext);

    const { ancestorStyle } = StyledButtonText.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });

    return (
      <StyledButtonText ref={ref} {...props} ancestorStyle={styledObject}>
        {children}
      </StyledButtonText>
    );
  });

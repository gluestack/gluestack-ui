import React, { forwardRef, useContext } from 'react';
import { ButtonContext } from './Button';

export const Spinner = (StyledButtonSpinner: any) =>
  forwardRef((props: any, ref: any) => {
    const { resolveContextChildrenStyle } = useContext(ButtonContext);

    const { ancestorStyle } = StyledButtonSpinner.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });

    return (
      <StyledButtonSpinner
        {...props}
        accessible
        accessibilityLabel="loading"
        ref={ref}
        ancestorStyle={styledObject}
      />
    );
  });

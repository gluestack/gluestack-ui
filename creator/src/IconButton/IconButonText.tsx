import React, { forwardRef, useContext } from 'react';
import { IconButtonContext } from './IconButon';

const IconButonText = (StyledIconButtonText: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { resolveContextChildrenStyle } = useContext(IconButtonContext);
    const { ancestorStyle } = StyledIconButtonText.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });
    return (
      <StyledIconButtonText ref={ref} {...props} ancestorStyle={styledObject}>
        {children}
      </StyledIconButtonText>
    );
  });

export default IconButonText;

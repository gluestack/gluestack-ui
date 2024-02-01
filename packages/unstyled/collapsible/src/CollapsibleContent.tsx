import React, { forwardRef } from 'react';
import { CollapsibleContext } from './context';
import AnimatedHeight from './AnimatedHeight';

export const CollapsibleContent = (StyledCollapsibleContent: any) =>
  forwardRef(({ children, forceMount, ...props }: any, ref?: any) => {
    const { isOpen } = React.useContext(CollapsibleContext);

    return (
      <AnimatedHeight hide={!forceMount && isOpen}>
        <StyledCollapsibleContent ref={ref} {...props}>
          {children}
        </StyledCollapsibleContent>
      </AnimatedHeight>
    );
  });

import React, { forwardRef } from 'react';
import { useTabsContext } from './Context';

export const TabsIndicator = (StyledTabsIndicator: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { selectedKey, orientation, triggerLayouts } =
      useTabsContext('TabsIndicator');

    return (
      <StyledTabsIndicator
        ref={ref}
        dataSet={{
          'selected-key': selectedKey,
          orientation,
        }}
        {...props}
      >
        {typeof children === 'function'
          ? children({ selectedKey, orientation, triggerLayouts })
          : children}
      </StyledTabsIndicator>
    );
  });

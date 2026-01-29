import React, { forwardRef } from 'react';
import { useTabsContext } from './Context';

export const TabsContent = (StyledTabsContent: any) =>
  forwardRef(({ value, forceMount = false, children, ...props }: any, ref?: any) => {
    const { selectedKey } = useTabsContext('TabsContent');

    const isSelected = selectedKey === value;

    // Don't render content unless selected or forceMount is true
    if (!isSelected && !forceMount) {
      return null;
    }

    return (
      <StyledTabsContent
        ref={ref}
        role="tabpanel"
        id={`tabpanel-${value}`}
        aria-labelledby={`tab-${value}`}
        hidden={!isSelected}
        dataSet={{
          selected: isSelected,
        }}
        {...props}
      >
        {children}
      </StyledTabsContent>
    );
  });

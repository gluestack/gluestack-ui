import React, { forwardRef } from 'react';
import { useTabsContext } from './Context';

export const TabsContentWrapper = (StyledTabsContentWrapper: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { selectedKey, contentLayouts } = useTabsContext('TabsContentWrapper');

    // Get the height of the selected content
    const selectedLayout = selectedKey ? contentLayouts.get(selectedKey) : null;
    const targetHeight = selectedLayout?.height || 0;

    return (
      <StyledTabsContentWrapper
        ref={ref}
        targetHeight={targetHeight}
        {...props}
      >
        {children}
      </StyledTabsContentWrapper>
    );
  });

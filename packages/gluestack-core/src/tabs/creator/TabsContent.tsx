import React, { forwardRef, useRef, useCallback } from 'react';
import { useTabsContext } from './Context';

export const TabsContent = (StyledTabsContent: any) =>
  forwardRef(({ value, forceMount = false, children, ...props }: any, ref?: any) => {
    const { selectedKey, registerContent, unregisterContent } = useTabsContext('TabsContent');
    const contentRef = useRef<any>(null);

    const isSelected = selectedKey === value;

    // Handle layout measurement
    const handleLayout = useCallback(
      (event: any) => {
        const { height, width, x, y } = event.nativeEvent.layout;
        registerContent(value, { height, width, x, y });
      },
      [value, registerContent]
    );

    // Cleanup on unmount
    React.useEffect(() => {
      return () => {
        unregisterContent(value);
      };
    }, [value, unregisterContent]);

    // Don't render content unless selected or forceMount is true
    if (!isSelected && !forceMount) {
      return null;
    }

    return (
      <StyledTabsContent
        ref={contentRef}
        role="tabpanel"
        id={`tabpanel-${value}`}
        aria-labelledby={`tab-${value}`}
        onLayout={handleLayout}
        dataSet={{
          selected: isSelected,
        }}
        {...props}
      >
        {children}
      </StyledTabsContent>
    );
  });

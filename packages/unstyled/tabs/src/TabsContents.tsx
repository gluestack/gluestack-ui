import React, { memo, useMemo, forwardRef } from 'react';

export const TabsContents = <T,>(StyledTabsContents: any) =>
  memo(
    forwardRef(({ children, ...props }: T & { children?: any }, ref?: any) => {
      let tabIndex = 0;
      const modiefiedTabsContents = useMemo(
        () =>
          React.Children.toArray(children).map((child: any) => {
            return React.cloneElement(child, {
              key: child.key ?? `tabpanel-${tabIndex}`,
              value: `tab-${tabIndex++}`,
              ...child?.props,
            });
          }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [children]
      );

      return (
        <StyledTabsContents {...props} ref={ref}>
          {modiefiedTabsContents}
        </StyledTabsContents>
      );
    })
  );

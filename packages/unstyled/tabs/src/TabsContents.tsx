import React, { memo, useMemo } from 'react';
import { forwardRef } from 'react';

export const TabsContents = <StyledTabsContentsProps,>(
  StyledTabsContents: React.ComponentType<StyledTabsContentsProps>
) =>
  memo(
    forwardRef(
      (
        { children, ...props }: StyledTabsContentsProps & { children?: any },
        ref?: any
      ) => {
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
          <StyledTabsContents {...(props as StyledTabsContentsProps)} ref={ref}>
            {modiefiedTabsContents}
          </StyledTabsContents>
        );
      }
    )
  );

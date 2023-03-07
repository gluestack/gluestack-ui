import React, { memo, useMemo } from 'react';
import { forwardRef } from 'react';

export const TabPanels = <StyledTabPanelsProps,>(
  StyledTabPanels: React.ComponentType<StyledTabPanelsProps>
) =>
  memo(
    forwardRef(
      (
        { children, ...props }: StyledTabPanelsProps & { children?: any },
        ref?: any
      ) => {
        let tabIndex = 0;
        const modiefiedTabPanels = useMemo(
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
          <StyledTabPanels {...(props as StyledTabPanelsProps)} ref={ref}>
            {modiefiedTabPanels}
          </StyledTabPanels>
        );
      }
    )
  );

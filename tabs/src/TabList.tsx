import React, { memo, useMemo } from 'react';
import { forwardRef } from 'react';

export const TabList = <StyledTabList,>(
  StyledTabList: React.ComponentType<StyledTabList>
) =>
  memo(
    forwardRef(
      (
        {
          children,
          orientation = 'horizontal',
          ...props
        }: StyledTabList & {
          children?: any;
          orientation: 'horizontal' | 'vertical';
        },
        ref?: any
      ) => {
        let tabIndex = 0;
        const modifiedTabList = useMemo(
          () =>
            React.Children.toArray(children).map((tab: any) => {
              return React.cloneElement(tab, {
                key: tab.key ?? `tab-${tabIndex}`,
                value: `tab-${tabIndex++}`,
                ...tab?.props,
              });
            }),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [children]
        );

        return (
          <StyledTabList
            role="tablist"
            flexDirection={orientation === 'vertical' ? 'column' : 'row'}
            {...(props as StyledTabList)}
            ref={ref}
          >
            {modifiedTabList}
          </StyledTabList>
        );
      }
    )
  );

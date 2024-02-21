import React, { memo, useEffect, useMemo, forwardRef } from 'react';
import { FocusScope } from '@react-native-aria/focus';
import { useTab } from './TabProvider';
import { ITabsListProps } from './types';

export const TabsList = <T,>(StyledTabsList: any) =>
  memo(
    forwardRef(
      ({ children, loop = true, ...props }: T & ITabsListProps, ref?: any) => {
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

        const { onLoopChange, orientation } = useTab('TabContext');

        useEffect(() => {
          onLoopChange(loop);
        }, [loop, onLoopChange]);

        return (
          <StyledTabsList
            role="tablist"
            ref={ref}
            //add aria-label
            aria-orientation={orientation}
            {...props}
          >
            <FocusScope>{modifiedTabList}</FocusScope>
          </StyledTabsList>
        );
      }
    )
  );

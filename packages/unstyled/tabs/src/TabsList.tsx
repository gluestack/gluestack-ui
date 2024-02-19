import { FocusScope } from '@react-native-aria/focus';
import React, { memo, useEffect, useMemo } from 'react';
import { forwardRef } from 'react';
import { useTab } from './TabProvider';

export const TabsList = <StyledTabsList,>(
  StyledTabsList: React.ComponentType<StyledTabsList>
) =>
  memo(
    forwardRef(
      (
        {
          children,
          loop = true,
          ...props
        }: StyledTabsList & {
          children?: any;
          loop: boolean;
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

        const { onLoopChange, orientation } = useTab('TabContext');

        useEffect(() => {
          onLoopChange(loop);
        }, [loop, onLoopChange]);

        return (
          <StyledTabsList
            role="tablist"
            //give aria-label
            {...(props as StyledTabsList)}
            ref={ref}
            aria-orientation={orientation}
          >
            <FocusScope>{modifiedTabList}</FocusScope>
          </StyledTabsList>
        );
      }
    )
  );

import { FocusScope } from '@react-native-aria/focus';
import React, { memo, useEffect, useMemo } from 'react';
import { forwardRef } from 'react';
import { useTab } from './TabProvider';

export const TabList = <StyledTabList,>(
  StyledTabList: React.ComponentType<StyledTabList>
) =>
  memo(
    forwardRef(
      (
        {
          children,
          orientation = 'horizontal',
          variant,
          loop = true,
          ...props
        }: StyledTabList & {
          children?: any;
          orientation: 'horizontal' | 'vertical';
          variant: 'scrollable' | null;
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

        const { onLoopChange } = useTab('TabContext');

        useEffect(() => {
          onLoopChange(loop);
        }, [loop, onLoopChange]);

        return (
          <StyledTabList
            role="tablist"
            flexDirection={orientation === 'vertical' ? 'column' : 'row'}
            overflowX={
              orientation === 'horizontal' && variant === 'scrollable'
                ? 'scroll'
                : 'hidden'
            }
            overflowY={
              orientation === 'vertical' && variant === 'scrollable'
                ? 'scroll'
                : 'hidden'
            }
            {...(props as StyledTabList)}
            ref={ref}
          >
            <FocusScope>{modifiedTabList}</FocusScope>
          </StyledTabList>
        );
      }
    )
  );

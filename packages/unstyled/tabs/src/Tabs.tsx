import React, { memo, useState } from 'react';
import { forwardRef } from 'react';
import { TabProvider } from './TabProvider';
import { useControllableState } from '@gluestack-ui/hooks';
import type { ITabsProps } from './types';

export const Tabs = <StyledTabs,>(
  StyledTabs: React.ComponentType<StyledTabs>
) =>
  memo(
    forwardRef(
      (
        {
          value,
          onValueChange,
          defaultValue,
          ...props
        }: StyledTabs & ITabsProps,
        ref?: any
      ) => {
        const [currentActiveTab, setCurrentActiveTab] = useControllableState({
          value,
          defaultValue,
          onChange: (val: any) => {
            onValueChange && onValueChange(val);
          },
        });

        const [wrapList, setWrapList] = useState(true);
        return (
          <TabProvider
            currentActiveTab={currentActiveTab}
            onValueChange={setCurrentActiveTab}
            onLoopChange={setWrapList}
            loop={wrapList}
            orientation={props?.orientation ?? 'horizontal'}
          >
            <StyledTabs {...(props as StyledTabs)} ref={ref} />
          </TabProvider>
        );
      }
    )
  );

import React, { memo } from 'react';
import { forwardRef } from 'react';
import { TabProvider } from './TabProvider';

export const Tabs = <StyledTabs,>(
  StyledTabs: React.ComponentType<StyledTabs>
) =>
  memo(
    forwardRef(
      ({ value, ...props }: StyledTabs & { value?: string }, ref?: any) => {
        const DEFAULT_TAB = 'tab-0';
        const [currentActiveTab, setCurrentActiveTab] = React.useState(
          value ?? DEFAULT_TAB
        );

        const onChange = (currentValue: string) =>
          setCurrentActiveTab(currentValue);

        return (
          <TabProvider currentActiveTab={currentActiveTab} onChange={onChange}>
            <StyledTabs {...(props as StyledTabs)} ref={ref} />
          </TabProvider>
        );
      }
    )
  );

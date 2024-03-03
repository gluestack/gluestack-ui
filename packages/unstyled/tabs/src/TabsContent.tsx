import React, { memo } from 'react';
import { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useTab } from './TabProvider';
import { ITabsContentProps } from './types';

export const TabsContent = <T,>(StyledTabsContent: any) =>
  memo(
    forwardRef(
      ({ children, value, ...props }: T & ITabsContentProps, ref?: any) => {
        const { currentActiveTab } = useTab('TabContext');

        const isActive = currentActiveTab === value;

        if (isActive)
          return (
            <StyledTabsContent
              role={Platform.OS === 'web' ? 'tabpanel' : undefined}
              id={`panel-${value}`}
              aria-labelledby={`tab-${value}`}
              {...props}
              ref={ref}
              aria-selected={true}
            >
              {children}
            </StyledTabsContent>
          );
        return <></>;
      }
    )
  );

import React, { memo } from 'react';
import { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useTab } from './TabProvider';

export const TabsContent = <StyledTabsContent,>(
  StyledTabsContent: React.ComponentType<StyledTabsContent>
) =>
  memo(
    forwardRef(
      (
        { value, ...props }: StyledTabsContent & { value?: string },
        ref?: any
      ) => {
        const { currentActiveTab } = useTab('TabContext');

        const isActive = value === currentActiveTab;

        if (isActive)
          return (
            <StyledTabsContent
              // tabIndex={value === currentActiveTab ? 0 : -1}
              role={Platform.OS === 'web' ? 'tabPanel' : undefined}
              {...(props as StyledTabsContent)}
              // style={{ display: isActive ? 'flex' : 'none' }}
              ref={ref}
            />
          );
        return <></>;
      }
    )
  );

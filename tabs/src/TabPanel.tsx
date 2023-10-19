import React, { memo } from 'react';
import { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useTab } from './TabProvider';

export const TabPanel = <StyledTabPanel,>(
  StyledTabPanel: React.ComponentType<StyledTabPanel>
) =>
  memo(
    forwardRef(
      ({ value, ...props }: StyledTabPanel & { value?: string }, ref?: any) => {
        const { currentActiveTab } = useTab('TabContext');

        const isActive = value === currentActiveTab;

        return (
          <StyledTabPanel
            role={Platform.OS === 'web' ? 'tabpanel' : undefined}
            {...(props as StyledTabPanel)}
            style={{ display: isActive ? 'flex' : 'none' }}
            ref={ref}
          />
        );
      }
    )
  );

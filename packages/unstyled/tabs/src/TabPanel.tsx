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

        if (isActive)
          return (
            <StyledTabPanel
              tabIndex={value === currentActiveTab ? 0 : -1}
              role={Platform.OS === 'web' ? 'tabpanel' : undefined}
              {...(props as StyledTabPanel)}
              //@ts-ignore
              style={[{ display: isActive ? 'flex' : 'none' }, props.style]}
              ref={ref}
            />
          );
        return <></>;
      }
    )
  );

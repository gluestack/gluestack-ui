import React, { forwardRef } from 'react';
import { useTabsTriggerContext } from './Context';

export const TabsTriggerText = (StyledTabsTriggerText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const context = useTabsTriggerContext('TabsTriggerText');
    const { isSelected, isDisabled, isHovered } = context;

    return (
      <StyledTabsTriggerText
        ref={ref}
        dataSet={{
          selected: isSelected,
          disabled: isDisabled,
          hover: isHovered,
        }}
        {...props}
      >
        {children}
      </StyledTabsTriggerText>
    );
  });

import React, { forwardRef } from 'react';
import { useTabsTriggerContext } from './Context';

export const TabsTriggerIcon = (StyledTabsTriggerIcon: any) =>
  forwardRef(({ as: AsComp, ...props }: any, ref?: any) => {
    const context = useTabsTriggerContext('TabsTriggerIcon');
    const { isSelected, isDisabled, isHovered } = context;

    return (
      <StyledTabsTriggerIcon
        ref={ref}
        as={AsComp}
        dataSet={{
          selected: isSelected,
          disabled: isDisabled,
          hover: isHovered,
        }}
        {...props}
      />
    );
  });

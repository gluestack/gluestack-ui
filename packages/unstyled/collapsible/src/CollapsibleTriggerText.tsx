import React, { forwardRef } from 'react';
export const CollapsibleTriggerText = (StyledCollapsibleTriggerText: any) =>
  forwardRef((props, ref?: any) => {
    return <StyledCollapsibleTriggerText {...props} ref={ref} />;
  });

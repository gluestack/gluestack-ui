import React from 'react';
import { UIContext } from '../UIProvider';

export function CheckboxIndicator({ children, ...props }: any) {
  const { StyledCheckboxIndicator } = React.useContext(UIContext);

  return (
    <StyledCheckboxIndicator {...props}>{children}</StyledCheckboxIndicator>
  );
}

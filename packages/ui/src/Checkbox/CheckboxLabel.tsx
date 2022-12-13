import React from 'react';
import { UIContext } from '../UIProvider';

export function CheckboxLabel({ children, ...props }: any) {
  const { StyledCheckboxLabel } = React.useContext(UIContext);

  return <StyledCheckboxLabel {...props}>{children}</StyledCheckboxLabel>;
}

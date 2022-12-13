import React from 'react';
import { UIContext } from '../UIProvider';

export function CheckboxIcon({ children, ...props }: any) {
  const { StyledCheckboxIcon } = React.useContext(UIContext);

  return <StyledCheckboxIcon {...props}>{children}</StyledCheckboxIcon>;
}

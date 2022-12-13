import React from 'react';
import { UIContext } from '../UIProvider';
import type { ViewProps } from 'react-native';

export function InputIcon({ children, ...props }: ViewProps) {
  const { StyledInputIcon } = React.useContext(UIContext);

  return <StyledInputIcon {...props}>{children}</StyledInputIcon>;
}

import React, { createContext } from 'react';
import type { IStackProps } from './types';
import { UIContext } from '@universa11y/ui-provider';
export const StackContext = createContext<any>({});

export function Stack({ ...props }: IStackProps) {
  const { Stack: StyledStack } = React.useContext(UIContext);

  return <StyledStack {...props}></StyledStack>;
}

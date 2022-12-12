import React, { createContext } from 'react';
import type { IStackProps } from './types';
import { UIContext } from '../UIProvider';

export const CheckboxContext = createContext<any>({});

export function Checkbox({ ...props }: IStackProps) {
  const {
    StyledCheckbox,
    StyledCheckboxIndicator,
    StyledCheckboxIcon,
    StyledCheckboxLabel,
  } = React.useContext(UIContext);

  return (
    <StyledCheckbox {...props}>
      <StyledCheckboxIndicator>
        <StyledCheckboxIcon />
      </StyledCheckboxIndicator>
      <StyledCheckboxLabel>Hello</StyledCheckboxLabel>
      {/* <VisuallyHidden>

    </VisuallyHidden> */}
    </StyledCheckbox>
  );
}

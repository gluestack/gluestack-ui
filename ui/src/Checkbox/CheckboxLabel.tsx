import React from 'react';
import { UIContext } from '../UIProvider';
import { useCheckbox } from './CheckboxProvider';

export function CheckboxLabel({ children, ...props }: any) {
  const { StyledCheckboxLabel } = React.useContext(UIContext);

  const { isHovered, isChecked, isDisabled, isFocusVisible } =
    useCheckbox('CheckboxContext');

  return (
    <StyledCheckboxLabel
      states={{
        hover: isHovered,
        checked: isChecked,
        disabled: isDisabled,
        focusVisible: isFocusVisible,
      }}
      {...props}
    >
      {children}
    </StyledCheckboxLabel>
  );
}

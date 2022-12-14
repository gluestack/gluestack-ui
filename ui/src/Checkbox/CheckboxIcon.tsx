import React from 'react';
import { UIContext } from '../UIProvider';
import { useCheckbox } from './CheckboxProvider';

export function CheckboxIcon({ children, ...props }: any) {
  const { StyledCheckboxIcon } = React.useContext(UIContext);
  const { isHovered, isChecked, isDisabled, isFocusVisible } =
    useCheckbox('CheckboxContext');

  if (isChecked)
    return (
      <StyledCheckboxIcon
        states={{
          hover: isHovered,
          checked: isChecked,
          disabled: isDisabled,
          focusVisible: isFocusVisible,
        }}
        {...props}
      >
        {children}
      </StyledCheckboxIcon>
    );

  return null;
}

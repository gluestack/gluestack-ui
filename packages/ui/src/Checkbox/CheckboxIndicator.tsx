import React from 'react';
import { UIContext } from '../UIProvider';
import { useCheckbox } from './CheckboxProvider';

export function CheckboxIndicator({ children, ...props }: any) {
  const { StyledCheckboxIndicator } = React.useContext(UIContext);
  const { isChecked, isDisabled, isFocusVisible, isHovered } =
    useCheckbox('CheckboxContext');

  return (
    <StyledCheckboxIndicator
      states={{
        checked: isChecked,
        focusVisible: isFocusVisible,
        disabled: isDisabled,
        hover: isHovered,
      }}
      {...props}
    >
      {children}
    </StyledCheckboxIndicator>
  );
}

import React from 'react';
import { UIContext } from '../UIProvider';
import { useRadio } from './RadioProvider';

export function RadioLabel({ children, ...props }: any) {
  const { StyledRadioLabel } = React.useContext(UIContext);

  const { isHovered, isChecked, isDisabled, isFocusVisible } =
    useRadio('RadioContext');

  return (
    <StyledRadioLabel
      states={{
        hover: isHovered,
        checked: isChecked,
        disabled: isDisabled,
        focusVisible: isFocusVisible,
      }}
      {...props}
    >
      {children}
    </StyledRadioLabel>
  );
}

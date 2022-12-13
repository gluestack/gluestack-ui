import React from 'react';
import { UIContext } from '../UIProvider';
import { useCheckbox } from './CheckboxProvider';

export function CheckboxIcon({ children, ...props }: any) {
  const { StyledCheckboxIcon } = React.useContext(UIContext);
  const { isHovered, isChecked, isDisabled, isFocusVisible } =
    useCheckbox('CheckboxContext');

  return (
    <StyledCheckboxIcon
      states={{
        hover: isHovered,
        checked: isChecked,
        disabled: isDisabled,
        focusVisible: isFocusVisible,
      }}
      // sx={{
      //   state: {
      //     checked: {
      //       style: {
      //         bg: '$amber.500',
      //       },
      //     },
      //   },
      // }}
      {...props}
    >
      {children}
    </StyledCheckboxIcon>
  );
}

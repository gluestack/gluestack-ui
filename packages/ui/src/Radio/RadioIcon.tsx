import React from 'react';
import { UIContext } from '../UIProvider';
import { useRadio } from './RadioProvider';

export function RadioIcon({ children, ...props }: any) {
  const { StyledRadioIcon } = React.useContext(UIContext);
  const { isHovered, isChecked, isDisabled, isFocusVisible } =
    useRadio('RadioContext');

  return (
    <StyledRadioIcon
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
    </StyledRadioIcon>
  );
}

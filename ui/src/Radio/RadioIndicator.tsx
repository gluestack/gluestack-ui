import React from 'react';
import { UIContext } from '../UIProvider';
import { useRadio } from './RadioProvider';

export function RadioIndicator({ children, ...props }: any) {
  const { StyledRadioIndicator } = React.useContext(UIContext);
  const { isChecked, isDisabled, isFocusVisible } = useRadio('RadioContext');

  return (
    <StyledRadioIndicator
      states={{
        checked: isChecked,
        focusVisible: isFocusVisible,
        disabled: isDisabled,
      }}
      {...props}
    >
      {children}
    </StyledRadioIndicator>
  );
}

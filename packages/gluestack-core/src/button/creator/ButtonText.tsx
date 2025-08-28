import React, { forwardRef } from 'react';
import { useButtonContext } from './Context';

export const ButtonText = (StyledButtonText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { hover, focus, active, disabled, focusVisible } = useButtonContext();

    return (
      <StyledButtonText
        ref={ref}
        {...props}
        states={{
          hover: hover,
          focus: focus,
          active: active,
          disabled: disabled,
          focusVisible: focusVisible,
        }}
        dataSet={{
          hover: hover,
          focus: focus,
          active: active,
          disabled: disabled,
          focusVisible: focusVisible,
        }}
      >
        {children}
      </StyledButtonText>
    );
  });

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
        // data attributes for uniwind
        data-hover={hover ? 'true' : 'false'}
        data-focus={focus ? 'true' : 'false'}
        data-active={active ? 'true' : 'false'}
        data-disabled={disabled ? 'true' : 'false'}
        data-focus-visible={focusVisible ? 'true' : 'false'}
        // data attributes for nativewind
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

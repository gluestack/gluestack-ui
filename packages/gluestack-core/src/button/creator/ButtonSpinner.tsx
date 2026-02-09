import React, { forwardRef } from 'react';
import { useButtonContext } from './Context';
export const ButtonSpinner = (StyledButtonSpinner: any) =>
  forwardRef((props: any, ref?: any) => {
    const { hover, focus, active, disabled, focusVisible } = useButtonContext();
    return (
      <StyledButtonSpinner
        {...props}
        tabIndex={0}
        aria-label="loading"
        ref={ref}
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
        states={{
          hover: hover,
          focus: focus,
          active: active,
          disabled: disabled,
          focusVisible: focusVisible,
        }}
      />
    );
  });

import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';

export const SelectInput = (StyledSelectInput: any) =>
  forwardRef(({ placeholder, ...props }: any, ref?: any) => {
    const { setValue, value, label, isDisabled } =
      React.useContext(SelectContext);
    return (
      <StyledSelectInput
        ref={ref}
        states={{
          disabled: isDisabled,
        }}
        disabled={isDisabled}
        aria-hidden={true}
        editable={false}
        focusable={false}
        importantForAccessibility="no"
        placeholder={placeholder}
        value={label ? label : value ? value : ''}
        pointerEvents="none"
        onChangeText={(text: string) => setValue(text)}
        {...props}
      />
    );
  });

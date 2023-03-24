import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';

export const SelectInput = (StyledSelectInput: any) =>
  forwardRef(({ placeholder, ...props }: any, ref: any) => {
    const {
      isHovered,
      isFocused,
      isDisabled,
      hoverProps,
      isReadOnly,
      isInvalid,
      focusProps,
      isFocusVisible,
      setValue,
      value,
    } = React.useContext(SelectContext);

    return (
      <StyledSelectInput
        states={{
          hover: isHovered,
          active: isFocused,
          disable: isDisabled,
          invalid: isInvalid,
          readonly: isReadOnly,
          focusvisible: isFocusVisible,
        }}
        ref={ref}
        aria-hidden={true}
        editable={false}
        focusable={false}
        importantForAccessibility="no"
        placeholder={placeholder}
        value={value ? value : ''}
        pointerEvents="none"
        {...hoverProps}
        {...focusProps}
        {...props}
        onChangeText={(text: string) => setValue(text)}
      />
    );
  });

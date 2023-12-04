import React, { forwardRef, useEffect } from 'react';
import { SelectContext } from './SelectContext';

export const SelectInput = (StyledSelectInput: any) =>
  forwardRef(({ placeholder: placeholderProp, ...props }: any, ref?: any) => {
    const { setValue, value, label, isDisabled, placeholder, setPlaceholder } =
      React.useContext(SelectContext);

    useEffect(() => {
      setPlaceholder && setPlaceholder(placeholderProp);
    }, [placeholderProp, setPlaceholder]);

    return (
      <StyledSelectInput
        ref={ref}
        states={{
          disabled: isDisabled,
        }}
        disabled={isDisabled}
        aria-hidden={true}
        editable={false}
        tabIndex={-1}
        pointerEvents="none"
        // android
        importantForAccessibility="no"
        placeholder={placeholder}
        value={label ? label : value ? value : ''}
        onChangeText={(text: string) => setValue(text)}
        {...props}
      />
    );
  });

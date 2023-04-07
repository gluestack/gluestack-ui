import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';

export const SelectInput = (StyledSelectInput: any) =>
  forwardRef(({ placeholder, ...props }: any, ref?: any) => {
    const { setValue, value, isDisabled } = React.useContext(SelectContext);
    return (
      <StyledSelectInput
        ref={ref}
        disabled={isDisabled}
        aria-hidden={true}
        editable={false}
        focusable={false}
        importantForAccessibility="no"
        placeholder={placeholder}
        value={value ? value : ''}
        pointerEvents="none"
        onChangeText={(text: string) => setValue(text)}
        {...props}
      />
    );
  });

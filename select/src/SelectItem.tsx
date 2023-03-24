import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

import { SelectPortalContext } from './SelectContext';

export const SelectItem = (StyledSelectItem: any, StyledSelectItemText) =>
  forwardRef(({ isDisabled, label, value }: any, ref: any) => {
    const { onValueChange, handleClose } =
      React.useContext(SelectPortalContext);

    if (Platform.OS !== 'web') {
      return (
        <StyledSelectItem
          ref={ref}
          onPress={() => {
            if (!isDisabled) {
              onValueChange(value);
              handleClose();
            }
          }}
        >
          <StyledSelectItemText>{label}</StyledSelectItemText>
        </StyledSelectItem>
      );
    }
    return (
      <option value={value} disabled={isDisabled} ref={ref}>
        {label}
      </option>
    );
  });

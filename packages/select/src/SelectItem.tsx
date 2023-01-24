import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectItem = (StyledSelectItem: any) =>
  forwardRef(({ children, isDisabled, label, value }: any) => {
    if (Platform.OS !== 'web') {
      return <StyledSelectItem>{children}</StyledSelectItem>;
    }
    return (
      <option value={value} disabled={isDisabled}>
        {label}
      </option>
    );
  });

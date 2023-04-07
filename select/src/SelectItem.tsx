import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

import { SelectPortalContext } from './SelectContext';

export const SelectItem = (StyledSelectItem: any, StyledSelectItemText: any) =>
  forwardRef(
    (
      {
        isDisabled,
        isFocused,
        isFocusVisible,
        isHovered,
        isInvalid,
        label,
        value,
      }: any,
      ref?: any
    ) => {
      const {
        onValueChange,
        handleClose,
        value: activeValue,
      } = React.useContext(SelectPortalContext);

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
            states={{
              focus: isFocused,
              focusvisible: isFocusVisible,
              hover: isHovered,
              disabled: isDisabled,
              invalid: isInvalid,
              active: activeValue === value,
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
    }
  );

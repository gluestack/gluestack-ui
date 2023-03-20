import React, { forwardRef } from 'react';
import { Platform, Text } from 'react-native';

export const SelectItem = (StyledSelectItem: any) =>
  forwardRef(
    ({
      // children,
      isDisabled,
      label,
      value,
    }: any, ref?: any) => {
      if (Platform.OS !== 'web') {
        return (
          <StyledSelectItem>
            <Text>{label}</Text>
          </StyledSelectItem>
        );
      }
      return (
        <option value={value} disabled={isDisabled}>
          {label}
        </option>
      );
    }
  );

import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { SelectItemListContext } from './SelectContext';

export const SelectItem = (StyledSelectItem: any, Actionsheet: any) =>
  forwardRef(({ isDisabled, label, value }: any, ref: any) => {
    const { onValueChange, handleClose } = React.useContext(
      SelectItemListContext
    );

    if (Platform.OS !== 'web') {
      return (
        <Actionsheet.Item
          ref={ref}
          onPress={() => {
            if (!isDisabled) {
              onValueChange(value);
              handleClose();
            }
          }}
        >
          <Actionsheet.ItemText>{label}</Actionsheet.ItemText>
        </Actionsheet.Item>
      );
    }
    return (
      <option value={value} disabled={isDisabled} ref={ref}>
        {label}
      </option>
    );
  });

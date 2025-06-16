import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

import { SelectPortalContext } from './SelectContext';

export const SelectItem = (StyledSelectItem: any, StyledSelectItemText: any) =>
  forwardRef(
    (
      {
        // isDisabled,
        // isFocused,
        // isFocusVisible,
        // isHovered,
        // isInvalid,
        label,
        value,
        textStyle,
        ...props
      }: any,
      ref?: any
    ) => {
      const {
        onValueChange,
        handleClose,
        value: activeValue,
        setLabel,
      } = React.useContext(SelectPortalContext);

      if (Platform.OS !== 'web') {
        return (
          <StyledSelectItem
            ref={ref}
            onPress={() => {
              if (!props.isDisabled) {
                onValueChange(value);
                setLabel(label);
                handleClose();
              }
            }}
            {...props}
            states={{
              checked: activeValue === value,
            }}
            dataSet={{
              checked: activeValue == value ? 'true' : 'false',
            }}
          >
            <StyledSelectItemText {...textStyle}>{label}</StyledSelectItemText>
          </StyledSelectItem>
        );
      }

      return (
        <option value={value} disabled={props.isDisabled} ref={ref}>
          {label}
        </option>
      );
    }
  );

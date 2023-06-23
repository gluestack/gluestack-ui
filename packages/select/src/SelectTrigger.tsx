import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { Keyboard } from 'react-native';

export const SelectTrigger = (StyledSelectTrigger: any) =>
  forwardRef(({ children, accessibilityLabel, ...props }: any, ref?: any) => {
    const {
      isDisabled,
      hoverRef,
      setIsOpen,
      onOpen,
      isFocused,
      isFocusVisible,
      isHovered,
      isInvalid,
      isReadOnly,
    } = React.useContext(SelectContext);

    return (
      <StyledSelectTrigger
        onPress={() => {
          if (!isReadOnly) {
            Keyboard.dismiss();
            setIsOpen(true);
            onOpen && onOpen();
          }
        }}
        states={{
          focus: isFocused,
          focusVisible: isFocusVisible,
          hover: isHovered,
          disabled: isDisabled,
          invalid: isInvalid,
        }}
        disabled={isDisabled}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        ref={mergeRefs([ref, hoverRef])}
        focusable={false}
        {...props}
      >
        {children}
      </StyledSelectTrigger>
    );
  });

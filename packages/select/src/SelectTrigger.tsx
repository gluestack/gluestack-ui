import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { Keyboard } from 'react-native';

export const SelectTrigger = (
  StyledSelectTrigger: any,
  StyledSelectInput: any
) =>
  forwardRef(({ placeholder, accessibilityLabel, ...props }: any, ref: any) => {
    const {
      isHovered,
      isFocused,
      isDisabled,
      hoverRef,
      hoverProps,
      isReadOnly,
      isInvalid,
      focusProps,
      isFocusVisible,
      setIsOpen,
      onOpen,
      setValue,
      value,
    } = React.useContext(SelectContext);

    return (
      <StyledSelectTrigger
        onPress={() => {
          Keyboard.dismiss();
          setIsOpen(true);
          onOpen && onOpen();
        }}
        disabled={isDisabled}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        ref={mergeRefs([ref, hoverRef])}
        {...props}
      >
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
      </StyledSelectTrigger>
    );
  });

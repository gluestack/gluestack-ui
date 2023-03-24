import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { Keyboard } from 'react-native';

export const SelectTrigger = (StyledSelectTrigger: any) =>
  forwardRef(({ children, accessibilityLabel, ...props }: any, ref: any) => {
    const { isDisabled, hoverRef, setIsOpen, onOpen } =
      React.useContext(SelectContext);

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
        {children}
      </StyledSelectTrigger>
    );
  });

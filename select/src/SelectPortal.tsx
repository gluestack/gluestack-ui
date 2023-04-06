import React, { forwardRef } from 'react';
import { SelectContext, SelectPortalContext } from './SelectContext';
import { StyleSheet, Platform } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';

export const SelectPortal = (StyledSelectPortal: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const {
      isOpen,
      handleClose,
      closeOnOverlayClick,
      isDisabled,
      hoverRef,
      hoverProps,
      focusProps,
      setValue,
      value,
      setFocused,
      ...portalProps
    } = React.useContext(SelectContext);

    if (Platform.OS !== 'web') {
      return (
        <StyledSelectPortal
          isOpen={isOpen}
          onClose={handleClose}
          closeOnOverlayClick={closeOnOverlayClick}
          {...props}
          ref={ref}
        >
          <SelectPortalContext.Provider
            value={{
              isOpen,
              handleClose,
              closeOnOverlayClick,
              isDisabled,
              hoverRef,
              hoverProps,
              focusProps,
              setValue,
              value,
              setFocused,
              ...portalProps,
            }}
          >
            {children}
          </SelectPortalContext.Provider>
        </StyledSelectPortal>
      );
    }

    const tempFix = '__GluestackPlaceholder__';

    return (
      <>
        <select
          disabled={isDisabled}
          {...focusProps}
          {...hoverProps}
          onChange={(e: any) => {
            setValue(e.target.value);
          }}
          ref={mergeRefs([ref, hoverRef])}
          value={value === null ? tempFix : value}
          aria-label="placeholder"
          style={StyleSheet.flatten([
            {
              appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0,
              zIndex: 1,
            },
          ])}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        >
          {children}
        </select>
      </>
    );
  });

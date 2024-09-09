import React, { forwardRef } from 'react';
import { SelectContext, SelectPortalContext } from './SelectContext';
import { StyleSheet, Platform } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';
const PLACEHOLDER_OPTION = '__GluestackPlaceholder__';

export const SelectPortal = (StyledSelectPortal: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const {
      isOpen,
      handleClose,
      closeOnOverlayClick,
      isDisabled,
      hoverRef,
      hoverProps,
      focusProps,
      onValueChange,
      value,
      setFocused,
      setValue,
      label,
      setLabel,
      onOpen,
      placeholder,
      isReadOnly,
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
              value: !value ? PLACEHOLDER_OPTION : value,
              setLabel,
              label,
              isReadOnly,
              setFocused,
              onValueChange,
              placeholder,
              ...portalProps,
            }}
          >
            {children}
          </SelectPortalContext.Provider>
        </StyledSelectPortal>
      );
    }

    return (
      <>
        <select
          disabled={isDisabled || isReadOnly}
          {...focusProps}
          onMouseEnter={hoverProps.onHoverIn}
          onMouseLeave={hoverProps.onHoverOut}
          onChange={(e: any) => {
            onValueChange(e.target.value);
            setLabel(e.target.options[e.target.selectedIndex].text);
            handleClose();
          }}
          onKeyDown={(e) => {
            if (e.code === 'Space') {
              onOpen && onOpen();
            }
          }}
          ref={mergeRefs([ref, hoverRef])}
          value={!value ? PLACEHOLDER_OPTION : value}
          aria-label={placeholder}
          aria-readonly={isReadOnly}
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
              cursor: isDisabled ? 'not-allowed' : 'pointer',
            },
          ])}
          onClick={onOpen}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        >
          <option disabled value={PLACEHOLDER_OPTION}>
            {placeholder}
          </option>
          {children}
        </select>
      </>
    );
  });

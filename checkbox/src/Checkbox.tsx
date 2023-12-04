import React, { forwardRef, useContext } from 'react';
import { CheckboxProvider } from './CheckboxProvider';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocus } from '@react-native-aria/focus';
import { useToggleState } from '@react-stately/toggle';
import { useCheckbox, useCheckboxGroupItem } from '@react-native-aria/checkbox';
import { CheckboxGroupContext } from './CheckboxGroup';
import {
  combineContextAndProps,
  mergeRefs,
  stableHash,
  composeEventHandlers,
} from '@gluestack-ui/utils';
import { useFormControlContext } from '@gluestack-ui/form-control';
export const Checkbox = (StyledCheckbox: any) =>
  forwardRef(
    (
      {
        _onPress,
        onPressIn,
        onPressOut,
        onHoverIn,
        onHoverOut,
        onFocus,
        onBlur,
        children,
        ...props
      }: any,
      ref?: any
    ) => {
      const {
        isHovered: isHoveredProp,
        isChecked: isCheckedProp,
        isDisabled: isDisabledProp,
        isInvalid: isInvalidProp,
        isReadOnly: isReadOnlyProp,
        isPressed: isPressedProp,
        isFocused: isFocusedProp,
        isIndeterminate: isIndeterminateProp,
        isFocusVisible,
      } = props;
      const formControlContext = useFormControlContext();

      const { isInvalid, isReadOnly, isIndeterminate, ...combinedProps } =
        combineContextAndProps(formControlContext, props);

      const checkboxGroupContext = useContext(CheckboxGroupContext);
      const state = useToggleState({
        ...combinedProps,
        defaultSelected: props.defaultIsChecked,
        isSelected: isCheckedProp,
      });

      const _ref = React.useRef(null);
      const mergedRef = mergeRefs([ref, _ref]);

      const { inputProps: groupItemInputProps } = checkboxGroupContext
        ? // eslint-disable-next-line react-hooks/rules-of-hooks
          useCheckboxGroupItem(
            {
              ...combinedProps,
              'aria-label': combinedProps['aria-label'],
              'value': combinedProps.value,
            },
            checkboxGroupContext.state,
            //@ts-ignore
            mergedRef
          )
        : // eslint-disable-next-line react-hooks/rules-of-hooks
          useCheckbox(
            {
              ...combinedProps,
              'aria-label': combinedProps['aria-label'],
            },
            state,
            //@ts-ignore
            mergedRef
          );

      const inputProps = React.useMemo(
        () => groupItemInputProps,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
          groupItemInputProps.checked,
          groupItemInputProps.disabled,
          groupItemInputProps,
        ]
      );

      const contextCombinedProps = React.useMemo(() => {
        return { ...checkboxGroupContext, ...combinedProps };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [stableHash(combinedProps)]);

      const { hoverProps, isHovered } = useHover(isHoveredProp, _ref);

      const { focusProps, isFocused } = useFocus();

      const { checked: isChecked, disabled: isDisabled } = inputProps;
      const { pressProps, isPressed } = usePress({
        isDisabled: isDisabled || isDisabledProp,
      });
      return (
        <StyledCheckbox
          disabled={isDisabled || isDisabledProp}
          {...pressProps}
          {...contextCombinedProps}
          {...inputProps}
          ref={mergedRef}
          role="checkbox"
          onPressIn={composeEventHandlers(onPressIn, pressProps.onPressIn)}
          onPressOut={composeEventHandlers(onPressOut, pressProps.onPressOut)}
          // @ts-ignore - web only
          onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
          // @ts-ignore - web only
          onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
          // @ts-ignore - web only
          onFocus={composeEventHandlers(
            composeEventHandlers(onFocus, focusProps.onFocus)
            // focusRingProps.onFocu
          )}
          // @ts-ignore - web only
          onBlur={composeEventHandlers(
            composeEventHandlers(onBlur, focusProps.onBlur)
            // focusRingProps.onBlur
          )}
          states={{
            checked: isChecked || isCheckedProp,
            disabled: isDisabled || isDisabledProp,
            hover: isHovered || isHoveredProp,
            invalid: isInvalid || isInvalidProp,
            readonly: isReadOnly || isReadOnlyProp,
            active: isPressed,
            focus: isFocused,
            indeterminate: isIndeterminate || isIndeterminateProp,
            focusVisible: isFocusVisible,
          }}
        >
          <CheckboxProvider
            isChecked={isChecked || isCheckedProp}
            isDisabled={isDisabled || isDisabledProp}
            isHovered={isHovered || isHoveredProp}
            isInvalid={isInvalid || isInvalidProp}
            isReadOnly={isReadOnly || isReadOnlyProp}
            isPressed={isPressed || isPressedProp}
            isFocused={isFocused || isFocusedProp}
            isIndeterminate={isIndeterminate || isIndeterminateProp}
            isFocusVisible={isFocusVisible}
          >
            {children}
          </CheckboxProvider>
        </StyledCheckbox>
      );
    }
  );

import React, { forwardRef, memo } from 'react';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { RadioProvider } from './RadioProvider';
import { useRadio } from '@react-native-aria/radio';
import { useRadioGroup } from './RadioGroupContext';
import { usePress, useHover } from '@react-native-aria/interactions';
import { stableHash, composeEventHandlers } from '@gluestack-ui/utils';
import { useFormControlContext } from '@gluestack-ui/form-control';

const RadioComponent = memo(
  forwardRef(
    (
      {
        StyledRadio,
        inputProps,
        combinedProps,
        isChecked: isCheckedProp,
        isDisabled: isDisabledProp,
        isFocusVisible: isFocusVisibleProp,
        isHovered: isHoveredProp,
        isInvalid: isInvalidProp,
        isReadOnly: isReadOnlyProp,
        isIndeterminate: isIndeterminateProp,
        isFocused: isFocusedProp,
        isPressed: isPressedProp,
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
      const { isInvalid, isReadOnly, isIndeterminate, ...restProps } =
        combinedProps;
      const { hoverProps, isHovered } = useHover();

      const { focusProps, isFocused } = useFocus();
      const { disabled: isDisabled, checked: isChecked } = inputProps;
      const { focusProps: focusRingProps, isFocusVisible }: any =
        useFocusRing();
      const { pressProps, isPressed } = usePress({
        isDisabled: isDisabled || isDisabledProp,
      });
      return (
        <StyledRadio
          disabled={isDisabled || isDisabledProp}
          {...pressProps}
          {...restProps}
          {...inputProps}
          {...props}
          ref={ref}
          role="radio"
          onPressIn={composeEventHandlers(onPressIn, pressProps.onPressIn)}
          onPressOut={composeEventHandlers(onPressOut, pressProps.onPressOut)}
          // @ts-ignore - web only
          onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
          // @ts-ignore - web only
          onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
          // @ts-ignore - web only
          onFocus={composeEventHandlers(
            composeEventHandlers(onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          )}
          // @ts-ignore - web only
          onBlur={composeEventHandlers(
            composeEventHandlers(onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          )}
          states={{
            readonly: isReadOnly || isReadOnlyProp,
            intermediate: isIndeterminate || isIndeterminateProp,
            checked: isChecked || isCheckedProp,
            focusVisible: isFocusVisible || isFocusVisibleProp,
            disabled: isDisabled || isDisabledProp,
            invalid: isInvalid || isInvalidProp,
            hover: isHovered || isHoveredProp,
            focus: isFocused || isFocusedProp,
            active: isPressed || isPressedProp,
          }}
        >
          <RadioProvider
            isChecked={isChecked || isCheckedProp}
            isDisabled={isDisabled || isDisabledProp}
            isFocusVisible={isFocused || isFocusVisibleProp}
            isHovered={isHovered || isHoveredProp}
            isInvalid={isInvalid || isInvalidProp}
            isReadOnly={isReadOnly || isReadOnlyProp}
            isIndeterminate={isIndeterminate || isIndeterminateProp}
            isFocused={isFocused || isFocusedProp}
            isPressed={isPressed || isPressedProp}
          >
            {children}
          </RadioProvider>
        </StyledRadio>
      );
    }
  )
);

const Radio = (StyledRadio: any) =>
  forwardRef(
    (
      {
        isFocusVisible: isFocusVisibleProp,
        isHovered: isHoveredProp,
        isIndeterminate: isIndeterminateProp,
        isFocused: isFocusedProp,
        isPressed: isPressedProp,
        isInvalid: isInvalidProp,
        children,
        ...props
      }: any,
      ref?: any
    ) => {
      const formControlContext = useFormControlContext();
      const contextState = useRadioGroup('RadioGroupContext');

      const combinedProps = {
        ...formControlContext,
        ...contextState,
        ...props,
      };

      const inputRef = React.useRef(null);
      const { inputProps } = useRadio(
        {
          ...combinedProps,
          'aria-label': props['aria-label'],
          children,
        },
        contextState.state.state ?? {},
        inputRef
      );

      const contextCombinedProps = React.useMemo(() => {
        return { ...combinedProps };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [stableHash(combinedProps)]);

      if (!contextState) {
        console.error('Error: Radio must be wrapped inside a Radio.Group');
      }

      const isInvalid =
        contextCombinedProps?.state?.validationState === 'invalid'
          ? true
          : false;
      return (
        <RadioComponent
          StyledRadio={StyledRadio}
          inputProps={inputProps}
          combinedProps={contextCombinedProps}
          children={children}
          ref={ref}
          isFocusVisible={isFocusVisibleProp}
          isHovered={isHoveredProp}
          isIndeterminate={isIndeterminateProp}
          isFocused={isFocusedProp}
          isPressed={isPressedProp}
          isInvalid={isInvalid || isInvalidProp}
        />
      );
    }
  );
export { Radio };

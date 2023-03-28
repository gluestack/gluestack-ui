import React, { forwardRef, memo } from 'react';
import { RadioProvider } from './RadioProvider';
import { useRadio } from '@react-native-aria/radio';
import { useRadioGroup } from './RadioGroupContext';
import {
  useFocus,
  useIsPressed,
  useHover,
} from '@gluestack-ui/react-native-aria';
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
      const { pressableProps, isPressed } = useIsPressed();
      const { focusProps, isFocused } = useFocus();
      const { disabled: isDisabled, checked: isChecked } = inputProps;

      return (
        <StyledRadio
          disabled={isDisabled || isDisabledProp}
          {...pressableProps}
          {...restProps}
          {...inputProps}
          {...props}
          ref={ref}
          accessibilityRole="radio"
          onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
          onPressOut={composeEventHandlers(
            onPressOut,
            pressableProps.onPressOut
          )}
          // @ts-ignore - web only
          onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
          // @ts-ignore - web only
          onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
          // @ts-ignore - web only
          onFocus={composeEventHandlers(
            composeEventHandlers(onFocus, focusProps.onFocus)
            // focusRingProps.onFocus
          )}
          // @ts-ignore - web only
          onBlur={composeEventHandlers(
            composeEventHandlers(onBlur, focusProps.onBlur)
            // focusRingProps.onBlur
          )}
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
          'aria-label': props['aria-label'] ?? props.accessibilityLabel,
          children,
        },
        contextState.state ?? {},
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

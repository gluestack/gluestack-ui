import React, { forwardRef } from 'react';
import { CheckboxProvider } from './CheckboxProvider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-native-aria/focus';
import { useHover } from '@react-native-aria/interactions';
import { useToggleState } from '@react-stately/toggle';
import { useCheckbox, useCheckboxGroupItem } from '@react-native-aria/checkbox';
import { Platform } from 'react-native';
import { useCheckboxGroup } from './CheckboxGroupContext';

export const Checkbox = (StyledCheckbox: any) =>
  forwardRef(({ children, ...props }: any) => {
    const checkboxGroupContext = useCheckboxGroup('CheckboxGroupContext');
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);

    const state = useToggleState({
      ...props,
      defaultSelected: props.defaultIsChecked,
      isSelected: props.isChecked,
    });
    const { focusProps, isFocusVisible } = useFocusRing();
    const inputProps = checkboxGroupContext
      ? // eslint-disable-next-line react-hooks/rules-of-hooks
        useCheckboxGroupItem(
          {
            ...props,
            'aria-label': props.accessibilityLabel,
            'value': props.value,
          },
          checkboxGroupContext?.state,
          //@ts-ignore
          _ref
        )
      : // eslint-disable-next-line react-hooks/rules-of-hooks
        useCheckbox(
          {
            'aria-label': props.accessibilityLabel,
          },
          state,
          //@ts-ignore
          _ref
        );
    const {
      inputProps: { checked: isChecked, disabled: isDisabled },
    } = inputProps;

    if (Platform.OS === 'web') {
      return (
        <StyledCheckbox {...props} accessibilityRole="label" ref={_ref}>
          <VisuallyHidden>
            {/* <input {...props.inputProps} {...props.focusProps} ref={props.mergedRef} /> */}
            <input {...inputProps.inputProps} {...focusProps} ref={_ref} />
          </VisuallyHidden>
          <CheckboxProvider
            isChecked={isChecked}
            isDisabled={isDisabled}
            isFocusVisible={isFocusVisible}
            isHovered={isHovered}
          >
            {children}
          </CheckboxProvider>
        </StyledCheckbox>
      );
    } else {
      return (
        <StyledCheckbox {...inputProps.inputProps} {...focusProps}>
          <CheckboxProvider
            isChecked={isChecked}
            isDisabled={isDisabled}
            isFocusVisible={isFocusVisible}
            isHovered={isHovered}
          >
            {children}
          </CheckboxProvider>
        </StyledCheckbox>
      );
    }
  });

import React, { forwardRef, useContext } from 'react';
import { CheckboxProvider } from './CheckboxProvider';
import { useFocusRing } from '@react-native-aria/focus';
import { useHover } from '@react-native-aria/interactions';
import { useToggleState } from '@react-stately/toggle';
import { useCheckbox, useCheckboxGroupItem } from '@react-native-aria/checkbox';
import { Platform } from 'react-native';
import { CheckboxGroupContext } from './CheckboxGroup';
import { useCheckboxContext } from './context';
import { combineContextAndProps } from '@gluestack-ui/utils';
import CheckboxVisuallyHidden from './CheckboxVisuallyHidden';

export const Checkbox = (StyledCheckbox: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const checkboxGroupContext = useContext(CheckboxGroupContext);
    const formControlContext = useCheckboxContext();
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);

    const state = useToggleState({
      ...props,
      defaultSelected: props.defaultIsChecked,
      isSelected: props.isChecked,
    });
    const { focusProps, isFocusVisible } = useFocusRing();

    const { isInvalid, isReadOnly, isIndeterminate, ...combinedProps } =
      combineContextAndProps(formControlContext, props);

    const { inputProps } = checkboxGroupContext
      ? // eslint-disable-next-line react-hooks/rules-of-hooks
        useCheckboxGroupItem(
          {
            ...combinedProps,
            'aria-label': combinedProps.accessibilityLabel,
            'value': combinedProps.value,
          },
          checkboxGroupContext.state,
          //@ts-ignore
          _ref
        )
      : // eslint-disable-next-line react-hooks/rules-of-hooks
        useCheckbox(
          {
            ...combinedProps,
            'aria-label': combinedProps.accessibilityLabel,
          },
          state,
          //@ts-ignore
          _ref
        );

    const contextCombinedProps = { ...checkboxGroupContext, ...combinedProps };

    const { checked: isChecked, disabled: isDisabled } = inputProps;

    if (Platform.OS === 'web') {
      return (
        <StyledCheckbox
          {...contextCombinedProps}
          accessibilityRole="label"
          ref={_ref}
        >
          <CheckboxProvider
            isChecked={isChecked}
            isDisabled={isDisabled}
            isFocusVisible={isFocusVisible}
            isHovered={isHovered}
            isInvalid={isInvalid}
            isReadOnly={isReadOnly}
            isIndeterminate={isIndeterminate}
          >
            <CheckboxVisuallyHidden
              {...inputProps}
              {...focusProps}
              ref={_ref}
            />

            {children}
          </CheckboxProvider>
        </StyledCheckbox>
      );
    } else {
      return (
        <StyledCheckbox
          {...contextCombinedProps}
          {...inputProps}
          {...focusProps}
        >
          <CheckboxProvider
            isChecked={isChecked}
            isDisabled={isDisabled}
            isFocusVisible={isFocusVisible}
            isHovered={isHovered}
            isInvalid={isInvalid}
            isReadOnly={isReadOnly}
            isIndeterminate={isIndeterminate}
          >
            {children}
          </CheckboxProvider>
        </StyledCheckbox>
      );
    }
  });

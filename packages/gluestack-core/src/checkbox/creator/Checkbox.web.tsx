import React, { forwardRef, useContext } from 'react';
import { CheckboxProvider } from './CheckboxProvider';
import { useFocusRing } from '@gluestack-ui/utils/aria';
import { useHover } from '@gluestack-ui/utils/aria';
import { useToggleState } from '@react-stately/toggle';
import { useCheckbox, useCheckboxGroupItem } from '../aria';
import { CheckboxGroupContext } from './CheckboxGroup';
import {
  combineContextAndProps,
  mergeRefs,
  stableHash,
} from '@gluestack-ui/utils/common';
import { useFormControlContext } from '../../form-control/creator';
import { VisuallyHidden } from '@react-aria/visually-hidden';

export const Checkbox = (StyledCheckbox: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const {
      isHovered: isHoveredProp,
      isFocusVisible: isFocusVisibleProp,
      isChecked: isCheckedProp,
      isDisabled: isDisabledProp,
      isInvalid: isInvalidProp,
      isReadOnly: isReadOnlyProp,
      isIndeterminate: isIndeterminateProp,
      isFocused,
      isPressed,
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
    //aria-state-hook
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);
    const { focusProps, isFocusVisible } = useFocusRing();
    const ariaLabel =
      combinedProps['aria-label'] || combinedProps.value || 'Checkbox';

    const mergedRef = mergeRefs([ref, _ref]);

    let groupItemInputProps: { inputProps: { onChange?: () => void } } = {
      inputProps: {},
    };

    if (checkboxGroupContext?.state) {
      try {
        groupItemInputProps = useCheckboxGroupItem(
          {
            ...combinedProps,
            'aria-label': ariaLabel,
            'value': combinedProps.value,
          },
          checkboxGroupContext.state,
          //@ts-ignore
          mergedRef
        );
      } catch (error) {
        console.warn(
          'CheckboxGroupItem hook failed, falling back to standalone checkbox:',
          error
        );
        groupItemInputProps = { inputProps: {} };
      }
    }

    const standaloneCheckboxProps = useCheckbox(
      {
        ...combinedProps,
        'aria-label': ariaLabel,
      },
      state,
      //@ts-ignore
      mergedRef
    );

    // Use group props if available and valid, otherwise use standalone

    const { inputProps: finalInputProps } =
      checkboxGroupContext?.state && groupItemInputProps.inputProps?.onChange
        ? groupItemInputProps
        : standaloneCheckboxProps;

    const inputProps = React.useMemo(
      () => finalInputProps,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        finalInputProps?.checked,
        finalInputProps?.disabled,
        finalInputProps?.value,
        finalInputProps?.onChange,
      ]
    );

    const contextCombinedProps = React.useMemo(() => {
      return { ...checkboxGroupContext, ...combinedProps };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stableHash(combinedProps)]);

    const { checked: isChecked, disabled: isDisabled } = inputProps || {};

    return (
      <StyledCheckbox
        {...contextCombinedProps}
        role="label"
        // remove in future, role="label" is not supported in react-native-web, PR is open
        accessibilityRole="label"
        ref={mergedRef}
        states={{
          checked: isChecked || isCheckedProp,
          disabled: isDisabled || isDisabledProp,
          hover: isHovered || isHoveredProp,
          invalid: isInvalid || isInvalidProp,
          readonly: isReadOnly || isReadOnlyProp,
          active: isPressed,
          focus: isFocused,
          indeterminate: isIndeterminate || isIndeterminateProp,
          focusVisible: isFocusVisible || isFocusVisibleProp,
        }}
        dataSet={{
          checked: isChecked || isCheckedProp ? 'true' : 'false',
          disabled: isDisabled || isDisabledProp ? 'true' : 'false',
          hover: isHovered || isHoveredProp ? 'true' : 'false',
          invalid: isInvalid || isInvalidProp ? 'true' : 'false',
          readonly: isReadOnly || isReadOnlyProp ? 'true' : 'false',
          active: isPressed ? 'true' : 'false',
          focus: isFocused ? 'true' : 'false',
          indeterminate:
            isIndeterminate || isIndeterminateProp ? 'true' : 'false',
          focusVisible: isFocusVisible || isFocusVisibleProp ? 'true' : 'false',
        }}
      >
        <CheckboxProvider
          isChecked={isChecked || isCheckedProp}
          isDisabled={isDisabled || isDisabledProp}
          isFocusVisible={isFocusVisible || isFocusVisibleProp}
          isHovered={isHovered || isHoveredProp}
          isInvalid={isInvalid || isInvalidProp}
          isReadOnly={isReadOnly || isReadOnlyProp}
          isIndeterminate={isIndeterminate || isIndeterminateProp}
          isPressed={isPressed}
        >
          <VisuallyHidden>
            <input {...inputProps} {...focusProps} ref={mergedRef} />
          </VisuallyHidden>
          {children}
        </CheckboxProvider>
      </StyledCheckbox>
    );
  });

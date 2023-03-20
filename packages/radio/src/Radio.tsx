import React, { forwardRef } from 'react';
import { RadioProvider } from './RadioProvider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-native-aria/focus';
import { useHover } from '@react-native-aria/interactions';
import { useRadio } from '@react-native-aria/radio';
import { Platform } from 'react-native';
import { useRadioGroup } from './RadioGroupContext';
import { useRadioContext } from './context';
import { combineContextAndProps } from '@gluestack-ui/utils';

const Radio = (StyledRadio: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const radioGroupContext = useRadioGroup('RadioGroupContext');
    const formControlContext = useRadioContext(props);

    if (!radioGroupContext)
      throw Error('Radio must be wrapped inside a Radio.Group');

    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);

    const { focusProps, isFocusVisible } = useFocusRing();

    const combinedContextAndProps = combineContextAndProps(
      { ...formControlContext, ...radioGroupContext },
      props
    );

    const inputProps = useRadio(
      {
        ...combinedContextAndProps,
        'aria-label': props.accessibilityLabel,
      },
      radioGroupContext ? radioGroupContext?.state : {},
      //@ts-ignore
      _ref
    );

    const {
      inputProps: { checked: isChecked, disabled: isDisabled },
    } = inputProps;

    const { isInvalid, isReadOnly, isIndeterminate } = combinedContextAndProps;

    if (Platform.OS === 'web') {
      return (
        <StyledRadio
          {...combinedContextAndProps}
          accessibilityRole="label"
          ref={_ref}
        >
          <RadioProvider
            isChecked={isChecked}
            isDisabled={isDisabled}
            isFocusVisible={isFocusVisible}
            isHovered={isHovered}
            isInvalid={isInvalid}
            isReadOnly={isReadOnly}
            isIndeterminate={isIndeterminate}
          >
            <VisuallyHidden>
              <input {...inputProps.inputProps} {...focusProps} ref={_ref} />
            </VisuallyHidden>
            {children}
          </RadioProvider>
        </StyledRadio>
      );
    } else {
      return (
        <StyledRadio
          {...combinedContextAndProps}
          {...inputProps.inputProps}
          ref={_ref}
        >
          <RadioProvider
            isChecked={isChecked}
            isDisabled={isDisabled}
            isFocusVisible={isFocusVisible}
            isHovered={isHovered}
            isInvalid={isInvalid}
            isReadOnly={isReadOnly}
            isIndeterminate={isIndeterminate}
          >
            {children}
          </RadioProvider>
        </StyledRadio>
      );
    }
  });
export { Radio };

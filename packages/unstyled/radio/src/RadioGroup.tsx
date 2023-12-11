import React, { forwardRef } from 'react';
import { useRadioGroup } from '@react-native-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { RadioGroupProvider } from './RadioGroupContext';
import { useFormControlContext } from '@gluestack-ui/form-control';

export const RadioGroup = (StyledRadioGroup: any) =>
  forwardRef(({ children, isInvalid, ...props }: any, ref?: any) => {
    const formControlContext = useFormControlContext();
    const state = useRadioGroupState({
      ...props,
      validationState: isInvalid ? 'invalid' : 'valid',
    });

    const radioGroupState = useRadioGroup(
      {
        ...formControlContext,
        ...props,
        'aria-label': props['aria-label'],
      },
      state
    );

    const contextValue: any = React.useMemo(() => {
      return {
        ...formControlContext,
        state,
      };
    }, [formControlContext, state]);

    const radioGroupProps = React.useMemo(
      () => radioGroupState.radioGroupProps,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    return (
      <RadioGroupProvider state={contextValue}>
        <StyledRadioGroup {...radioGroupProps} {...props} ref={ref}>
          {children}
        </StyledRadioGroup>
      </RadioGroupProvider>
    );
  });

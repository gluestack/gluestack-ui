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
        'aria-label': props['aria-label'] || 'RadioGroup',
      },
      state
    );

    const contextValue: any = React.useMemo(() => {
      return {
        ...formControlContext,
        state,
      };
    }, [formControlContext, state]);

    return (
      <RadioGroupProvider state={contextValue}>
        <StyledRadioGroup
          {...radioGroupState.radioGroupProps}
          {...props}
          ref={ref}
        >
          {children}
        </StyledRadioGroup>
      </RadioGroupProvider>
    );
  });

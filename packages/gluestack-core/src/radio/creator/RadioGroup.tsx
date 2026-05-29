import React, { forwardRef } from 'react';
import { Platform, View } from 'react-native';
import { useRadioGroup } from '../aria';
import { useRadioGroupState } from '@react-stately/radio';
import { RadioGroupProvider } from './RadioGroupContext';
import { useFormControlContext } from '../../form-control/creator';

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
          {Platform.OS === 'web' && radioGroupState.descriptionProps && (
            <View {...radioGroupState.descriptionProps} style={{ display: 'none' }} />
          )}
          {Platform.OS === 'web' && radioGroupState.errorMessageProps && (
            <View {...radioGroupState.errorMessageProps} style={{ display: 'none' }} />
          )}
        </StyledRadioGroup>
      </RadioGroupProvider>
    );
  });

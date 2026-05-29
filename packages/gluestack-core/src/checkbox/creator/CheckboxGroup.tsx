import React, { createContext, forwardRef } from 'react';
import { Platform, View } from 'react-native';
import { useCheckboxGroup } from '../aria';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useFormControlContext } from '../../form-control/creator';
export const CheckboxGroupContext = createContext<any>(null);

const CheckboxGroup = (StyledCheckboxGroup: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const state = useCheckboxGroupState({
      ...props,
      validationState: props.isInvalid ? 'invalid' : 'valid',
    });

    const checkboxGroupState = useCheckboxGroup(
      {
        ...props,
        'aria-label': props['aria-label'],
      },
      //@ts-ignore
      state
    );

    const formControlContext = useFormControlContext();

    return (
      <CheckboxGroupContext.Provider
        value={{ state: { ...formControlContext, ...state } }}
      >
        <StyledCheckboxGroup {...checkboxGroupState.groupProps} {...props} ref={ref}>
          {children}
          {Platform.OS === 'web' && checkboxGroupState.descriptionProps && (
            <View {...checkboxGroupState.descriptionProps} style={{ display: 'none' }} />
          )}
          {Platform.OS === 'web' && checkboxGroupState.errorMessageProps && (
            <View {...checkboxGroupState.errorMessageProps} style={{ display: 'none' }} />
          )}
        </StyledCheckboxGroup>
      </CheckboxGroupContext.Provider>
    );
  });

export default CheckboxGroup;

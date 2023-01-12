import React, { createContext, forwardRef } from 'react';
import { useCheckboxGroup } from '@react-native-aria/checkbox';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useFormControlContext } from '../FormControl/useFormControl';

export const CheckboxGroupContext = createContext<any>(null);

export const CheckboxGroup = (StyledCheckboxGroup: any) =>
  forwardRef(({ children, ...props }: any) => {
    const state = useCheckboxGroupState(props);
    const { groupProps } = useCheckboxGroup(
      { 'aria-label': props.accessibilityLabel, ...props },
      state
    );

    const formControlContext = useFormControlContext();

    return (
      <CheckboxGroupContext.Provider
        value={{ state: state, ...formControlContext }}
      >
        <StyledCheckboxGroup {...groupProps} {...props}>
          {children}
        </StyledCheckboxGroup>
      </CheckboxGroupContext.Provider>
    );
  });

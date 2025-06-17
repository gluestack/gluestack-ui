import React, { createContext, forwardRef } from 'react';
import { useCheckboxGroup } from '../aria';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useFormControlContext } from '@/components/ui/form-control/creator';
export const CheckboxGroupContext = createContext<any>(null);

const CheckboxGroup = (StyledCheckboxGroup: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const state = useCheckboxGroupState({
      ...props,
      validationState: props.isInvalid ? 'invalid' : 'valid',
    });

    const { groupProps } = useCheckboxGroup(
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
        <StyledCheckboxGroup {...groupProps} {...props} ref={ref}>
          {children}
        </StyledCheckboxGroup>
      </CheckboxGroupContext.Provider>
    );
  });

export default CheckboxGroup;

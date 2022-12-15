import React, { forwardRef } from 'react';
import { useCheckboxGroup } from '@react-native-aria/checkbox';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { CheckboxGroupProvider } from './CheckboxGroupContext';

export const CheckboxGroup = (StyledCheckboxGroup: any) =>
  forwardRef(({ children, ...props }: any) => {
    const state = useCheckboxGroupState(props);
    const { groupProps } = useCheckboxGroup(
      { 'aria-label': props.accessibilityLabel, ...props },
      state
    );

    return (
      <CheckboxGroupProvider state={state}>
        <StyledCheckboxGroup {...groupProps} {...props}>
          {children}
        </StyledCheckboxGroup>
      </CheckboxGroupProvider>
    );
  });

import React, { forwardRef } from 'react';
import { useRadioGroup } from '@react-native-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { RadioGroupProvider } from './RadioGroupContext';

export const RadioGroup = (StyledRadioGroup: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const state = useRadioGroupState(props);

    const { radioGroupProps } = useRadioGroup(
      { 'aria-label': props.accessibilityLabel, ...props },
      state
    );

    return (
      <RadioGroupProvider state={state}>
        <StyledRadioGroup {...radioGroupProps} {...props}>
          {children}
        </StyledRadioGroup>
      </RadioGroupProvider>
    );
  });

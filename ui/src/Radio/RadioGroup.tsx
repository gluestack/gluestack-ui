import React from 'react';
import { useRadioGroup } from '@react-native-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { RadioGroupProvider } from './RadioGroupContext';

export const RadioGroup =
  (StyledRadioGroup: any) =>
  ({ children, ...props }: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const state = useRadioGroupState(props);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { radioGroupProps } = useRadioGroup(
      // eslint-disable-next-line react-hooks/rules-of-hooks
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
  };

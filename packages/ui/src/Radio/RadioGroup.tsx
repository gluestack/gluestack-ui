import React, { useContext } from 'react';
import { UIContext } from '../UIProvider';
import { useRadioGroup } from '@react-native-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { RadioGroupProvider } from './RadioGroupContext';

export const RadioGroup = ({ children, ...props }: any) => {
  const { StyledRadioGroup } = useContext(UIContext);

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
};

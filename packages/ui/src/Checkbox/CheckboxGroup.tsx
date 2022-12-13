import React, { useContext } from 'react';
import { UIContext } from '../UIProvider';
import { useCheckboxGroup } from '@react-native-aria/checkbox';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { CheckboxGroupProvider } from './CheckboxGroupContext';

export const CheckboxGroup = ({ children, ...props }: any) => {
  const { StyledCheckboxGroup } = useContext(UIContext);

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
};

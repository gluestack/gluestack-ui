import {
  StyledButton,
  StyledButtonText,
  StyledButtonGroup,
  StyledButtonGroupSpacer,
  StyledButtonSpinner,
} from './styled-component';
import { createButton } from '@universa11y/button';
import React from 'react';

const ButtonTemp = createButton({
  StyledButton,
  StyledButtonText,
  StyledButtonGroup,
  StyledButtonGroupSpacer,
  StyledButtonSpinner,
});

export const Button = () => {
  return <ButtonTemp onPress={() => {}}>Text</ButtonTemp>;
};

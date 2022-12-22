import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { ButtonText } from './ButtonText';
import { Spinner } from './ButtonSpinner';

export const createButton = ({
  StyledButton,
  StyledButtonText,
  StyledButtonGroup,
  StyledButtonGroupSpacer,
  StyledButtonSpinner,
}: any) => {
  const ButtonTemp = Button(StyledButton) as any;
  ButtonTemp.Text = ButtonText(StyledButtonText);
  ButtonTemp.Group = ButtonGroup(StyledButtonGroup, StyledButtonGroupSpacer);
  ButtonTemp.Spinner = Spinner(StyledButtonSpinner);

  return ButtonTemp;
};

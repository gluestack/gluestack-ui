import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { ButtonText } from './ButtonText';

export const createButton = ({
  StyledButton,
  StyledButtonText,
  StyledButtonGroup,
  StyledButtonGroupSpacer,
}: any) => {
  const ButtonTemp = Button(StyledButton) as any;
  ButtonTemp.Text = ButtonText(StyledButtonText);
  ButtonTemp.Group = ButtonGroup(StyledButtonGroup, StyledButtonGroupSpacer);

  return ButtonTemp;
};

import { Button } from './Button';
import { ButtonText } from './ButtonText';

export const createButton = ({ StyledButton, StyledButtonText }: any) => {
  const ButtonTemp = Button(StyledButton) as any;
  ButtonTemp.Text = ButtonText(StyledButtonText);

  return ButtonTemp;
};

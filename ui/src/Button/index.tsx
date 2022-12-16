import { Button } from './Button';
import { ButtonText } from './ButtonText';
import { ButtonSpinner } from './ButtonSpinner';

export const createButton = ({
  StyledButton,
  StyledButtonText,
  StyledButtonSpinner,
}: any) => {
  const ButtonTemp = Button(StyledButton) as any;
  ButtonTemp.Text = ButtonText(StyledButtonText);
  ButtonTemp.Spinner = ButtonSpinner(StyledButtonSpinner);

  return ButtonTemp;
};

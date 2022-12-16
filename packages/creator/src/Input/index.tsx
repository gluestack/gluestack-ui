import { InputIcon } from './InputIcon';
import { InputRoot } from './InputRoot';
import { Input } from './Input';

const InputTemp = Input as any;
InputTemp.Root = InputRoot;
InputTemp.Icon = InputIcon;

export const createInput = ({
  StyledInputRoot,
  StyledInputIcon,
  StyledInput,
}: any) => {
  const InputTemp = Input(StyledInput) as any;
  InputTemp.Icon = InputIcon(StyledInputIcon);
  InputTemp.Root = InputRoot(StyledInputRoot);
  return InputTemp;
};

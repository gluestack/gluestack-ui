import { InputIcon } from './InputIcon';
import { InputRoot } from './InputRoot';
import { Input as InputMain } from './Input';

export const createInput = ({
  StyledInputRoot,
  StyledInputIcon,
  StyledInput,
}: any) => {
  const Input = InputMain(StyledInput) as any;
  Input.Icon = InputIcon(StyledInputIcon);
  Input.Root = InputRoot(StyledInputRoot);

  Input.displayName = 'Input';
  Input.Icon.displayName = 'Input.Icon';
  Input.Root.displayName = 'Input.Root';

  return Input;
};

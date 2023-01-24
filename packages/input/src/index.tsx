import { InputIcon } from './InputIcon';
import { InputAdvanced } from './InputAdvanced';
import { Input as InputMain } from './Input';

export const createInput = ({ Root, Icon, Group }: any) => {
  const Input = InputMain(Root) as any;
  Input.Icon = InputIcon(Icon);
  Input.Group = InputAdvanced(Group);

  Input.displayName = 'Input';
  Input.Icon.displayName = 'Input.Icon';
  Input.Group.displayName = 'Input.Group';

  return Input;
};

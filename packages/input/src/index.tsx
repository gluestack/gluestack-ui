import { InputIcon } from './InputIcon';
import { InputGroup } from './InputGroup';
import { Input as InputMain } from './Input';
import type { IInputComponentType } from './types';

export const createInput = <Root, Icon, Group>({
  Root,
  Icon,
  Group,
}: {
  Root: React.ComponentType<Root>;
  Icon: React.ComponentType<Icon>;
  Group: React.ComponentType<Group>;
}) => {
  const Input = InputMain(Root) as any;
  Input.Icon = InputIcon(Icon);
  Input.Group = InputGroup(Group);

  Input.displayName = 'Input';
  Input.Icon.displayName = 'Input.Icon';
  Input.Group.displayName = 'Input.Group';

  return Input as IInputComponentType<Root, Icon, Group>;
};

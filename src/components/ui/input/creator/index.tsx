import { InputIcon } from './InputIcon';
import { InputGroup } from './InputGroup';
import { InputSlot } from './InputSlot';
import { Input as InputMain } from './Input';
import type { IInputComponentType } from './types';

export const createInput = <Root, Icon, Slot, Input>({
  Root,
  Icon,
  Slot,
  Input,
}: {
  Root: React.ComponentType<Root>;
  Icon: React.ComponentType<Icon>;
  Slot: React.ComponentType<Slot>;
  Input: React.ComponentType<Input>;
}) => {
  const InputField = InputGroup(Root) as any;
  InputField.Icon = InputIcon(Icon);
  InputField.Slot = InputSlot(Slot);
  InputField.Input = InputMain(Input);

  InputField.displayName = 'InputField';
  InputField.Icon.displayName = 'InputField.Icon';
  InputField.Input.displayName = 'InputField.Input';
  InputField.Slot.displayName = 'InputField.Slot';

  return InputField as IInputComponentType<Root, Icon, Slot, Input>;
};

import { PinInputGroup } from './PinInputRoot';
import { PinInput as PinInputMain } from './PinInput';
import type { IPinInputComponentType } from './types';

export const createPinInput = <Root, Input>({
  Root,
  Input,
}: {
  Root: React.ComponentType<Root>;
  Input: React.ComponentType<Input>;
}) => {
  const PinInput = PinInputGroup(Root) as any;
  PinInput.Input = PinInputMain(Input);

  PinInput.displayName = 'PinInput';
  PinInput.Input.displayName = 'PinInput.Input';

  return PinInput as IPinInputComponentType<Root, Input>;
};

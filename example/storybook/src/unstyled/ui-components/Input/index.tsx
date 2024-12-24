import { createInput } from '@gluestack-ui/input';
import { Root, Icon, Slot, StyledInput } from './styled-components';

export const Input = createInput({
  Root,
  Icon,
  Slot,
  Input: StyledInput,
});
export const InputIcon = Input.Icon;
export const InputSlot = Input.Slot;
export const InputInput = Input.Input;

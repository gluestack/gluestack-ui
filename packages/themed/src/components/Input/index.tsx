import { createInput } from '@gluestack-ui/input';
import { Root, Icon, Slot, StyledInput } from './styled-components';

export const AccessibleInput = createInput({
  Root,
  Icon,
  Slot,
  Input: StyledInput,
});

type IAccessibleInput = typeof AccessibleInput;

interface Input extends IAccessibleInput {
  /**
   * @deprecated Use InputIcon instead.
   */
  Icon: IAccessibleInput['Icon'];
  /**
   * @deprecated Use InputIcon instead.
   */
  Slot: IAccessibleInput['Slot'];
  /**
   * @deprecated Use InputField instead.
   */
  Input: IAccessibleInput['Input'];
}

export const Input = AccessibleInput as Input;
export const InputIcon = AccessibleInput.Icon;
export const InputSlot = AccessibleInput.Slot;
export const InputField = AccessibleInput.Input;

/**
 * @deprecated Use InputField instead.
 */
export const InputInput = AccessibleInput.Input;

import { createInput } from '@gluestack-ui/input';
import { Root, Icon, StyledInput } from './styled-components';

export const AccessibleInput = createInput({
  Root,
  Icon,
  Input: StyledInput,
});

type IAccessibleInput = typeof AccessibleInput;

interface Input extends IAccessibleInput {
  /**
   * @deprecated Use InputIcon instead.
   */
  Icon: IAccessibleInput['Icon'];
  /**
   * @deprecated Use InputField instead.
   */
  Input: IAccessibleInput['Input'];
}

export const Input = AccessibleInput as Input;
export const InputIcon = AccessibleInput.Icon;
export const InputField = AccessibleInput.Input;

/**
 * @deprecated Use InputField instead.
 */
export const InputInput = AccessibleInput.Input;

import { createInput } from '@gluestack-ui/input';
import { Root, Icon, StyledInput } from './styled-components';

export const Input = createInput({
  Root,
  Icon,
  Input: StyledInput,
});
export const InputIcon = Input.Icon;
export const InputInput = Input.Input;

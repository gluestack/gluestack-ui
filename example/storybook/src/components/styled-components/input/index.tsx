import Root from './Root';
import Icon from './Icon';
import StyledInput from './Input';
import { createInput } from '@universa11y/input';

export const Input = createInput({
  Root,
  Icon,
  Input: StyledInput,
});

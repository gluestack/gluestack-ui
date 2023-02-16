import Root from './styled-components/Root';
import Icon from './styled-components/Icon';
import StyledInput from './styled-components/Input';
import { createInput } from '@universa11y/input';

export const Input = createInput({
  Root,
  Icon,
  Input: StyledInput,
});

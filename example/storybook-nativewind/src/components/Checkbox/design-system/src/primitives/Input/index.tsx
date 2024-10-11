import StyledInput from './styled-components/Input';
import Icon from './styled-components/Icon';
import Root from './styled-components/Root';
import { createInput } from '@gluestack-ui/input';

export const Input = createInput({
  Root,
  Icon,
  Input: StyledInput,
});

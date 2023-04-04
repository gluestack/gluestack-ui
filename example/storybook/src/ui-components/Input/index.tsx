import { createInput } from '@gluestack-ui/input';
import { Root, Icon, StyledInput } from './styled-components';

export const InputField = createInput({
  Root,
  Icon,
  Input: StyledInput,
});

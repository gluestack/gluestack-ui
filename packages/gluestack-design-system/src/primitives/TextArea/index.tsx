import { StyledTextArea, StyledTextAreaRoot } from '../../styled-components';
import { createTextArea } from '@gluestack/ui-creator';

export const TextArea = createTextArea({
  StyledTextArea,
  StyledTextAreaRoot,
}) as any;

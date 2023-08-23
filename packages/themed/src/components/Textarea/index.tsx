import { createTextarea } from '@gluestack-ui/textarea';
import { Root, Input } from './styled-components';

export const AccessibleTextarea = createTextarea({
  Root,
  Input,
});

type IAccessibleTextarea = typeof AccessibleTextarea;

interface Textarea extends IAccessibleTextarea {
  /**
   * @deprecated Use TextareaInput instead.
   */
  Input: IAccessibleTextarea['Input'];
}

export const Textarea = AccessibleTextarea as Textarea;
export const TextareaInput = AccessibleTextarea.Input;

import { Textarea } from './Textareaabcd';
import { TextareaRoot } from './TextareaRootabcd';
import type { ITextareaComponentType } from './types';

export function createTextArea<Root, Input>({
  Root,
  Input,
}: {
  Root: React.ComponentType<Root>;
  Input: React.ComponentType<Input>;
}) {
  const TextareaTemp = TextareaRoot(Root) as any;
  TextareaTemp.Input = Textarea(Input);

  TextareaTemp.displayName = 'Textarea';
  TextareaTemp.Input.displayName = 'Textarea.Input';

  return TextareaTemp as ITextareaComponentType<Root, Input>;
}

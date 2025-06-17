import { Textarea } from './Textarea';
import { TextareaRoot } from './TextareaRoot';
import type { ITextareaComponentType } from './types';

//TODO: deprecate later
/**
 * @deprecated The method should not be used, use createTextarea instead
 */
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

export function createTextarea<Root, Input>({
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

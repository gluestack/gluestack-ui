import { TextArea } from './TextArea';
import { TextAreaRoot } from './TextAreaRoot';
import type { ITextAreaComponentType } from './types';

export function createTextArea<Root, Input>({
  Root,
  Input,
}: {
  Root: React.ComponentType<Root>;
  Input: React.ComponentType<Input>;
}) {
  const TextAreaTemp = TextAreaRoot(Root) as any;
  TextAreaTemp.Input = TextArea(Input);

  TextAreaTemp.displayName = 'TextArea';
  TextAreaTemp.Input.displayName = 'TextArea.Input';

  return TextAreaTemp as ITextAreaComponentType<Root, Input>;
}

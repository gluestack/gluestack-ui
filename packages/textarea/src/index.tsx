import { TextArea } from './TextArea';
import { TextAreaRoot } from './TextAreaRoot';
import type { ITextAreaComponentType } from './types';

// const TextAreaTemp = TextArea as any;
// TextAreaTemp.Root = TextAreaRoot;

export function createTextArea<TextAreaProps, InputProps>({
  Root,
  Input,
}: {
  Root: React.ComponentType<TextAreaProps>;
  Input: React.ComponentType<InputProps>;
}) {
  const TextAreaTemp = TextAreaRoot(Root) as any;
  TextAreaTemp.Input = TextArea(Input) as any;

  TextAreaTemp.displayName = 'TextArea';
  TextAreaTemp.Input.displayName = 'TextArea.Input';

  return TextAreaTemp as ITextAreaComponentType<TextAreaProps, InputProps>;
}

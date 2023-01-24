import { TextArea } from './TextArea';
import { TextAreaRoot } from './TextAreaRoot';

// const TextAreaTemp = TextArea as any;
// TextAreaTemp.Root = TextAreaRoot;

export const createTextArea = ({ Root, Input }: any) => {
  const TextAreaTemp = TextAreaRoot(Input) as any;
  TextAreaTemp.Input = TextArea(Root) as any;

  TextAreaTemp.displayName = 'TextArea';
  TextAreaTemp.Input.displayName = 'TextArea.Input';

  return TextAreaTemp;
};

import { TextArea } from './TextArea';
import { TextAreaRoot } from './TextAreaRoot';

// const TextAreaTemp = TextArea as any;
// TextAreaTemp.Root = TextAreaRoot;

export const createTextArea = ({ StyledTextArea, StyledTextAreaRoot }: any) => {
  const TextAreaTemp = TextArea(StyledTextArea) as any;
  TextAreaTemp.Root = TextAreaRoot(StyledTextAreaRoot) as any;
  return TextAreaTemp;
};

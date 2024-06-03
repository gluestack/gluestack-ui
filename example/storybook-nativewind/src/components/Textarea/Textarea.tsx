import React from 'react';
import { Textarea, TextareaInput } from '@/components/ui/textarea';

const TextareaBasic = ({ ...props }: any) => {
  return (
    <Textarea {...props} className="w-64">
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  );
};

TextareaBasic.description =
  'This is a basic Textarea component example. Textareas are used to get multiline input from the user.';

export default TextareaBasic;
export { Textarea, TextareaInput };

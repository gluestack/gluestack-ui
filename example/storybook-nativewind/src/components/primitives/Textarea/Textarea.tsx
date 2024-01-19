import React from 'react';
import {
  Textarea,
  TextareaInput,
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlLabel,
  FormControlLabelText,
} from '@custom-ui/themed';

const TextareaBasic = ({ ...props }: any) => {
  return (
    <Textarea {...props} mx="$2">
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  );
};

TextareaBasic.description =
  'This is a basic Textarea component example. Textareas are used to get multiline input from the user.';

export default TextareaBasic;

export {
  Textarea,
  TextareaInput,
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlLabel,
  FormControlLabelText,
};

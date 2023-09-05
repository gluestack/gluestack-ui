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
} from '@gluestack-ui/themed';

const TextareaBasic = ({ ...props }: any) => {
  return (
    <Textarea {...props} mx="$2">
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  );
};

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

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

const TextareaStory = ({ ...props }: any) => {
  return (
    <Textarea {...props} mx="$2">
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  );
};

export default TextareaStory;

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

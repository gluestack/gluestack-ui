import { styled } from '@dank-style/react';
// import { config } from '../../../../gluestack.config';
import { View } from 'react-native';

const FormControl = styled(
  View,
  {
    flexDirection: 'column',
    width: '100%',
  },
  {}
);

export { default as Error } from './Error';
export { default as ErrorIcon } from './ErrorIcon';
export { default as ErrorText } from './ErrorText';
export { default as Helper } from './Helper';
export { default as HelperText } from './HelperText';
export { default as Label } from './Label';
export { default as LabelText } from './LabelText';
export { default as LabelAstrick } from './LabelAstrick';

export { FormControl as Root };

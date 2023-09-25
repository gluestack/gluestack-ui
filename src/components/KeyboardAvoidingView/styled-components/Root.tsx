import { KeyboardAvoidingView } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  KeyboardAvoidingView,
  {},
  {
    descendantStyle: ['_text'],
  }
);

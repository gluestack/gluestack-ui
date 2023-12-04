import { KeyboardAvoidingView } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(KeyboardAvoidingView, {}, {
  componentName: 'KeyboardAvoidingView',
  descendantStyle: ['_text'],
} as const);

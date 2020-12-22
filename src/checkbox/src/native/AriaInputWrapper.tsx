import React from 'react';
import { AriaButton } from '../../../button';

// TODO: Accept elementType prop (Pressable, TouchableOpacity, etc)
export const AriaInputWrapper = React.forwardRef(function AriaInputWrapper(
  props: any,
  ref
) {
  return <AriaButton {...props} ref={ref} />;
});

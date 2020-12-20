import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

// TODO: Accept elementType prop (Pressable, TouchableOpacity, etc)
export const AriaButton = React.forwardRef(function AriaButton(
  props: any,
  ref
) {
  return <TouchableWithoutFeedback {...props} ref={ref} />;
});

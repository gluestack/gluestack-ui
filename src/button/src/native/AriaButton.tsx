import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

// TODO: Accept elementType prop (Pressable, TouchableOpacity, etc)
export const AriaButton = React.forwardRef((props: any, ref) => (
  <TouchableWithoutFeedback {...props} ref={ref} />
));

import React from 'react';
import { TouchableOpacity } from 'react-native';

// TODO: Accept elementType prop (Pressable, TouchableOpacity, etc)
export const AriaButton = React.forwardRef((props: any, ref) => (
  <TouchableOpacity {...props} ref={ref} />
));

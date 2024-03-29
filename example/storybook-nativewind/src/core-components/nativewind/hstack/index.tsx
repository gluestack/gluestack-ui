import React from 'react';
import { View } from 'react-native';
import { hstackStyle } from './styles';

const HStack = ({ className, space, reversed, ...props }: any) => {
  return (
    <View
      className={hstackStyle({ space, reversed, class: className })}
      {...props}
    />
  );
};

HStack.displayName = 'HStack';

export { HStack };

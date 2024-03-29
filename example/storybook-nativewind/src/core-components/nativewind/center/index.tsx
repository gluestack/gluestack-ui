import { View } from 'react-native';
import React from 'react';
import { centerStyle } from './styles';

const Center = ({ className, ...props }: any) => {
  return <View className={centerStyle({ class: className })} {...props} />;
};

Center.displayName = 'Center';

export { Center };

import { View } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
const centerStyle = tva({
  base: 'justify-center items-center',
});

const Center = ({ className, ...props }: any) => {
  return <View className={centerStyle({ class: className })} {...props} />;
};

Center.displayName = 'Center';

export { Center };

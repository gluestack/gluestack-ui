import React from 'react';
import { Center, Text } from '@gluestack-ui/themed';
import { Pressable } from '@/components/ui/pressable';

const PressableBasic = ({ ...props }: any) => {
  return (
    <Pressable
      // onPress={() => console.log('Hello')}
      {...props}
      className="p-5 bg-primary-500"
    >
      <Text className="text-typography-0">PRESSABLE</Text>
    </Pressable>
  );
};

PressableBasic.description =
  'This is a basic Pressable component example. Pressable components are used to show a loading state of a component or page.';

export default PressableBasic;

export { Pressable, Center, Text };

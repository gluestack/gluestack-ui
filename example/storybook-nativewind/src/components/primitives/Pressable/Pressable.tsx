import React from 'react';
import { Center, Pressable, Text } from '@custom-ui/themed';

const PressableBasic = ({ ...props }: any) => {
  return (
    <Pressable
      // eslint-disable-next-line no-console
      onPress={() => console.log('Hello')}
      {...props}
      sx={{ h: 100, w: 200 }}
    >
      <Center
        sx={{
          h: '100%',
          w: '100%',
          bg: '$primary500',
        }}
      >
        <Text sx={{ color: '$white' }}>PRESSABLE</Text>
      </Center>
    </Pressable>
  );
};

PressableBasic.description =
  'This is a basic Pressable component example. Pressable components are used to show a loading state of a component or page.';

export default PressableBasic;

export { Pressable, Center };

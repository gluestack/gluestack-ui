import React from 'react';
import { Center, Pressable, Text } from '../../../ui-components';

export const PressableStory = ({ ...props }: any) => {
  return (
    <Center>
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
    </Center>
  );
};
export { Pressable, Center };

import React from 'react';
import { Pressable } from '../styled-components/pressable';
import { Center } from '../Center/Center';
import { Text } from '../Text/Text';
import Wrapper from '../Wrapper';

export const PressableStory = ({ ...props }: any) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export { Pressable, Center };

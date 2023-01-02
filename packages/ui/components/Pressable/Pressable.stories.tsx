import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Pressable, Center, Text } from '@gluestack/ui';

const PressableMeta: ComponentMeta<typeof Pressable> = {
  title: 'FORMS/Pressable',
  component: Pressable,
  argTypes: {},
  args: {},
};

export default PressableMeta;

type PressableStory = ComponentStory<typeof Pressable>;

export const Basic: PressableStory = ({ ...props }) => {
  return (
    <Pressable
      onPress={() => console.log('Hello')}
      {...props}
      sx={{ style: { h: 100, w: 200 } }}
    >
      <Center
        sx={{
          style: {
            h: '100%',
            w: '100%',
            bg: '$primary500',
          },
        }}
      >
        <Text sx={{ style: { color: '$white' } }}>PRESSABLE</Text>
      </Center>
    </Pressable>
  );
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { LinearGradient, Text, Button } from '@gluestack/ui';

var st = document.createElement('style');
// st.innerHTML = `#story--actionsheet--basic{ height: 350px }`;
document.body.append(st);

const MyLinearGradientMeta: ComponentMeta<typeof LinearGradient> = {
  title: 'LinearGradient',
  component: LinearGradient,
  argTypes: {},
  args: {},
};

export default MyLinearGradientMeta;

type MyCustomLinearGradientStory = ComponentStory<typeof LinearGradient>;

export const Basic: MyCustomLinearGradientStory = ({ ...props }) => {
  return (
    <LinearGradient
      {...props}
      colors={['#4c669f', '#3b5998', '#192f6a']}
      start={{ x: 0, y: 0.5 }}
      sx={{
        style: {
          alignItems: 'center',
        },
      }}
    >
      <Button
        sx={{
          style: {
            w: '$full',
            bg: 'transparent',
          },
        }}
      >
        <Text sx={{ style: { color: 'white', fontWeight: 'bold' } }}>BOX</Text>
      </Button>
    </LinearGradient>
  );
};

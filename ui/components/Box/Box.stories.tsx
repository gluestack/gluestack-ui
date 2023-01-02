import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as WithRefExample } from './WithRef';
import { Box, Text } from '@gluestack/ui';

var st = document.createElement('style');
// st.innerHTML = `#story--actionsheet--basic{ height: 350px }`;
document.body.append(st);

const MyBoxMeta: ComponentMeta<typeof Box> = {
  title: 'LAYOUT/Box',
  component: Box,
  argTypes: {},
  args: {},
};

export default MyBoxMeta;

type MyCustomBoxStory = ComponentStory<typeof Box>;

export const Basic: MyCustomBoxStory = ({ ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        style: {
          h: 100,
          w: 100,
          bg: '$red500',
          justifyContent: 'Center',
          alignItems: 'center',
          // OUTLINE
          // shadowColor: '$green500',
          // shadowOffset: { width: 0, height: 10 },
        },
      }}
    >
      <Text sx={{ style: { color: 'white', fontWeight: 'bold' } }}>BOX</Text>
    </Box>
  );
};
export const WithRef: MyCustomBoxStory = ({ ...props }) => {
  const myRef = React.useRef({});
  React.useEffect(() => {
    const styleObj = {
      borderWidth: 8,
      borderRadius: 4,
      borderColor: '#22D3EE',
    };
    // @ts-ignore
    myRef.current.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);

  return (
    <Box
      {...props}
      sx={{ style: { h: 100, w: 100, bg: '$red500' } }}
      ref={myRef}
    />
  );
};

WithRef.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

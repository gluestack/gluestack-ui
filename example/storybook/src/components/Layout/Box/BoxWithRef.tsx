import type { ComponentStory } from '@storybook/react-native';
import { Box, Center } from '../../../ui-components';
import React from 'react';

type MyCustomBoxStory = ComponentStory<typeof Box>;

export const BoxWithRefExample: MyCustomBoxStory = ({ ...props }: any) => {
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
    <Center>
      <Box {...props} sx={{ h: 100, w: 100, bg: '$red500' }} ref={myRef} />
    </Center>
  );
};

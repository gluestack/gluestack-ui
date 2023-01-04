import { ComponentStory } from '@storybook/react-native';
import { Box } from '@gluestack/ui';
import React from 'react';

type MyCustomBoxStory = ComponentStory<typeof Box>;

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
  controls: {
    exclude: /.*/g,
  },
};

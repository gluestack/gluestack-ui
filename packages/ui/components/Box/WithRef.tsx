import React from 'react';
import { Box } from '@gluestack/ui';

export const Example = ({ ...props }) => {
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

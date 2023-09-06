import { Box } from '@gluestack-ui/themed';
import React from 'react';

const BoxWithRef = ({ ...props }: any) => {
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

  return <Box {...props} sx={{ h: 100, w: 100, bg: '$red500' }} ref={myRef} />;
};

export default BoxWithRef;

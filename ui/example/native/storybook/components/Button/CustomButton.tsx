import { Button, ButtonText } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

// const components = {}
export const CustomButtonBasicExample = ({ props }: any) => {
  const myRef = React.useRef(null);

  React.useEffect(() => {
    const styleObj = {
      borderWidth: 4,
      borderRadius: 4,
      borderColor: '#22D3EE',
    };
    // @ts-ignore
    myRef?.current?.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);

  return (
    <Wrapper>
      <Button
        sx={{
          style: {
            bg: '$green.400',
          },
        }}
        variant="blueBox"
        size="medium"
      >
        <Button.Text>Click me</Button.Text>
      </Button>
    </Wrapper>
  );
};

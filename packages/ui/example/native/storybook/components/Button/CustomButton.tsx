import {
  Box,
  Text,
  Heading,
  UIProvider,
  Center,
  Checkbox,
  Button,
  ButtonText,
} from '@gluestack/ui';
import React from 'react';

import * as StyledComponent from '../../components-styled';
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
        <ButtonText>Click me</ButtonText>
      </Button>
    </Wrapper>
  );
};

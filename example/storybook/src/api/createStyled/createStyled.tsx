import React from 'react';
import { View } from 'react-native';
import {
  // createStyled,
  // AddCssTokenVariables,
  styled,
  Theme,
} from '@gluestack-style/react';
import Wrapper from '../../components/Wrapper';

// const styledCustomized = createStyled([new AddCssTokenVariables({})]);

const Box = styled(View, {
  w: 100,
  h: 200,
  bg: '$primary200',
  _dark: {
    bg: '$green500',
  },
});

export function CreateStyled() {
  return (
    <Wrapper>
      <Theme name="x">
        <Box
          // bg="$primary200"
          bg="red"
          sx={{
            //   // _light: {
            //   //   bg: '$red700',
            //   // },
            _dark: {
              bg: '$yellow500',
            },
          }}
        ></Box>
        {/* <Box></Box> */}
      </Theme>

      <Box
      // bg="$primary200"

      // sx={{
      //   _light: {
      //     bg: '$red700',
      //   },
      //   _dark: {
      //     bg: '$primary500',
      //   },
      // }}
      ></Box>

      {/* <Box></Box> */}
    </Wrapper>
  );
}
export default CreateStyled;

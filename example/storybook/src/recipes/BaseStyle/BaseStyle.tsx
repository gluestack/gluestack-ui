import React from 'react';

import { Text, Pressable } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
const StyledButton = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$red500',
        p: '$3',
      },
    },
  },
  {}
);

const StyledButtonText = styled(Text, {}, {});

export const BaseStyle = ({ ...args }) => {
  return (
    <Wrapper>
      <StyledButton>
        <StyledButtonText>Button Using BaseStyle</StyledButtonText>
      </StyledButton>
    </Wrapper>
  );
};

// export function BaseStyle({ ...args }) {
//   return (
//     <Wrapper>
//       <StyledButton {...args}>
//         <StyledButtonText>Button Using BaseStyle</StyledButtonText>
//       </StyledButton>
//     </Wrapper>
//   );
// }

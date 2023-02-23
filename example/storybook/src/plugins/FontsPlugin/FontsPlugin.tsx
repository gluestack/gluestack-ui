import React from 'react';
import { createStyled, FontResolver } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { Text } from 'react-native';

const styledFonts = createStyled([new FontResolver()]);

const StyledText = styledFonts(Text, {
  fontFamily: 'Nunito Sans',
  fontWeight: 800,
  fontStyle: 'italic',
  fontSize: '$xl',
});

export function FontsPlugin() {
  return (
    <Wrapper>
      <StyledText>Hello world</StyledText>
    </Wrapper>
  );
}

export default FontsPlugin;

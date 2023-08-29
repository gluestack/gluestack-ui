import React from 'react';
import { createStyled, FontResolver } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { Platform, Text } from 'react-native';

const styledFonts = createStyled([
  new FontResolver({
    mapFonts: (style) => {
      if (Platform.OS !== 'web') {
        style.fontFamily =
          style.fontFamily + '-' + style.fontWeight + '-' + style.fontStyle;
        style.fontWeight = undefined;
        style.fontStyle = undefined;
      }
    },
  }),
]);

const StyledText = styledFonts(Text, {
  fontFamily: 'Nunito Sans',
  fontWeight: 800,
  fontStyle: 'normal',
  fontSize: '$xl',
});

export function CustomFontMapper() {
  return (
    <Wrapper>
      <StyledText>Hello world</StyledText>
    </Wrapper>
  );
}

export default CustomFontMapper;

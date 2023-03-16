import { createStyled, FontResolver } from '@dank-style/react';

// const fontMapper = (style: any) => {
// };

export const styled = createStyled([
  new FontResolver({
    // mapFonts: fontMapper,
  }),
]);

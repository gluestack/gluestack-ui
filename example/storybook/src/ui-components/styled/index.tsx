import {
  AnimationResolver,
  createStyled,
  FontResolver,
  // styled,
} from '@dank-style/react';

// const fontMapper = (style: any) => {
// };

export const styled = createStyled([
  new AnimationResolver({}),
  new FontResolver({
    // mapFonts: fontMapper,
  }),
]) as any;

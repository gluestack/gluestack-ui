import {
  createStyled,
  // FontResolver
} from '@gluestack-style/react';
import { AnimationResolver } from '@dank-style/animation-plugin';

// const fontMapper = (style: any) => {};

export const styled = createStyled([
  new AnimationResolver({}),
  // new FontResolver({
  // mapFonts: fontMapper,
  // }),
]);

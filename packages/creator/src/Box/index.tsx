import { Box as BoxMain } from './Box';

export const createBox = ({ StyledBox }: any) => {
  const Box = BoxMain(StyledBox) as any;

  Box.displayName = 'Box';
  return Box;
};

import Box from './Box';

export const createBox = ({ StyledBox }: any) => {
  const BoxTemp = Box(StyledBox) as any;
  return BoxTemp;
};

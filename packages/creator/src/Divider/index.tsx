import { Divider as DividerMain } from './Divider';

export const createDivider = ({ StyledDivider }: any) => {
  const Divider = DividerMain(StyledDivider);
  Divider.displayName = 'Divider';
  return Divider;
};

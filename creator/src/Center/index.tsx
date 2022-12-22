import { Center as CenterMain } from './Center';

export const createCenter = ({ StyledCenter }: any) => {
  const Center = CenterMain(StyledCenter);
  Center.displayName = 'Center';

  return Center;
};

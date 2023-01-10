import { Center as CenterMain } from './Center';

export function createCenter<T>({
  StyledCenter,
}: {
  StyledCenter: React.ComponentType<T>;
}) {
  const Center = CenterMain(StyledCenter);
  Center.displayName = 'Center';

  return Center;
}

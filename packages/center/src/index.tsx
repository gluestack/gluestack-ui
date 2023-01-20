import { Center as CenterMain } from './Center';

export function createCenter<T>({ Root }: { Root: React.ComponentType<T> }) {
  const Center = CenterMain(Root);
  Center.displayName = 'Center';

  return Center;
}

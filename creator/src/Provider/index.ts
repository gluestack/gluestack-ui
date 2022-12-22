import { Provider as MainProvider } from './Provider';

export const createProvider = () => {
  const Provider = MainProvider() as any;
  Provider.displayName = 'Provider';
  return Provider;
};
